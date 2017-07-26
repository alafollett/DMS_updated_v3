/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('leadershipCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Leadership Scorecard";

        $http.get('/leadershipHeader').then(function(response) {
            $scope.Metric = response.data.Metric;
            $scope.Goal = response.data.Goal;
            $scope.Status = response.data.Status;
        });
    }]);
