const mongoose = require("mongoose")


require('dotenv').config()

const connection = mongoose.connect(process.env.inUrl)
inUrl = "https://innorik-news-website-backend-shivanshum.vercel.app/";
module.exports = {
    connection
}