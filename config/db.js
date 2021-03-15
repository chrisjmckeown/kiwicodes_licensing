const mongoose = require('mongoose');
// const config = require('config');
var sql_db = require('../models/sql');
require('dotenv').config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

const connectSQLDB = () => {
  sql_db.sequelize
    .sync({ force: false })
    .then(() => {
      console.log('SQL DB Connected...');
    })
    .catch((err) => {
      console.error(err);
      // Exit process with failure
      process.exit(1);
    });
};

module.exports.connectMongoDB = connectMongoDB;
module.exports.connectSQLDB = connectSQLDB;
