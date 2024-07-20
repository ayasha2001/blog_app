// library import
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

// utility function import
const connectDB = require("./config/database");

const postBlog = require("./controllers/postBlog");
const postComment = require("./controllers/postComment");
const getAllBlogs = require("./controllers/getAllBlogs");
const getSimilarBlogs = require("./controllers/getSimilarBlogs");
const port = process.env.PORT;

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.post("/write-with-us", postBlog);
app.get("/similar-blogs", getSimilarBlogs);
app.get("/comment", postComment);
app.post("/comment", postComment);
app.get("/blogs", getAllBlogs);

// Start the server
app.listen(8080, () => {
  console.log("Server connected on port", port);
});
