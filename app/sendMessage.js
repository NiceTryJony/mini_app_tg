const axios = require('axios');
const token = '7808910071:AAGxCZ7bkShmwqyp-h4eZzmPrQyCjPsGWzQ'; // Замените на ваш API токен
const chatId = '5598142592'; // Замените на ID чата
const baseUrl = `https://api.telegram.org/bot${token}`;

async function sendMessage() {
  try {
    const options = {
      method: 'POST',
      url: `${baseUrl}/sendMessage`,
      data: {
        chat_id: chatId,
        text: 'Нажмите для открытия приложения_1',
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: 'Открыть приложение',
                web_app: {
                  url: 'https://mini-app-tg-six.vercel.app',
                },
              },
            ],
          ],
          one_time_keyboard: true,
        }),
      },
    };

    const response = await axios(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
