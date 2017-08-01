/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('demandCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Demand & Capacity";


        $http.get('/demandHeader').then(function(response) {
            //$scope.response = response;
            $scope.data =response.data;
            var data2 = $scope.data;
            //console.log($scope.data);
        });
    }]);
