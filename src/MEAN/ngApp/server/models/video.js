const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title:String,
  url: String,
  description:String
});

module.exports = mongoose.model('video', VideoSchema,'Video');
