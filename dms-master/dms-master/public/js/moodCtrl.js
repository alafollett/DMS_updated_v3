/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('moodCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Team Mood";

        $http.get('/moodHeader').then(function(response) {
            $scope.Name = response.data.Name;
            $scope.Mood = response.data.Mood;
        });
    }]);
