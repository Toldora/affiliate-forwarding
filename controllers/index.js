const { createPlayer } = require('../services');
const { EVENTS } = require('../const');
const turboController = require('./turbo');
const alanbaseController = require('./alanbase');

const handleRegistrations = async () => {
  try {
    const players = await turboController.fetchPlayers();
    const promises = players.map(async player => await createPlayer(player));
    const createdPlayers = (await Promise.all(promises)).filter(player =>
      Boolean(player),
    );
    console.log(createdPlayers);

    // if (createdPlayers.length) {
    await alanbaseController.postGoals(createdPlayers, EVENTS.registration);
    // }
  } catch (error) {
    console.log('124214214124', error);
  }
};

module.exports = {
  ...turboController,
  ...alanbaseController,
  handleRegistrations,
};
