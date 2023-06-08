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

exports.updateOrg = (orgId, params) => {
  return Organization.findOneAndUpdate({ orgId: orgId }, params, {
    new: true,
  });
};
