import mongoose, { mongo } from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    companyLogo: {
      type: String,
      default: null,
      required: true,
    },

    companyWebsite: {
      type: String,
      trim: true,
      required: true,
    },

    industry: {
      type: String,
      trim: true,
    },

    headquarters: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      maxlength: 3000,
      required: true,
    },

    foundedYear: Number,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Companies = mongoose.model("Companies", companySchema);
