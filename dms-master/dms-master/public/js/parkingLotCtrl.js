/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('parkingLotCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Structured Problem Solving Parking Lot";

        $http.get('/parkingLotHeader').then(function(response) {
            $scope.Problem = response.data.Problem;
            $scope.By = response.data.By;
        });
    }]);
