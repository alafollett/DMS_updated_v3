/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('skillsGridCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "Functional Skills Grid";

        $http.get('/skillsGridHeader').then(function(response) {
            $scope.Name = response.data.Name;
            $scope.Skill = response.data.Skill;
            $scope.Proficiency = response.data.Proficiency;
        });
    }]);
