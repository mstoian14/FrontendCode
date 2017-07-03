/**
 * Created by Mihaela.Stoian on 7/3/2017.
 */
hrApp.service('ManagerServices', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllDepartaments: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function(data, status, headers, config) {
                        return data;

                    })
                    .error(function (data, status, headers, config) {
                        return status;
                    })
            },
            findAllManagers: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function(data, status, headers, config) {
                        return data;

                    })
                    .error(function (data, status, headers, config) {
                        return status;
                    })
            },
            findAllJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function(data, status, headers, config) {
                        return data;

                    })
                    .error(function (data, status, headers, config) {
                        return status;
                    })
            }
        }
    }]
);