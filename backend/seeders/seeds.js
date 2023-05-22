const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Create users
// const users = [];

// users.push(
//   new User ({
//     email: 'demo-user@appacademy.io',
//     hashedPassword: bcrypt.hashSync('starwars', 10)
//   })
// )

// const insertSeeds = () => {
//   console.log("Resetting db and seeding users...");

//   User.collection.drop()
//                  .then(() => User.insertMany(users))
//                  .then(() => {
//                    console.log("Done!");
//                    mongoose.disconnect();
//                  })
//                  .catch(err => {
//                    console.error(err.stack);
//                    process.exit(1);
//                  });
// }

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

  //to run file:
  // dotenv node seeders/seeds.js
