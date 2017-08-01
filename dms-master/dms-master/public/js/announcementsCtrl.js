/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('announcementsCtrl', ['$scope', '$http',
    function ($scope, $http) {

    $scope.header = "Announcements";

    $http.get('/announcementsHeader').then(function(response) {
        $scope.announcementGiven = response.data.announcementGiven;
        $scope.From = response.data.From;
        });
    }]);


