/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('fourmWorkCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Forum Work";

        //$http.get('/forumWorkHeader').then(function(response) {
        //    $scope.Sprint = response.data.Sprint;
        //    $scope.UserStory = response.data.UserStory;
        //    $scope.Owner = response.data.Owner;
        //    $scope.Status = response.data.Status;
        //    $scope.Blockers = response.data.Blockers;
        //});
    }]);
