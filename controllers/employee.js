const mongoose = require("mongoose");
const Employee = require("../models/Employee");

exports.createEmployee = async (ctx) => {
  try {
    const params = ctx.request.body;
    const status = await Employee.addEmployee(params);
    ctx.response.body = {
      mEmpId: status._id,
      message: "Employee added successfully",
    };
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.getAllEmployees = async (ctx) => {
  try {
    const result = await Employee.getEmployees();
    ctx.response.body = result;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.getEmployeeDetails = async (ctx) => {
  try {
    const { empId } = ctx.params;
    const empDetails = await Employee.getDetails(empId);

    ctx.response.body = empDetails;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.updateEmployeeDetails = async (ctx) => {
  try {
    const { empId } = ctx.params;
    const params = ctx.request.body;
    console.log(empId, params);
    await Employee.updateEmployee(empId, params);
    ctx.response.body = {
      message: "Successfully updated user details",
    };
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.deleteEmployee = async (ctx) => {
  try {
    const empId = ctx.params;
    await Employee.removeEmployee(empId);
    ctx.response.body = {
      message: "Employee deleted successfully",
    };
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.getOrgEmployeeList = async (ctx) => {
  try {
    const { orgId } = ctx.params;
    const employeeList = await Employee.getOrgEmployees(orgId);
    ctx.response.body = employeeList;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};

exports.viewOrgEmployeeDetails = async (ctx) => {
  try {
    // const { orgId, empId } = ctx.params;
    const employeeDetails = await Employee.getOrgEmployeeDetails(ctx.params);
    ctx.response.body = employeeDetails;
  } catch (err) {
    ctx.response.body = {
      message: err,
    };
  }
};
