const dayjs = require('dayjs');
const { turboApi } = require('../api');
require('dotenv').config();

const fetchPlayers = async () => {
  const currentDate = dayjs();
  // const fetchDateFormat = currentDate.format('YYYY-MM-DD');

  // Включаем пользователей за последние два интервала
  // плюс минута на погрешность
  const includingDate = dayjs('2023-11-08 14').subtract(
    process.env.FETCH_INTERVAL_MINUTES * 2 + 1,
    'minute',
  );

  const { data } = await turboApi.get(
    `/players?date_from=${'2023-11-14'}&date_to=${'2023-11-14'}`,
  );
  const players = data?.data ?? data;
  const newPlayers = players.filter(player => {
    return true;
    const registration_date = dayjs(player.registration_date);
    return registration_date.isSameOrAfter(includingDate);
  });
  return newPlayers;
};

module.exports = { fetchPlayers };
