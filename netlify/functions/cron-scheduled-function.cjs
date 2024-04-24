require('../../index');

const handler = async () => {
  console.log('invoke');
  try {
    await fetch('/.netlify/functions/cron', {
      method: 'POST',
    });
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;
