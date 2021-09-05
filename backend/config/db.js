import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.blue.inverse.bold
        );
    } catch (error) {
        console.error(`MongoDB Error: ${error.message}`.red.inverse.bold);
        process.exit(1);
    }
};

export default connectDB;
