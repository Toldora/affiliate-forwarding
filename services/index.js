const Player = require('./scheme/Player');

const createPlayer = async player => {
  try {
    const newPlayer = new Player(player);

    await newPlayer.save();
    return newPlayer;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPlayer,
};
