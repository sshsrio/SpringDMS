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
