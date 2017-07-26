/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('demandCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Demand & Capacity";


        $http.get('/demandHeader').then(function(response) {
            $scope.Name = response.data.Name;
            $scope.Demand = response.data.Demand;
        });
    }]);
