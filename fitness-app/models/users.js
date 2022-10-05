const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
      type: String
    },

    email: {
     type: String
    },

    password: {
      type: String,
    },
  });


const user = model('user', userSchema);


module.exports = User;