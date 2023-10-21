import { Schema, model,Types } from "mongoose";


const teamSchema = new Schema(
  {
    captain: {
      type: Schema.Types.ObjectId, ref: "User", default: null
    },
    image: {
      type: String,
      default: null
    },
    name: {
      type: String,
    },
    players: 
      {
        type: Schema.Types.ObjectId, ref: "User", default: null
      }
    , //Pruebas en query con populate
    category: {
      type: String, //cambiar posterior cuando este creada la entidad category 
    },
  },
  { timestamps: true }
);

export default model("Team", teamSchema);
