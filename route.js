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
} = require("./controllers/employee");

const routes = new Router();

routes.get("/", (ctx) => {
  ctx.body = { message: "All good" };
});

// Organization
routes.post("/org", createOrganization);
routes.get("/org", getAllOrg);
routes.get("/org/:orgId", getOrgDetails);
routes.delete("/org/:orgId", removeOrg);
routes.put("/org/:orgId", updateOrg);

// Employee
routes.get("/employee", getAllEmployees);
routes.post("/employee", createEmployee);
routes.get("/employee/:empId", getEmployeeDetails);
routes.put("/employee/:empId", updateEmployeeDetails);
routes.delete("/employee/:empId", deleteEmployee);

module.exports = routes;
