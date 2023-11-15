const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    id: {
      type: String,
      index: true,
      unique: true,
    },
    qtag: {
      type: String,
    },
    bonus_code: {
      type: String,
    },
    registration_date: {
      type: String,
    },
    nick: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = model('Player', schema);
