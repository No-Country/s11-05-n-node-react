import { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    captain: {
      type: { type: Types.ObjectId, ref: "User" }
    },
    image: {
      type: String,
      default: null
    },
    name: {
      type: String,
    },
    players: [{ type: Types.ObjectId, ref: "User", default: null }], //Pruebas en query con populate
    category: {
      type: String, //cambiar posterior cuando este creada la entidad category 
    },
  },
  { timestamps: true }
);

export default model("Team", teamSchema);
