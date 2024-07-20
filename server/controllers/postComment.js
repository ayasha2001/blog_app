const asyncHandler = require("express-async-handler");
const saveComment = require("../services/saveComment");

const postComment = asyncHandler(async (req, res) => {
    try {
      await saveComment(req.body);
      res.status(201).send({ message: 'Comment saved successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Failed to save blog', error });
    }
  });

module.exports = postComment;