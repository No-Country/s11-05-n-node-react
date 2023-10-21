import { Schema, model, Types } from "mongoose";

const categorySchema = new Schema(
  {
    category: {
      image: String,
      name: String, //
      type: String, //sport or game
    },
  },
  { timestamps: true }
);

export default model("category", categorySchema);
