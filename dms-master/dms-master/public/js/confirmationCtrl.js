/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('confirmationCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Huddle Confirmation";

        $http.get('/confirmationHeader').then(function(response) {
            $scope.data = response.data;
            var data2 = $scope.data;
        });
    }]);
