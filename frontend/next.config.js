const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
};

if (isDev) {
  module.exports = nextConfig;
} else {
  const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: false,
    fallbacks: { document: '/offline' },
    runtimeCaching: [
      {
        urlPattern: ({ request }) => request.mode === 'navigate',
        handler: 'NetworkFirst',
        options: { cacheName: 'florence-pages-v1', networkTimeoutSeconds: 3, expiration: { maxEntries: 20 } },
      },
      {
        // Match only FLORENCE emergency endpoints, never Google content or SSE.
        urlPattern: ({ url }) => ['/api/v1/zones/snapshot', '/api/v1/safe-points'].includes(url.pathname),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'florence-emergency-v1',
          networkTimeoutSeconds: 3,
          cacheableResponse: { statuses: [200] },
          expiration: { maxEntries: 20, maxAgeSeconds: 7 * 24 * 3600 },
        },
      },
      {
        urlPattern: /\/_next\/static\/.*/i,
        handler: 'CacheFirst',
        options: { cacheName: 'florence-static-v1', expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 3600 } },
      },
    ],
  });

  module.exports = withPWA(nextConfig);
}
