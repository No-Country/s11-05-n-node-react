import { Schema, model, Types } from "mongoose";

const categorySchema = new Schema(
  {
    image: String,
    name: String, //
    type: String, //sport or game
  },
  { timestamps: true }
);

export default model("Category", categorySchema);
