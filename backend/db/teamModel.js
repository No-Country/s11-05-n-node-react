import { Schema, model, Types } from "mongoose";

const teamSchema = new Schema(
  {
    captain: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    name: {
      type: String,
    },
    players: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  { timestamps: true }
);

export default model("Team", teamSchema);
