require('../../index');

const handler = async () => {
  console.log('invoke');
  try {
    await fetch(
      'https://mellow-basbousa-4a0130.netlify.app/.netlify/functions/cron',
      {
        method: 'POST',
      },
    );
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;
