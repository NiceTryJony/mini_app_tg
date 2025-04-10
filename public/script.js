import { init, miniApp } from 'https://cdn.jsdelivr.net/npm/@telegram-apps/sdk@1.1.4/dist/telegramp-apps-sdk.esm.js';

init();
if (miniApp.ready.isAvailable()) {
  miniApp.ready().then(() => {
    console.log('Mini App готово!');
  });
}
