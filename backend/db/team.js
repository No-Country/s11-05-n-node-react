import { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: tring,
    },
    integrantes: [{ type: Types.ObjectId, ref: "User" }], //Pruebas en query con populate
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("User", teamSchema);
