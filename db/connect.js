import mongoose from "mongoose";

//return a promise
const connectDB = (url) => {
    return mongoose.connect(url);
}

export default connectDB