hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = employeeActionsService.actions;

    // TODO #12 - load menu items from Value

    $scope.currentDate = new Date();

}]);
