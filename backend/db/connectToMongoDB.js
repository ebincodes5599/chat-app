import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		console.log('MongoDB URI:', process.env.MONGO)
		await mongoose.connect(process.env.MONGO);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
