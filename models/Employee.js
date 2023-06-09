const mongoose = require("mongoose");
const Employee = require("../schema/employeeSchema");

exports.getEmployees = () => {
  return Employee.find({});
};

exports.addEmployee = (params) => {
  const newEmployee = new Employee(params);
  return newEmployee.save();
};

exports.getDetails = (params) => {
  return Employee.find({ empId: params });
};

exports.updateEmployee = (empId, params) => {
  return Employee.findOneAndUpdate({ empId }, params, {
    new: true,
  });
};

exports.removeEmployee = (empId) => {
  return Employee.findOneAndDelete(empId);
};

exports.getOrgEmployees = (orgId) => {
  return Employee.aggregate([
    {
      $match: { empOrgId: orgId },
    },
    // {
    //   $group: {
    //     _id: {
    //       empId: "$empId",
    //       empName: "$empName",
    //       empEmail: "$empEmail",
    //       empRole: "$empRole",
    //     },
    //   },
    // },
    {
      $project: { empId: 1, empName: 1, empEmail: 1, empRole: 1 },
    },
  ]);
};

exports.getOrgEmployeeDetails = (params) => {
  const { orgId, empId } = params;
  return Employee.aggregate([
    {
      $match: { empOrgId: orgId, empId: empId },
    },
    {
      $project: { empId: 1, empName: 1, empEmail: 1, empRole: 1 },
    },
  ]);
};
