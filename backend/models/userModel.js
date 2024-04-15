import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
      type: String,
      required: true,
      minLength: 6
  },
  profilePic: {
    type: String,
    default: "",
  },
 
},
  { timestaps: true }
);

const User = mongoose.model('User', userSchema);

export default User;