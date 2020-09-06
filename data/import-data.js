const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Tour = require('../models/tourModel');

dotenv.config({
  path: './config.env'
});
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tour-data.json`, {
    encoding: 'utf-8'
  })
);
mongoose
  .connect(process.env.DB_URL.replace('<password>', process.env.DB_PASS), {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected');
  })
  .catch(err => console.log(err));

const importData = async () => {
  await Tour.create(tours);
  console.log('created');
};
importData();
