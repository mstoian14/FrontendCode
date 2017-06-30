/**
 * Created by Mihaela.Stoian on 6/29/2017.
 */
hrApp.controller('UserAddController', ['$scope', '$location', function($scope, $location){
    $scope.user = {};
    $scope.viewInfo = function() {
        alert($scope.user.firstName);
    };

    $scope.backHome = function() {
        $location.url('/');

    }
    $scope.resetInfo = function() {
        $scope.user = {};

    }
}]);