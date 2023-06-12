# SpringDMS

Device management system for every organization

## Implemented Routes:

**[ Organization ]**

- Create Organization (`"/org/create"`, method: `post`)
- Show All Organization (`"/orgs"`, method: `get`)
- Get Specific Organization Details (`"/org/:orgId"`, method: `get`)
- Update Specific Organization Details (`"/org/:orgId"`, method: `put`)
- Delete Specific Organization Details (`"/org/:orgId"`, method: `delete`)

**[ Employee ]**

- Add Employee (`"/employees"`, method: `post`)
- Show All Employees (`"/employee/create"`, method: `get`)
- Get Specific Employee Details (`"/employee/:empId"`, method: `get`)
- Update Employee Details (`"/employee/:empId"`, method: `put`)

**[ Device ]**

- Show All devices (`"/devices",`, method: `get`)
- Create or Add Device (`"/device"`,method: `post`)
- Show Device Details (`"/device/:id"`, method: `get`)

**[ Organization-Employee ]**

- Get Employee list of an Organization (`"employees/:orgId/employee"`, method: `get`)
- Show Specific Employee details of an Organization (`"employee/:orgId/:empId"`, method: `get`)
