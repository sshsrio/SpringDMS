const Router = require("koa-router");
const {
  createOrganization,
  getOrgDetails,
  getAllOrg,
  removeOrg,
  updateOrg,
} = require("./controllers/organization");

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

module.exports = routes;
