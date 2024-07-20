const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema({
        title:String,
        content:String,
        keyWords:Array,
        image:String,
        author_name:String,
        date_time: { type: Date, default: Date.now },
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
