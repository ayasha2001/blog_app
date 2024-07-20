const asyncHandler = require("express-async-handler");
const commentModel = require("../models/comments");

const saveComment = asyncHandler(async (data) => {

  const { associated_post_id, comment_content, author_name } = data;

  await commentModel.create({
    associated_post_id,
    comment_content,
    author_name,
  });
  
});

module.exports = saveComment;
