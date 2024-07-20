const asyncHandler = require("express-async-handler");
const commentModel = require("../models/form");

const allComments = asyncHandler(async (blog_id) => {
  const entries = await commentModel
    .find({ _id: blog_id })
    .exec();
  return entries;
});

module.exports = allComments;
