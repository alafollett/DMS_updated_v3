/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('workTrackerCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Work Tracker";

        //$http.get('/workTrackerHeader').then(function(response) {
        //    $scope.header = response.data.header;
        //});
    }]);
