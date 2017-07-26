/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('forumDetailsCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Forum Details";

        $http.get('/forumDetailsHeader').then(function(response) {
            $scope.Name = response.data.Name;
            $scope.Schedule = response.data.Schedule;
            $scope.Leader = response.data.Leader;
            $scope.Facilitator = response.data.Facilitator;
            $scope.Dial = response.data.Dial;
            $scope.Objective = response.data.Objective;
        });

        //$scope.lines = [{
        //        text: "Name:"},
        //    {
        //        text: 'Schedule:'},
        //    {
        //        text: 'Leader:'},
        //    {
        //        text: 'Facilitator:'},
        //    {
        //        text: 'Dial-In Number:'},
        //    {
        //        text: 'Objective:'
        //}];
    }]);
