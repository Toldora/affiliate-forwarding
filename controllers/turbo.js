const dayjs = require('dayjs');
const { turboApi } = require('../api');
require('dotenv').config();

const toFetchFormat = date => date.format('YYYY-MM-DD H:mm');

const fetchPlayers = async () => {
  const currentDate = dayjs().utc();
  const dateFrom = currentDate.subtract(
    Number(process.env.FETCH_INTERVAL_MINUTES),
    'minute',
  );

  const { data } = await turboApi.get(
    `/players?date_from=${toFetchFormat(dateFrom)}&date_to=${toFetchFormat(
      currentDate,
    )}`,
  );
  const players = data?.data ?? data;
  return players;
};

const fetchEvents = async () => {
  const currentDate = dayjs().utc();
  const dateFrom = currentDate.subtract(
    Number(process.env.FETCH_INTERVAL_MINUTES),
    'minute',
  );

  const { data } = await turboApi.get(
    `/events?date_from=${toFetchFormat(dateFrom)}&date_to=${toFetchFormat(
      currentDate,
    )}`,
  );
  const events = data?.data ?? data;
  const normalizedEvents = events.map(event => ({
    ...event,
    user_id: event.custom1,
  }));
  return normalizedEvents;
};

const fetchBets = async () => {
  const currentDate = dayjs().utc();
  const dateFrom = currentDate
    .subtract(
      // Number(process.env.FETCH_INTERVAL_MINUTES),
      6,
      'hour',
    )
    .subtract(
      // Number(process.env.FETCH_INTERVAL_MINUTES),
      30,
      'minute',
    );

  const { data } = await turboApi.get(
    `/bets?date_from=${toFetchFormat(dateFrom)}&date_to=${toFetchFormat(
      currentDate,
    )}`,
  );
  const bets = data?.data ?? data;
  const normalizedBets = bets.map(bet =>
    bet.user_id
      ? bet
      : {
          ...bet,
          user_id: bet.custom1,
        },
  );
  return normalizedBets;
};

module.exports = { fetchPlayers, fetchEvents, fetchBets };
