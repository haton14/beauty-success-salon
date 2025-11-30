import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const url = new URL(event.request.url);
  
  // ルートパスの場合はindex.htmlを返す
  if (url.pathname === '/') {
    url.pathname = '/index.html';
  }
  
  // .htmlがない場合は追加を試みる
  if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
    url.pathname = url.pathname + '.html';
  }

  const options = {
    // キャッシュの設定
    cacheControl: {
      browserTTL: 60 * 60 * 24 * 7, // 1週間
      edgeTTL: 60 * 60 * 24 * 30, // 30日
      bypassCache: false,
    },
    // MIMEタイプの設定
    mapRequestToAsset: (req) => {
      const parsed = new URL(req.url);
      const pathname = parsed.pathname;
      
      // 画像の最適化
      if (pathname.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i)) {
        return new Request(req.url, req);
      }
      
      return new Request(url.toString(), req);
    },
  };

  try {
    // KVからアセットを取得
    const response = await getAssetFromKV(event, options);
    
    // セキュリティヘッダーを追加
    const headers = new Headers(response.headers);
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // HTMLファイルの場合はキャッシュ制御を調整
    if (response.headers.get('content-type')?.includes('text/html')) {
      headers.set('Cache-Control', 'public, max-age=3600'); // 1時間
    }
    
    return new Response(response.body, {
      ...response,
      headers,
    });
  } catch (e) {
    // 404エラーの場合
    if (e.status === 404) {
      // 404ページがあれば返す、なければシンプルな404レスポンス
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
        });
        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404,
        });
      } catch {
        return new Response('ページが見つかりません', { status: 404 });
      }
    }
    
    // その他のエラー
    return new Response('エラーが発生しました', { status: 500 });
  }
}