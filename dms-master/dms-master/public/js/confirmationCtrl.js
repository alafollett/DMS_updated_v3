/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('confirmationCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Huddle Confirmation";

        //$http.get('/confirmationHeader').then(function(response) {
        //    $scope.Question1 = response.data.Question1;
        //    $scope.Question2 = response.data.Question2;
        //});
    }]);
