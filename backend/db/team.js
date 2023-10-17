import { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: tring,
    },
    integrantes: [{ type: Types.ObjectId, ref: "User" }],
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("User", teamSchema);
