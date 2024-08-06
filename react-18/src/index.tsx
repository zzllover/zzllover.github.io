import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Workbox } from 'workbox-window';
import App from './App';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

document.addEventListener('DOMContentLoaded', async () => {
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  // 当新的 Service Worker 进入 waiting 状态时触发
  wb.addEventListener('waiting', () => {
    console.log("waiting")
    if (confirm('New content is available. Click OK to refresh.')) {
      wb.messageSW({ type: 'SKIP_WAITING' });
    }
  });

  // 当新的 Service Worker 开始控制页面时触发
  wb.addEventListener('controlling', () => {
    console.log("controlling")
    window.location.reload();
  });

  // 当新的 Service Worker 完成激活时触发
  wb.addEventListener('activated', (event) => {
    console.log("activated")
    if (event.isUpdate) {
      console.log("New content is available. Click OK to ref")
      if(confirm('New content is available. Click OK to refresh.')){
      }
    }
  });

  // 注册 Service Worker
  wb.register();

  // @ts-ignore
  // document.getElementById('update-sw')?.addEventListener('click', () => {
  //   wb.update();
  // });
  // 定时检查更新，每小时检查一次
  setInterval(() => {
    wb.update();
  },  10 * 1000); // 1小时
}
});
