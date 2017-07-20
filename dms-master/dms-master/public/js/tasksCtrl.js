/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('tasksCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/tasksHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);

var mongoose  = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


db.once('open', function () {
    var tasksSchema = new mongoose.Schema({
        What: String,
        Who: String,
        When: Date
    });
    var Tasks = db.model('Tasks', tasksSchema);
    Tasks.find({
        'What': What
    }, function (err, tasks) {
        if (err) {
            onErr(err, callback);
        } else {
            mongoose.connection.close();
            console.log(tasks);
            callback("", tasks);
        }
    });
});