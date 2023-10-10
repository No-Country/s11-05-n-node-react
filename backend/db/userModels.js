import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    avatar: {
      type: String,
    },

    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    nickName: {
      type: String,
    },

    email: {
      type: String,
      require: true,
    },

    category: [
      {
        name: String,
        playes: String,
      },
    ],

    passwordhash: {
      type: String,
    },

    myTeams: [
      {
        type: Boolean,
        default: false,
      },
    ],
    friends: {
      type: String,
    },

    cellNumber: {
      type: Number,
    },

    dateOfBirth: Date,

    verificationCode: {
      type: String,
    },

    emailStatus: {
      type: String,
      default: "UNVERIFIED",
    },
    nationality: {
      type: String,
    },
    age: {
      type: Number,
    },

    ubicatin: {
      country: String,
      city: String,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
