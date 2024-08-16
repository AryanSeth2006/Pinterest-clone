const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://user:9889@assignm.6iptpq7.mongodb.net/pinterest?retryWrites=true&w=majority&appName=assignm');

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  contact: {
    type: String,
    trim: true
  },
  profileImage: {
    type: String,
    default: 'default-image.jpg'
  },
  boards: {
    type: Array,
    default: []
  },
  posts:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }
  ]
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);