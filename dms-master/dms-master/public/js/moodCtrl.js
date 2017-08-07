/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('moodCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Team Mood";

        $http.get('/moodHeader').then(function(response) {
            $scope.data = response.data;
            var data2 = $scope.data;
        });
    }]);
