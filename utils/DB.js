const mongoose = require('mongoose');

const urlDB = '';

const connect = async () => {
  try {
    await mongoose.connect(urlDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Conected with DB succesfully`);
  } catch (error) {
    console.log('Error to connect with DB');
  }
};

module.exports = {
  connect,
};
