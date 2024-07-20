const asyncHandler = require("express-async-handler");
const blogModel = require("../models/blogs");

const saveBlog = asyncHandler(async (data) => {
  const { title, content, keyWords, image, author_name } = data;
  console.log('Data received in saveBlog:', data)

  await blogModel.create({
    title,
    content,
    keyWords,
    image,
    author_name
  });

});

module.exports =  saveBlog ;
