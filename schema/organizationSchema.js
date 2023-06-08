const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const OrganizationSchema = new Schema(
  {
    orgId: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    orgEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdOn",
      updatedAt: "updateOn",
    },
  }
);

const Organization = mongoose.model("organization", OrganizationSchema);
module.exports = Organization;
