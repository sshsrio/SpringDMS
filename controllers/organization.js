const mongoose = require("mongoose");
const Organization = require("../models/Organization");

exports.createOrganization = async (ctx) => {
  try {
    const { orgId, orgName, orgEmail } = ctx.request.body;
    // console.log(ctx.request.body);
    const result = await Organization.create(orgId, orgName, orgEmail);
    ctx.response.body = {
      mOrgId: result._id,
      message: "organization created successfully",
    };
  } catch (err) {
    ctx.body = err;
  }
};

exports.getOrgDetails = async (ctx) => {
  try {
    const { orgId } = ctx.params;
    // console.log(orgId);
    const orgDetails = await Organization.getDetails(orgId);
    ctx.response.body = orgDetails;
  } catch (err) {
    ctx.response.body = err;
  }
};

exports.getAllOrg = async (ctx) => {
  try {
    const allOrgDetails = await Organization.getOrgList();
    ctx.response.body = allOrgDetails;
  } catch (err) {
    ctx.response.body = err;
  }
};

exports.removeOrg = async (ctx) => {
  try {
    const { orgId } = ctx.params;
    await Organization.deleteOrg(orgId);
    ctx.response.body = {
      message: "Organization Successfully Deleted",
    };
  } catch (err) {
    ctx.response.body = err;
  }
};

exports.updateOrg = async (ctx) => {
  try {
    const { orgId } = ctx.params;
    const params = ctx.request.body;

    await Organization.updateOrg(orgId, params);
    ctx.response.body = {
      message: "Successfully Updated",
    };
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};
