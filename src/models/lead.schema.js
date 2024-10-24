import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "converted"],
      default: "new",
    },

    source: String,

    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
