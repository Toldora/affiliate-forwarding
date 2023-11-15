const dayjs = require('dayjs');
const { alanbaseApi } = require('../api');
const { EVENTS } = require('../const');
require('dotenv').config();

const postGoals = async (goals, event = EVENTS.registration) => {
  try {
    if (!goals?.map) return;

    const normalizedGoals = goals.map(goal => ({
      click_id: goal.qtag.split('.')[1] ?? goal.qtag,
      goal: event,
      custom1: goal.id,
      custom2: goal.nick,
      datetime: dayjs(goal.registration_date).unix(),
    }));

    await alanbaseApi.post(
      `/goals/${process.env.ALANBASE_API_PATH_KEY}`,
      normalizedGoals,
    );
  } catch (error) {
    console.log('error.data', error.response.data);
    // throw error;
  }
};

module.exports = { postGoals };
