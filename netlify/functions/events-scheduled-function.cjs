require('../../index');

const { handleEvents } = require('../../controllers');

const handler = async () => {
  await handleEvents();

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;
