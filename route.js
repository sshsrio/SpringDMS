const Router = require("koa-router");
const {
  createOrganization,
  getOrgDetails,
  getAllOrg,
  removeOrg,
  updateOrg,
} = require("./controllers/organization");
const {
  createEmployee,
  getEmployeeDetails,
  updateEmployeeDetails,
  deleteEmployee,
  getAllEmployees,
  getOrgEmployeeList,
  viewOrgEmployeeDetails,
} = require("./controllers/employee");
const {
  getAllDevices,
  createDevice,
  getDeviceDetails,
} = require("./controllers/device");
const {
  createOrgDevices,
  getAllOrgAndDev,
  deviceUnderOrg,
} = require("./controllers/organizationDevices");

const routes = new Router();

routes.get("/check", (ctx) => {
  ctx.body = { message: "All good" };
});

// Organization
routes.post("/org/create", createOrganization);
routes.get("/orgs", getAllOrg);
routes.get("/org/:orgId", getOrgDetails);
routes.delete("/org/:orgId", removeOrg);
routes.put("/org/:orgId", updateOrg);

// Employee
routes.get("/employees", getAllEmployees);
routes.post("/employee/create", createEmployee);
routes.get("/employee/:empId", getEmployeeDetails);
routes.put("/employee/:empId", updateEmployeeDetails);
routes.delete("/employee/:empId", deleteEmployee);

// Organization Employees
routes.get("/employees/:orgId/employee", getOrgEmployeeList);
routes.get("/employee/:orgId/:empId", viewOrgEmployeeDetails);

// Device
routes.get("/devices", getAllDevices);
routes.post("/device", createDevice);
routes.get("/device/:id", getDeviceDetails);

// Organization Devices
routes.post("/orgdevices/create", createOrgDevices);
routes.get("/orgdevices", getAllOrgAndDev);
routes.get("/org/:orgId/devices", deviceUnderOrg);

module.exports = routes;
