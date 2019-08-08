const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String
    },
    email: {
      type: String
    },
    comment: {
      type: String
    }
  },
  {
    collection: 'Comment'
  }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
