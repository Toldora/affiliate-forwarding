const turboController = require('./turbo');
const alanbaseController = require('./alanbase');
const { groupEvents, sumGroupedEvents } = require('../utils/group-events');
const { EVENTS } = require('../const/events');

const handleRegistrations = async () => {
  try {
    const players = await turboController.fetchPlayers();

    if (players.length) {
      await alanbaseController.postGoals(players);
    }
  } catch (error) {
    console.log('handleRegistrations', error);
  }
};

const handleEvents = async () => {
  try {
    const events = await turboController.fetchEvents();

    if (events.length) {
      await alanbaseController.postEvents(events);
    }
  } catch (error) {
    console.log('handleEvents', error);
  }
};

const handleBets = async () => {
  try {
    const betsRaw = await turboController.fetchBets();

    const bets = [];
    const wins = [];

    betsRaw.forEach(bet => {
      switch (bet.event) {
        case EVENTS.bet:
          bets.push(bet);
          break;
        case EVENTS.win:
          wins.push(bet);
          break;
        default:
          break;
      }
    });
    const betsGroupedByUserId = groupEvents(bets);
    const winsGroupedByUserId = groupEvents(wins);
    const summedBets = sumGroupedEvents(betsGroupedByUserId);
    const summedWins = sumGroupedEvents(winsGroupedByUserId);

    if (summedBets.length || summedWins.length) {
      await alanbaseController.postEvents([...summedBets, ...summedWins]);
    }
  } catch (error) {
    console.log('handleBets', error);
  }
};

module.exports = {
  ...turboController,
  ...alanbaseController,
  handleRegistrations,
  handleEvents,
  handleBets,
};
