const mongoose = require("mongoose");
const Device = require("../schema/deviceSchema");

exports.getDeviceList = () => {
  return Device.find({});
};

exports.addDevice = (params) => {
  const newDevice = new Device(params);
  return newDevice.save();
};

exports.getDetails = (deviceId) => {
  return Device.aggregate([
    {
      $match: { deviceId: deviceId },
    },
    {
      $project: { deviceId: 1, deviceName: 1, deviceStatus: 1, assignedTo: 1 },
    },
  ]);
  //   return Device.find({ deviceId: inDeviceId });
};
