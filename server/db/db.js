/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/OldSchool', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  objectID: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  profilePicture: String,
  username: { type: String, index: true },
  email: String,
  password: String,
  aboutMe: String,
  favCreator: Array,
});

const videoSchema = new Schema({
  objectID: Schema.Types.ObjectId,
  title: String,
  description: String,
  username: { type: String, index: true },
  dateUploaded: Date,
  keywords: Array,
  comments: {
    id: Number,
    author: String,
    date: Date,
  },
  thumbnail: String,
  url: String,
  votes: {
    insightful: {
      usernames: [Array],
      count: Number,
    },
    funny: {
      usernames: [Array],
      count: Number,
    },
    informative: {
      usernames: [Array],
      count: Number,
    },
  },
  private: Boolean,
});

const blogSchema = new Schema({
  objectID: Schema.Types.ObjectId,
  title: String,
  description: String,
  username: { type: String, index: true },
  dateUploaded: Date,
  keywords: Array,
  private: Boolean,
});

const UserData = mongoose.model('UserData', userSchema);
const VideoData = mongoose.model('VideoData', videoSchema);
const BlogData = mongoose.model('BlogData', blogSchema);

const insertUser = async (userObj) => {
  const newUser = new UserData({});
  return newUser.save();
};

const insertVideo = async (videoObj) => {
  const newVideo = new VideoData({});
  return newVideo.save();
};

const insertBlog = async (blogObj) => {
  const newBlog = new BlogData({});
  return newBlog.save();
};

const findUser = async () => {
  const allUsers = UserData.find({});
  return allUsers;
};

const findVideos = async () => {
  const allVideos = VideoData.find({});
  return allVideos;
};

const findBlog = async () => {
  const allBlogs = BlogData.find({});
  return allBlogs;
};

module.exports.insertUser = insertUser;
module.exports.insertVideo = insertVideo;
module.exports.insertBlog = insertBlog;
module.exports.findUser = findUser;
module.exports.findVideos = findVideos;
module.exports.findBlog = findBlog;
module.exports.db = db;
