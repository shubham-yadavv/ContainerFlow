const mongoose = require('mongoose');
require('dotenv').config();

// const MONGO_USER = process.env.MONGO_USER;
// const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
// const MONGO_IP = process.env.MONGO_IP;
// const MONGO_PORT = process.env.MONGO_PORT;


// const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/mydb", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;
