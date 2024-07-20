const asyncHandler = require('express-async-handler');
const fetchSimilarBlogs = require('../services/fetchSimilarBlogs');

const getSimilarBlogs = asyncHandler(async (req, res) => {
  const { blog_id } = req.query;
  try {
    const similarBlogs = await fetchSimilarBlogs(blog_id);
    res.status(200).json(similarBlogs);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to fetch similar blogs', error });
  }
});

module.exports = getSimilarBlogs;
