const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cron = require('node-cron');
const { handleRegistrations } = require('./controllers');
require('./plugins');
require('dotenv').config();

const PORT = process.env.PORT || 3030;

app.use(logger('dev'));

app.get('/', async (req, res) => {
  await handleRegistrations();
  res.end();
});

app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: 'fail',
    code: 500,
    message: err.message,
    data: 'Internal Server Error',
  });
});

const init = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST, {
      retryWrites: true,
      w: 'majority',
    });
    // every 5 minutes
    // '0 */5 * * * *'
    // cron.schedule('*/10 * * * * *', () => {
    //   fetchPlayers();
    // });

    app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (e) {
    console.log(e);
  }
};

init();

module.exports = app;
