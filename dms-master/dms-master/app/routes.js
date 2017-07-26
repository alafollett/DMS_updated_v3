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
        Question1: String
    });
    barometerSchema.set('collection', 'barometer');
    var Barometer = db.model('barometer', barometerSchema);

    //Confirmation Schema
    var confirmationSchema = new mongoose.Schema({
        _id: String,
        Question1: String,
        Question2: String
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

        Detail.findOne({}, function (err, detail) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(detail.Name);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Name' : detail.Name, 'Schedule' : detail.Schedule,
                                            'Leader' : detail.Leader, 'Facilitator' : detail.Facilitator,
                                                'Dial' : detail.Dial, 'Objective' : detail.Objective}))

            }
        });
    });

    app.route("/announcementsHeader").get(function (req, res) {

        Announcement.findOne({}, function (err, announcement) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(announcement.announcementGiven);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'announcementGiven' : announcement.announcementGiven, 'From' : announcement.From}))
            }
        });
    });

    app.route("/barometerHeader").get(function (req, res) {

        Barometer.findOne({}, function (err, question1) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(question1.Question1);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'header' : question1.Question1}))
            }
        });
    });

    app.route("/confirmationHeader").get(function (req, res) {

        Confirmation.findOne({}, function (err, confirmation) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(confirmation.Question2);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Question1' : confirmation.Question1, 'Question2' : confirmation.Question2}))
            }
        });
    });

    app.route("/demandHeader").get(function (req, res) {

        Demand.findOne({}, function (err, demand) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(demand.Demand);
                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Name' : demand.Name, 'Demand' : demand.Demand}))
            }
        })
    });

    app.route("/forumScorecardHeader").get(function (req, res) {

        forumScorecard.findOne({}, function (err, forumScorecard) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(forumScorecard.Metric);
                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Metric' : forumScorecard.Metric, 'Goal' : forumScorecard.Goal, 'Status' : forumScorecard.Status}))
            }
        })
    });

    app.route("/forumWorkHeader").get(function (req, res) {

        forumWork.findOne({}, function (err, work) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(work.Owner);
                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Sprint' : work.Sprint, 'UserStory' : work.UserStory,
                                            'Owner' : work.Owner, 'Status' : work.Status,
                                                'Blockers' : work.Blockers}))
            }
        })
    });

    app.route("/leadershipHeader").get(function (req, res) {

        leadershipScorecard.findOne({}, function (err, leadership) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(leadership.Metric);
                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Metric' : leadership.Metric, 'Goal' : leadership.Goal, 'Status' : leadership.Status}))
            }
        })
    });

    app.route("/moodHeader").get(function (req, res) {

        Mood.findOne({}, function (err, mood) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(mood.Mood);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Name' : mood.Name, 'Mood' : mood.Mood}))
            }
        });
    });

    app.route("/officeHeader").get(function (req, res) {

        outOfOffice.findOne({}, function (err, office) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(office.Date);
                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Name' : office.Name, 'Date' : office.Date}))
            }
        })
    });

    app.route("/parkingLotHeader").get(function (req, res) {

        parkingLot.findOne({}, function (err, parkingLot) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(parkingLot.Problem);
                //callback("", demand);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Problem' : parkingLot.Problem, 'By' : parkingLot.By}))
            }
        })
    });

    app.route("/recognitionHeader").get(function (req, res) {

        Recognition.findOne({}, function (err, recognition) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(recognition.Recognition);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'recognitionGiven' : recognition.recognitionGiven, 'From' : recognition.From}))
            }
        });
    });

    app.route("/skillsGridHeader").get(function (req, res) {

        skillsGrid.findOne({}, function (err, skillsGrid) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(skillsGrid.Name);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'Name' : skillsGrid.Name, 'Skill' : skillsGrid.Skill,
                                            'Proficiency' : skillsGrid.Proficiency}))
            }
        });
    });

    app.route("/tasksHeader").get(function (req, res) {

        Tasks.findOne({}, function (err, tasks) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(tasks.What);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'What' : tasks.What, 'Who' : tasks.Who, 'When' : tasks.When}))
            }
        });
    });

    app.route("/wiloHeader").get(function (req, res) {

        WILO.findOne({}, function (err, wilo) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(wilo.Meeting);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'header' : wilo.Meeting}))
            }
        });
    });

    app.route("/workTrackerHeader").get(function (req, res) {

        workTracker.findOne({}, function (err, workTracker) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(workTracker.Tracker);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'header' : workTracker.Tracker}))
            }
        });
    });

    app.route("/workSummaryHeader").get(function (req, res) {

        workSummary.findOne({}, function (err, workSummary) {
            if (err) {
                onErr(err, callback);
            } else {
                //mongoose.connection.close();
                console.log(workSummary.Work);
                //callback("", task);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({'header' : workSummary.Work}))
            }
        });
    });
};
