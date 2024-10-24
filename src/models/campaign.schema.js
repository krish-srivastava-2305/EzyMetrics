import mongoose, { Schema } from "mongoose";

const campaignSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["email", "social", "ppc"],
      required: true,
    },
    budget: Number,
    startDate: Date,
    endDate: Date,
    metrics: {
      impressions: { type: Number, default: 0 },
      clicks: { type: Number, default: 0 },
      conversions: { type: Number, default: 0 },
    },
    status: {
      type: String,
      enum: ["draft", "active", "paused", "completed"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);
