

import express from 'express';
// import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import rootRoutes from './routes/root.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

// Construct __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables, assuming .env is in the root directory
dotenv.config({ path: path.join(__dirname, '../.env') });
const app = express();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cors from 'cors';



// import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 5000;



mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority',
    },
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });



// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true,
}));
app.use((req, res, next) => {
  console.log('Received request:', req.method, req.path);
  next();
});


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.use(express.static(path.join(__dirname, "/frontend/chat-app/dist")));
app.use(express.static(path.join(__dirname, "../frontend/dist")));


app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend",  "dist", "index.html"));
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

