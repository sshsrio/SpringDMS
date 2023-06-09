const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const EmployeeSchema = new Schema(
  {
    empId: {
      type: String,
      required: true,
      unique: true,
    },
    empName: {
      type: String,
      required: true,
    },
    empEmail: {
      type: String,
      required: true,
    },
    empRole: {
      type: String,
    },
    empOrgId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdOn",
      updatedAt: "updateOn",
    },
  }
);

const Employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee;
