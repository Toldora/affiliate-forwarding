const express = require('express');
const app = express();
const logger = require('morgan');

require('./plugins');
require('dotenv').config();

const PORT = process.env.PORT || 3030;

app.use(logger('dev'));

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
    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

// init();

module.exports = app;
