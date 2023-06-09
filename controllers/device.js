const mongoose = require("mongoose");
const Device = require("../models/Device");

exports.createDevice = async (ctx) => {
  try {
    const params = ctx.request.body;
    const status = await Device.addDevice(params);
    ctx.response.body = {
      mDeviceId: status._id,
      message: "Device added successfully",
    };
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.getAllDevices = async (ctx) => {
  try {
    const deviceList = await Device.getDeviceList();
    ctx.response.body = deviceList;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.getDeviceDetails = async (ctx) => {
  try {
    const { id } = ctx.params;
    const deviceDetail = await Device.getDetails(id);
    ctx.response.body = deviceDetail;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};
