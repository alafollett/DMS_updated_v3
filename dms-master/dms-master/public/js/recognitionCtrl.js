/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('recognitionCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Recognitions";

        $http.get('/recognitionHeader').then(function(response) {
            $scope.data = response.data;
            var data2 = $scope.data;
        });
    }]);
