const { default: mongoose } = require("mongoose");
const Organization = require("../schema/organizationSchema");

exports.create = (orgId, orgName, orgEmail) => {
  const newOrganization = new Organization({
    orgId,
    orgName,
    orgEmail,
  });
  return newOrganization.save();
};

exports.getDetails = (orgId) => {
  return Organization.find({ orgId });
};

exports.getOrgList = () => {
  return Organization.find({});
};

exports.deleteOrg = (orgId) => {
  return Organization.findOneAndDelete(orgId);
};

// exports.updateOrgName = (orgId, orgNewName) => {
//   console.log(orgId, orgNewName);
//   return Organization.findOneAndUpdate(
//     { orgId: orgId },
//     { orgName: orgNewName },
//     {
//       new: true,
//     }
//   );
// };

exports.updateOrg = (orgId, params) => {
  // console.log(orgId, orgNewName);
  return Organization.findOneAndUpdate({ orgId: orgId }, params, {
    new: true,
  });
};

// exports.updateOrgEmail = (orgId, orgNewEmail) => {
//   return Organization.findOneAndUpdate(
//     { orgId: orgId },
//     { orgEmail: orgNewEmail },
//     {
//       new: true,
//     }
//   );
// };
