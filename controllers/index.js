const turboController = require('./turbo');
const alanbaseController = require('./alanbase');

const handleRegistrations = async () => {
  try {
    const players = await turboController.fetchPlayers();
    // const promises = players.map(async player => await createPlayer(player));
    // const createdPlayers = (await Promise.all(promises)).filter(player =>
    //   Boolean(player),
    // );

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
    const bets = await turboController.fetchBets();

    if (bets.length) {
      await alanbaseController.postEvents(bets);
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
