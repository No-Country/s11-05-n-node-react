import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      default: null,
    },

    firstName: {
      type: String,
      default: null,
    },

    lastName: {
      type: String,
      default: null,
    },

    nickName: {
      type: String,
      default: null,
    },

    email: {
      type: String,
      require: true,
    },

    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
        default: null,
      },
    ],

    passwordhash: {
      type: String,
      default: null,
    },

    myTeams: [
      {
        type: Schema.Types.ObjectId,
        ref: "team",
        default: null,
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
    ],

    cellNumber: {
      type: Number,
      default: null,
    },

    dateOfBirth: {
      type: Date,
      default: null,
    },

    verificationCode: {
      type: String,
      default: null,
    },

    status: {
      type: Boolean,
      default: false,
    },

    age: {
      type: Number,
      default: null,
    },

    ubication: {
      country: {
        type: String,
        default: null,
      },
      city: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
