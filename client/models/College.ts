import mongoose from "mongoose";

const CollegeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  course: String,
  fees: Number,
  rating: Number,
  placement: String,
  image: String,
});

export default mongoose.models.College ||
  mongoose.model("College", CollegeSchema);
