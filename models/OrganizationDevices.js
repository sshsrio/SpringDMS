const OrganizationDevice = require("../schema/organizationDevicesSchema");

exports.createOrgDev = (params) => {
  const newOrgDevice = new OrganizationDevice(params);
  return newOrgDevice.save();
};

exports.getOrgsAndDevices = () => {
  // return OrganizationDevice.aggregate([
  //   {
  //     $match: { orgId: orgId },
  //   },
  // ]);
  return OrganizationDevice.find({});
};

// exports.getDevUnderOrg = (orgId) => {
//   const deviceList = OrganizationDevice.find({
//     orgId: orgId,
//   })
//     .populate("orgId")
//     .populate("deviceId")
//     .exec();

//   // console.log(deviceList[0]);
//   return deviceList;
// };

exports.getDevUnderOrg = (orgId) => {
  const device = OrganizationDevice.aggregate([
    {
      $match: { orgId: orgId },
    },
    {
      $lookup: {
        from: "devices",
        localField: "deviceId",
        foreignField: "deviceId",
        as: "deviceData",
      },
    },
    {
      $project: {
        "deviceData._id": 0,
        "deviceData.deviceId": 0,
        "deviceData.__v": 0,
      },
    },
  ]).project({
    _id: 1,
    orgId: 1,
    deviceId: 1,
    deviceData: {
      $arrayElemAt: ["$deviceData", 0],
    },
  });

  return device;
};
