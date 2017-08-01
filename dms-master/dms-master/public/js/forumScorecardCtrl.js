/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('forumScorecardCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Forum Scorecard";

        $http.get('/forumScorecardHeader').then(function(response) {
            $scope.data = response.data;
            var data2 = $scope.data;
        });
    }]);
