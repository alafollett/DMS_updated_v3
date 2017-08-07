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

    //Forum Details Schema
    var forumDetailsSchema = new mongoose.Schema({
        _id: String,
        Name: String,
        Leader: String,
        Schedule: String,
        Facilitator: String,
        Dial: String,
        Objective: String
    });
    forumDetailsSchema.set('collection', 'forumDetails');
    var Detail = db.model('forumDetails', forumDetailsSchema);

    //Announcement Schema
    var announcementSchema = new mongoose.Schema({
        _id: String,
        announcementGiven: String,
        From: String
    });
    announcementSchema.set('collection', 'announcement');
    var Announcement = db.model('announcement', announcementSchema);

    //Barometer Schema
    var barometerSchema = new mongoose.Schema({
        _id: String,
        Question: String
    });
    barometerSchema.set('collection', 'barometer');
    var Barometer = db.model('barometer', barometerSchema);

    //Confirmation Schema
    var confirmationSchema = new mongoose.Schema({
        _id: String,
        Question: String
    });
    confirmationSchema.set('collection', 'confirmation');
    var Confirmation = db.model('confirmation', confirmationSchema);

    //Demand Schema
    var demandSchema = new mongoose.Schema({
        _id: String,
        Name: String,
        Demand: String
    });
    demandSchema.set('collection','demand');
    var Demand = db.model('demand', demandSchema);

    //Forum Scorecard Schema
    var forumScorecardSchema = new mongoose.Schema({
        _id: String,
        Metric: String,
        Goal: String,
        Status: String
    });
    forumScorecardSchema.set('collection', 'forumScorecard');
    var forumScorecard = db.model('forumScorecard', forumScorecardSchema);

    /////Forum Work Schema
    var workSchema = new mongoose.Schema({
        _id: String,
        Sprint: String,
        UserStory: String,
        Owner: String,
        Status: String,
        Blockers: String
    });
    workSchema.set('collection', 'forumWork');
    var forumWork = db.model('forumWork', workSchema);

    //Leadership Scorecard Schema
    var leadershipScorecardSchema = new mongoose.Schema({
        _id: String,
        Metric: String,
        Goal: String,
        Status: String
    });
    leadershipScorecardSchema.set('collection', 'leadershipScorecard');
    var leadershipScorecard = db.model('leadershipScorecard', leadershipScorecardSchema);

    //Mood Schema
    var moodSchema = new mongoose.Schema({
        _id: String,
        Name: String,
        Mood: String
    });
    moodSchema.set('collection', 'mood');
    var Mood = db.model('mood', moodSchema);

    ///Out of Office Schema
    var outOfOfficeSchema = new mongoose.Schema({
        _id: String,
        Name: String,
        Date: String
    });
    outOfOfficeSchema.set('collection', 'outOfOffice');
    var outOfOffice = db.model('outOfOffice', outOfOfficeSchema);

    //Parking Lot Schema
    var parkingLotSchema = new mongoose.Schema({
        _id: String,
        Problem: String,
        By: String
    });
    parkingLotSchema.set('collection', 'parkingLot');
    var parkingLot = db.model('parkingLot', parkingLotSchema);

    //Recognition Schema
    var recognitionSchema = new mongoose.Schema({
        _id: String,
        recognitionGiven: String,
        From: String
    });
    recognitionSchema.set('collection', 'recognition');
    var Recognition = db.model('recognition', recognitionSchema);

    //Skills Grid Schema
    var skillsGridSchema = new mongoose.Schema({
        _id: String,
        Name: String,
        Skill: String,
        Proficiency: String
    });
    skillsGridSchema.set('collection', 'skillsGrid');
    var skillsGrid = db.model('skillsGrid', skillsGridSchema);

    //Tasks and To-Do's Schema
    var tasksSchema = new mongoose.Schema({
        _id: String,
        What: String,
        Who: String,
        When: String
    });
    tasksSchema.set('collection', 'tasks');
    var Tasks = db.model('tasks', tasksSchema);

    //WILO Schema
    var wiloSchema = new mongoose.Schema({
        _id: String,
        Meeting: String,
        Time: String
    });
    wiloSchema.set('collection', 'wilo');
    var WILO = db.model('wilo', wiloSchema);

    //Work Summary Schema
    var workSummarySchema = new mongoose.Schema({
        _id: String,
        Work: String
    });
    workSummarySchema.set('collection', 'workSummary');
    var workSummary = db.model('workSummary', workSummarySchema);

    //Work Tracker Schema
    var workTrackerSchema = new mongoose.Schema({
        _id: String,
        Tracker: String
    });
    workTrackerSchema.set('collection', 'workTracker');
    var workTracker = db.model('workTracker', workTrackerSchema);




