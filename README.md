# SpringDMS

Device management system for every organization

## Implemented Routes:

**[ Organization ]**

- Create Organization (`"/org"`, method: `post`)
- Show All Organization (`"/org"`, method: `get`)
- Get Specific Organization Details (`"/org/:orgId"`, method: `get`)
- Update Specific Organization Details (`"/org/:orgId"`, method: `put`)
- Delete Specific Organization Details (`"/org/:orgId"`, method: `delete`)

**[ Employee ]**

- Add Employee (`"/employee"`, method: `post`)
- Show All Employees (`"/employee"`, method: `get`)
- Get Specific Employee Details (`"/employee/:empId"`, method: `get`)
- Update Employee Details (`"/employee/:empId"`, method: `put`)

**[ Organization-Employee ]**

- Get Employee list of an Organization (`"/:orgId/employee"`, method: `get`)
- Show Specific Employee details of an Organization (`"/:orgId/:empId"`, method: `get`)
