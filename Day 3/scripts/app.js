// TODO #2 load ngRoute module
var hrApp = angular.module('hrApp',['ngRoute']);

// TODO #3 add default route for main page
hrApp.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl:'views/main.html',
            controller: 'MainController'
    }).
    when('/numbers', { // TODO #4 add #/numbers route and use redirectTo
        redirectTo: '/math'
    }).
    when('/math', { // TODO #6 add route for mathematical operations
        templateUrl:'views/demo/math.html',
        controller: 'MathController'
    }).
        when('/demoRequest', { // TODO #9 add route for http request demo page
            templateUrl: 'views/demo/request.html',
        controller: 'RequestController'
    }).
    when('/employeeslist', {
        templateUrl: 'views/employeelist.html',
        controller: 'EmployeeListController'
    }).
    when('/employeeview/:employeeid', {
        templateUrl: 'views/employeeview.html',
        controller: 'EmployeeViewController'
    }).
        when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserAddController'
    }).
        when('/employeeadd', {
            redirectTo: '/user'
    })
    }])





// TODO #HR1 add routes for Employees List page and Employee View page

