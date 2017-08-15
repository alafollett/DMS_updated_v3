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

        //exports.createforumDetails = function(req, res) {
        //    var details = new Details({created: Date.now});
        //    details.set('Name', req.body.content);
        //}

        $scope.createforumDetails = function(){
            $http.post('/forumDetailsHeader').then(function(data) {
                $scope.fourmDetails = {};
                $scope.details = data;
            });
        }



    }]);
