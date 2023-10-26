import { Schema, model } from "mongoose";

const matcherSchema = new Schema(
  {
    nameTeams: [
      {
        type: Schema.Types.ObjectId,
        ref: "team",
        default: null,
      },
    ],
    date: {
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

    schedule: {
      type: String,
    },
    location: {
      type: String,
      default: null,
    },

    members_in_team: {
      type: Number,
      default: null,
    },
    substitutes_in_team: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export default model("Matcher", matcherSchema);
