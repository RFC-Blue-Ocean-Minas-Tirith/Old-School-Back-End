
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/OldSchool', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Connected to Database")
});


const userSchema = new Schema({
  objectID: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  profilePicture: String,
  username: { type: String, required: true, index: true },
  email: String,
  password: String,
  aboutMe: String,
  favCreator: Array,
  favoritedCount: Number,
  isAdmin: {type: Boolean, default: false},
});

const videoSchema = new Schema({
  objectID: Schema.Types.ObjectId,
  title: String,
  description: String,
  username: { type: String, required: true, index: true },
  dateUploaded: Date,
  keywords: Array,
  comments: [{
    id: Number,
    author: String,
    date: Date,
    comment: String,
    isReported: {type: Boolean, default: false},
  }],
  thumbnail: String,
  url: String,
  votes: {
    insightful: {
      usernames: Array,
      count: Number,
    },
    funny: {
      usernames: Array,
      count: Number,
    },
    informative: {
      usernames: Array,
      count: Number,
    },
  },
  private: Boolean,
  reported: {type: Boolean, default: false},
});

const blogSchema = new Schema({
  objectID: Schema.Types.ObjectId,
  title: String,
  description: String,
  username: { type: String, required: true, index: true },
  dateUploaded: Date,
  keywords: Array,
  private: Boolean,
});

const UserData = mongoose.model('UserData', userSchema);
const VideoData = mongoose.model('VideoData', videoSchema);
const BlogData = mongoose.model('BlogData', blogSchema);



module.exports.UserData = UserData;
module.exports.VideoData = VideoData;
module.exports.BlogData = BlogData;
