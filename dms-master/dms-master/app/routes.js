module.exports = function(app) {

    var http = require("http");

	app.get('/', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

	app.route("/forumDetailsHeader").get(function (req, res) {
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify({'header' : 'Forum Details'}))

    });

    app.route("/announcementsHeader").get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'header' : 'Announcements'}))

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
