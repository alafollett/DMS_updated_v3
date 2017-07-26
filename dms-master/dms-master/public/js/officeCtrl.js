/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('officeCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Out-of-Office Schedule";

        $http.get('/officeHeader').then(function(response) {
            $scope.Name = response.data.Name;
            $scope.Date = response.data.Date;
        });
    }]);
