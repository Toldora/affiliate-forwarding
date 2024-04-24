require('../../index');

const { handleBets } = require('../../controllers');

const handler = async () => {
  await handleBets();

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;
