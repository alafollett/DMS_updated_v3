/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('forumDetailsCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Forum Details";

        $http.get('/forumDetailsHeader').then(function(response) {
            $scope.data = response.data;
            var data2 = $scope.data;
        });
    }]);
