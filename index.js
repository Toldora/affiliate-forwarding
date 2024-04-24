const cron = require('node-cron');

require('./plugins');
require('dotenv').config();

const init = async () => {
  try {
    cron.schedule('*/20 * * * * *', function () {
      console.log('invoke');
      fetch('/netlify/functions/cron-background', {
        method: 'POST',
      });
    });
  } catch (error) {
    console.log(error);
  }
};

init();