/////////ROUTING
    app.route("/forumDetailsHeader").get(function (req, res) {

        Detail.find({}, function (err, detail) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar1 = detail[0];
                var myvar2 = detail[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(detail))

            }
        });
    });

    app.route("/announcementsHeader").get(function (req, res) {

        Announcement.find({}, function (err, announcement) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar1 = announcement[0];
                var myvar2 = announcement[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(announcement))
            }
        });
    });

    app.route("/barometerHeader").get(function (req, res) {

        Barometer.find({}, function (err, barometer) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                // Not pulling array - hopefully pulling eventually from outside source
                //var myvar1 = barometer[0];
                //var myvar2 = barometer[0]._doc;

                //console.log(question1.Question1);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(barometer))
            }
        });
    });

    app.route("/confirmationHeader").get(function (req, res) {

        Confirmation.find({}, function (err, confirmation) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                // Not pulling array - hopefully pulling eventually from outside source
                //var myvar1 = confirmation[0];
                //var myvar2 = confirmation[0]._doc;

                //console.log(confirmation.Question2);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(confirmation))
            }
        });
    });

    app.route("/demandHeader").get(function (req, res) {

        Demand.find({}, function (err, demand) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar1 = demand[0];
                var myvar2 = demand[0]._doc;

                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(demand))
            }
        })
    });

    app.route("/forumScorecardHeader").get(function (req, res) {

        forumScorecard.find({}, function (err, forumScorecard) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar1 = forumScorecard[0];
                var myvar2 = forumScorecard[0]._doc;

                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(forumScorecard))
            }
        })
    });

    app.route("/forumWorkHeader").get(function (req, res) {

        forumWork.findOne({}, function (err, work) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                //console.log(work.Owner);
                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Sprint' : work.Sprint, 'UserStory' : work.UserStory,
                                            'Owner' : work.Owner, 'Status' : work.Status,
                                                'Blockers' : work.Blockers}))
            }
        })
    });

    app.route("/leadershipHeader").get(function (req, res) {

        leadershipScorecard.find({}, function (err, leadership) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar1 = leadership[0];
                var myvar2 = leadership[0]._doc;

                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(leadership))
            }
        })
    });

    app.route("/moodHeader").get(function (req, res) {

        Mood.find({}, function (err, mood) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar = mood[0];
                var myvar2 = mood[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(mood))
            }
        });
    });

    app.route("/officeHeader").get(function (req, res) {

        outOfOffice.find({}, function (err, office) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar1 = office[0];
                var myvar2 = office[0]._doc;

                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(office))
            }
        })
    });

    app.route("/parkingLotHeader").get(function (req, res) {

        parkingLot.findOne({}, function (err, parkingLot) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                // Not pulling array - hopefully pulling eventually from outside source
                //var myvar1 = parkingLot[0];
                //var myvar2 = parkingLot[0]._doc;

                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(parkingLot))
            }
        })
    });

    app.route("/recognitionHeader").get(function (req, res) {

        Recognition.find({}, function (err, recognition) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar1 = recognition[0];
                var myvar2 = recognition[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(recognition))
            }
        });
    });

    app.route("/skillsGridHeader").get(function (req, res) {

        skillsGrid.findOne({}, function (err, skillsGrid) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                // Not pulling array - hopefully pulling eventually from outside source
                //var myvar1 = skillsGrid[0];
                //var myvar2 = skillsGrid[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(skillsGrid))
            }
        });
    });

    app.route("/tasksHeader").get(function (req, res) {

        Tasks.find({}, function (err, tasks) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                //Establish Array
                var myvar = tasks[0];
                var myvar2= tasks[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(tasks))
            }
        });
    });

    app.route("/wiloHeader").get(function (req, res) {

        WILO.findOne({}, function (err, wilo) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                // Not pulling array - hopefully pulling eventually from outside source
                //var myvar1 = wilo[0];
                //var myvar2 = wilo[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(wilo))
            }
        });
    });

    app.route("/workTrackerHeader").get(function (req, res) {

        workTracker.findOne({}, function (err, workTracker) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                // Not pulling array - hopefully pulling eventually from outside source
                //var myvar1 = workTracker[0];
                //var myvar2 = workTracker[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(workTracker))
            }
        });
    });

    app.route("/workSummaryHeader").get(function (req, res) {

        workSummary.findOne({}, function (err, workSummary) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();

                // Not pulling array - hopefully pulling eventually from outside source
                //var myvar1 = workSummary[0];
                //var myvar2 = workSummary[0]._doc;

                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(workSummary))
            }
        });
    });
};
