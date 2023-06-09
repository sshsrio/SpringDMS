const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DeviceSchema = new Schema({
  deviceId: { type: String, required: true, unique: true },
  deviceName: {
    type: String,
    required: true,
  },
  deviceStatus: {
    type: String,
  },
  assignedTo: {
    type: String,
    required: true,
  },
});

const Device = mongoose.model("device", DeviceSchema);
module.exports = Device;
