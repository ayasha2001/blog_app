const asyncHandler = require("express-async-handler");
const fetchBlogById = require("../services/fetchAllComments");

const getBlogById = asyncHandler(async (req, res) => {
  const blog_id = req.query.blog_id;

  await fetchBlogById(blog_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send("Internal Server Error ", error.body);
    });
});

module.exports = getBlogById;
