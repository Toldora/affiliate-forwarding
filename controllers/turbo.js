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
  const playersWithoutEmptyFields = players.map(player => {
    const { custom2, ...rest } = player;
    return custom2 === null ? rest : player;
  });
  return playersWithoutEmptyFields;
};

const fetchEvents = async () => {
  const fetchInterval = Number(process.env.FETCH_INTERVAL_MINUTES);
  // Сдвиг фетча депозитов, чтобы депозиты
  // не приходили в Аланбейз раньше регистраций
  const currentDate = dayjs()
    .utc()
    .subtract(fetchInterval + 1, 'minute');
  const dateFrom = currentDate.subtract(fetchInterval, 'minute');

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
  const fetchInterval = Number(process.env.FETCH_INTERVAL_MINUTES);
  const currentDate = dayjs()
    .utc()
    .subtract(fetchInterval + 1, 'minute');
  const dateFrom = currentDate.subtract(fetchInterval, 'minute');

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
