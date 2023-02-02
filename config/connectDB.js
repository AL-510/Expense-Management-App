const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected".bgCyan.white)
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

module.exports = connectDB;