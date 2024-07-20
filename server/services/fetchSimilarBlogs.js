const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const blogModel = require('../models/blogs');

const getSimilarBlogs = asyncHandler(async (currentBlogId) => {
  const currentBlog = await blogModel.findById(currentBlogId).select('keyWords').exec();
  if (!currentBlog) throw new Error('Blog not found');

  // Get the keywords of the current blog
  const { keyWords } = currentBlog;

  // Find blogs with any matching keywords, excluding the current blog
  const similarBlogs = await blogModel.find({
    _id: { $ne: currentBlogId },
    keyWords: { $in: keyWords },
  }).exec();

  return similarBlogs;
});

module.exports = getSimilarBlogs;
