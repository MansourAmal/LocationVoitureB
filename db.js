const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb://localhost:27017/safarAmir', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.error(`MongoDB connection error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
