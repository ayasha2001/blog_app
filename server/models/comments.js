const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  associated_post_id: String,
  comment_content:String,
  author_name:String,
});

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel;
