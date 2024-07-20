const asyncHandler = require("express-async-handler");
const blogModel = require("../models/blogs");

const getAllBlogs = asyncHandler(async (page, limit) => {
  const blogs = await blogModel.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const count = await blogModel.countDocuments();

  return {
    blogs,
    totalPages: Math.ceil(count / limit),
    currentPage: Number(page),
  };
});

module.exports = getAllBlogs;
