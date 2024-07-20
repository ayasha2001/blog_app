const asyncHandler = require("express-async-handler");
const saveBlog = require("../services/saveBlog");

const postBlog = asyncHandler(async (req, res) => {
    try {
      console.log("req.body in server",req.body)
      console.log("req.body in server",req.body.title)
      await saveBlog(req.body);
      res.status(201).send({ message: 'Blog saved successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Failed to save blog', error });
    }
  });

module.exports = postBlog;