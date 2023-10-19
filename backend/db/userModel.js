import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      default: null
    },

    firstName: {
      type: String,
      default: null
    },

    lastName: {
      type: String,
      default: null
    },

    nickName: {
      type: String,
      default: null
    },

    email: {
      type: String,
      require: true,
    },

    category: [
      {
        name: { type: String, default: null },
        playes: { type: String, default: null },
      },
    ],
    
    passwordhash: {
      type: String,
      default: null
    },

    myTeams: [
      {
        type: Boolean,
        default: false,
      },
    ],
    friends: {
      type: String,
      default: null
    },

    cellNumber: {
      type: Number,
      default: null
    },

    dateOfBirth: {
      type: Date,
      default: null
    },

    verificationCode: {
      type: String,
      default: null
    },

    emailStatus: {
      type: String,
      default: "UNVERIFIED",
    },

    age: {
      type: Number,
      default: null
    },

    ubication: {
      country: {
        type: String,
        default: null
      },
      city: {
        type: String,
        default: null
      },

    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
