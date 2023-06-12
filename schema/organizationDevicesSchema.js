const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const OrganizationDevicesSchema = new Schema({
  orgId: {
    type: String,
    required: true,
  },
  deviceId: {
    type: String,
    required: true,
  },
});

const OrganizationDevices = mongoose.model(
  "OrganizationDevice",
  OrganizationDevicesSchema
);
module.exports = OrganizationDevices;
