/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('tasksCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Tasks / To-Dos";

        $http.get('/tasksHeader').then(function(response) {
            $scope.data = response.data;
            var data2 = $scope.data;
        });
    }]);



