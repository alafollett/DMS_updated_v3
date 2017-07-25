/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('forumDetailsCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Forum Details";

        $http.get('/forumDetailsHeader').then(function(response) {
            $scope.What = response.data.What;
            $scope.Who = response.data.Who;
            $scope.When = response.data.When;
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
