module.exports = function(app) {

    var http = require("http");

    var mongoose       = require('mongoose');

// configuration ===========================================
    var mongoDB = 'mongodb://root:root@localhost:27017/dms';
    mongoose.connect(mongoDB);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));


    db.once('open', function () {

    });

    var tasksSchema = new mongoose.Schema({
        _id: String,
        What: String,
        Who: String,
        When: Date
    });

    var announcementSchema = new mongoose.Schema({
        _id: String,
        Announcement: String
    });

    tasksSchema.set('collection', 'task');

    announcementSchema.set('collection', 'announcement');

    var Task = db.model('task', tasksSchema);
    var Announcement = db.model('ammouncement', announcementSchema);

	app.route("/forumDetailsHeader").get(function (req, res) {

        Task.findOne({}, function (err, task) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(task.What);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'header' : task.What}))
            }
        });
    });

    app.route("/announcementsHeader").get(function (req, res) {

        Announcement.findOne({}, function (err, announcement) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(announcement.Announcement);
                //callback("", tasks);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'header' : announcement.Announcement}))
            }
        });
    });

    app.route("/barometerHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Barometer'}))

    });

    app.route("/confirmationHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Huddle Confirmation'}))

    });

    app.route("/demandHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Demand & Capacity Management'}))

    });

    app.route("/forumScorecardHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Forum Scorecard'}))

    });

    app.route("/forumWorkHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Forum Work'}))

    });

    app.route("/leadershipHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Leadership Scorecard'}))

    });

    app.route("/moodHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Team Mood'}))

    });

    app.route("/officeHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Out-of-Office'}))

    });

    app.route("/parkingLotHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Structured Parking Lot'}))

    });

    app.route("/recognitionHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Recognition'}))

    });

    app.route("/skillsGridHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Functional Skills Grid'}))

    });

    app.route("/tasksHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : "Tasks and To-Do's"}))

    });

    app.route("/wiloHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'WILO'}))

    });

    app.route("/workTrackerHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Forum Standard Work Tracker'}))

    });

    app.route("/workSummaryHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Forum Standard Work Summary'}))

    });
};
