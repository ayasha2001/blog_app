const asyncHandler = require("express-async-handler");
const allBlogs = require("../services/fetchAllBlogs");

const getAllBlogs = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const data = await allBlogs(page, limit);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs', error });
  }
});

module.exports = getAllBlogs;
