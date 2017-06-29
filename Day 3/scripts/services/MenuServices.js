hrApp.service('employeeActionsService', function () {
this.actions = [
    // TODO #11 - add menu items
    {
        label: "Employee list",
        url: "#/employeeslist"
    },
    {
        label: "Add employee",
        url: "#/employeeadd"
    },
    {
        label: "Calculate",
        url: "#/math"
    }];
    }
);