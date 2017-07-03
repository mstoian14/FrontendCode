hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.employee = {};
        $scope.employees = [];

        //TODO #HR5
        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });
        $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departments = data;
            });

        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            });

        // $scope.managers = [];
        // var managerIds = {};
        // for (var i in $scope.employees) {
        //     var manager = $scope.employees[i].managerId;
        //     if (manager != null && managerIds[manager.employeeId] === undefined) {
        //         managerIds[manager.employeeId] = true;
        //         $scope.managers.push($scope.employees[i].managerId);
        //     }
        // }
        // console.log($scope.managers);
        $http.get(CommonResourcesFactory.findAllEmployeesUrl)
            .success(function (data, status, headers, config) {
                var managerData = [];
                var managersIds = {};
                for (var each in data) {
                    var manager = data[each].managerId;
                    if (manager != null && managersIds[manager.employeeId] === undefined) {
                        managersIds[manager.employeeId] = true;
                        managerData.push(manager);
                    }
                }

                $scope.managers = managerData;
            })
            .error(function (data, status, headers, config) {
                alert("Error: getManagersList" + status);
                return "getManagersList ERROR!"
            });

        $http({url: CommonResourcesFactory.findOneEmployeeUrl+$routeParams.employeeId, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employee = data;
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);