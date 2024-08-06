/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import { clientsClaim } from 'workbox-core';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// 自定义服务工作线程
// @ts-ignore
self.addEventListener('install', event => {
  // @ts-ignore
  console.log("install")
  self.skipWaiting();
});
// @ts-ignore
self.addEventListener('activate', event => {
  console.log("self activate")
  clientsClaim();
});

// @ts-ignore
const manifest = self.__WB_MANIFEST || [];
precacheAndRoute(manifest);

// 使用 NetworkFirst 策略处理 HTML 请求
// registerRoute(
//     ({ request }) => request.mode === 'navigate',
//     new StaleWhileRevalidate({
//         cacheName: 'html-cache',
//     })
// );

registerRoute(
  ({ request, url }) => {
    const mapSource =
      request.destination === 'image' ||
      request.destination === 'script' ||
      request.destination === 'style';
    return mapSource && !url.pathname.includes("sw.js")
  },
  new CacheFirst({
    cacheName: 'static-resources',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);
