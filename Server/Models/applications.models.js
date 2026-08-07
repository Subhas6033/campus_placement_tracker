import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    drive: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PlacementDrive",
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: [
        "not_applied",
        "applied",
        "shortlisted",
        "online_assessment",
        "interview",
        "selected",
        "rejected",
        "offer_received",
        "offer_accepted",
        "offer_declined",
        "withdrawn",
      ],
      default: "not_applied",
      required: true,
      index: true,
    },

    notAppliedReason: {
      type: String,
      trim: true,
      maxlength: [1000, "Reason cannot exceed 1000 characters"],
      validate: {
        validator: function (value) {
          if (this.status === "not_applied") {
            return value && value.trim().length >= 20;
          }
          return true;
        },
        message: "Reason is required when the status is 'not_applied'.",
      },
    },
  },
  {
    timestamps: true,
  },
);

applicationSchema.index({ user: 1, drive: 1 }, { unique: true });

export const Application = mongoose.model("Application", applicationSchema);
