const { default: mongoose } = require('mongoose');
const Movie = require('../models/Movie');

const movies = [
  {
    title: 'El Hobbit',
    director: 'Peter Jackson',
    year: 2012,
    genre: 'Fantasia',
  },
  {
    title: 'Los Goonies',
    director: 'Richard Donner',
    year: 1985,
    genre: 'Fantasia',
  },
  {
    title: 'Matrix',
    director: 'Lana Wachowski',
    year: 1999,
    genre: 'Accion',
  },
  {
    title: 'El exorcista',
    director: 'William Friedkin',
    year: 1975,
    genre: 'Terror',
  },
  {
    title: 'Brave',
    director: 'Brenda Chapman, Mark Andrews',
    year: 2012,
    genre: 'Animacion',
  },
];

const movieInfo = movies.map((movie) => new Movie(movie));

const movieDocuments = movies.map((movie) => new Movie(movie));
mongoose
  .connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.length) {
      await Movie.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Movie.insertMany(movieDocuments);
    console.log('DatabaseCreated');
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
