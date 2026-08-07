import mongoose from "mongoose";

const placementDriveSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Company name is required."],
      trim: true,
      maxlength: [100, "Company name cannot exceed 100 characters."],
      index: true,
    },

    companyLogo: {
      type: String,
      default: null,
    },

    positions: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],

    jobType: {
      type: String,
      enum: ["full_time", "internship"],
      required: true,
    },

    workMode: {
      type: String,
      enum: ["onsite", "remote", "hybrid"],
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    package: {
      ctc: {
        type: Number,
        required: true,
        min: 0,
      },

      stipend: {
        type: Number,
        default: null,
      },

      currency: {
        type: String,
        default: "INR",
      },
    },

    eligibility: {
      minimumCGPA: {
        type: Number,
        default: 0,
        min: 0,
        max: 10,
      },

      allowedBranches: [
        {
          type: String,
          enum: ["CSE", "IT", "ECE", "EE", "ME", "CE", "ALL"],
        },
      ],

      passingYear: [
        {
          type: Number,
        },
      ],

      activeBacklogsAllowed: {
        type: Number,
        default: 0,
      },

      tenthPercentage: {
        type: Number,
        default: 0,
      },

      twelfthPercentage: {
        type: Number,
        default: 0,
      },
    },

    applicationDeadline: {
      type: Date,
      required: true,
      index: true,
    },

    driveDate: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      maxlength: 5000,
    },

    registrationLink: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["upcoming", "open", "closed", "completed", "cancelled"],
      default: "upcoming",
      index: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

placementDriveSchema.index({
  companyName: "text",
  positions: "text",
});

placementDriveSchema.index({
  status: 1,
  applicationDeadline: 1,
});

placementDriveSchema.index({
  driveDate: 1,
});

export const PlacementDrive = mongoose.model(
  "PlacementDrive",
  placementDriveSchema,
);
