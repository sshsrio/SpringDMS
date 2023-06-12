const { getDetails } = require("../models/Device");
const OrganizationDevices = require("../models/OrganizationDevices");

exports.createOrgDevices = async (ctx) => {
  try {
    const params = ctx.request.body;
    const result = await OrganizationDevices.createOrgDev(params);
    ctx.response.body = {
      id: result._id,
      message: "Successfully added",
    };
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.getAllOrgAndDev = async (ctx) => {
  try {
    const details = await OrganizationDevices.getOrgsAndDevices();
    const allOrgDev = {};
    details.forEach((item) => {
      const { orgId, deviceId } = item;
      if (!allOrgDev.hasOwnProperty(orgId)) allOrgDev[orgId] = [];
      allOrgDev[orgId].push(deviceId);
    });

    ctx.response.body = allOrgDev;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.deviceUnderOrg = async (ctx) => {
  try {
    const { orgId } = ctx.params;
    const devicesList = await OrganizationDevices.getDevUnderOrg(orgId);
    ctx.response.body = devicesList;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};
