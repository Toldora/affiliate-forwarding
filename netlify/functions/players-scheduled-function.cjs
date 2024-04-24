require('../../index');

const { handleRegistrations } = require('../../controllers');

const handler = async () => {
  await handleRegistrations();

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;
