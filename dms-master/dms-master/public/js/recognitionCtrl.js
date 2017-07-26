/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('recognitionCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Recognitions";

        $http.get('/recognitionHeader').then(function(response) {
            $scope.recognitionGiven = response.data.recognitionGiven;
            $scope.From = response.data.From;
        });
    }]);
