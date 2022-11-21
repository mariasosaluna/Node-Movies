const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    tittle: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number },
    genre: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
