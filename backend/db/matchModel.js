import { Schema, model } from "mongoose";

const matchSchema = new Schema(
  {
    nameTeams: [
      {
        type: Schema.Types.ObjectId,
        ref: "team",
        default: null,
      },
    ],
    date_play: {
      type: Date,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    required_players: {
      type: Number,
      default: null,
    },

    duration: {
      type: String,
      default: null,
    },

    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "category",
        default: null,
      },
    ],

    hour_play: {
      type: String,
    },
    location: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default model("Match", matchSchema);
