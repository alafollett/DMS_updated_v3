/**
 * Created by eugene on 8/15/17.
 */
//var utils    = require( '../utils' );
var routes = require('../routes');
var mongoose = require( 'mongoose' );


var forumDetailsSchema = new mongoose.Schema({
    _id: String,
    Name: String,
    Leader: String,
    Schedule: String,
    Facilitator: String,
    Dial: String,
    Objective: String
});
forumDetailsSchema.set('collection', 'forumdetails');
var forumdetail = mongoose.model('forumdetails', forumDetailsSchema);


exports.create = function ( req, res, next ){
    new fourmdetails({
        Name    : req.body.Name,
        Leader    : req.body.Leader,
        Schedule : req.body.Schedule,
        Facilitator: req.body.Facilitator,
        Dial: req.body.Dial,
        Objective: req.body.Objective,
        updated_at : Date.now()
    }).save( function ( err, todo, count ){
        if( err ) return next( err );

        res.redirect( '/' );
    });
};

exports.find = function(err, detail){
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
}

//exports.index = function ( req, res, next ){
//    var Name = req.cookies ?
//        req.cookies.Name : undefined;
//
//    forumdetail.find({ Name : Name }).sort( '-updated_at' ).exec( function ( err, todos ){
//        if( err ) return next( err );
//
//        res.render( 'index', {
//            title : 'Name',
//            details : details
//        });
//    });
//};

//exports.destroy = function ( req, res, next ){
//    Todo.findById( req.params.id, function ( err, todo ){
//        var user_id = req.cookies ?
//            req.cookies.user_id : undefined;
//
//        if( todo.user_id !== user_id ){
//            return utils.forbidden( res );
//        }
//
//        todo.remove( function ( err, todo ){
//            if( err ) return next( err );
//
//            res.redirect( '/' );
//        });
//    });
//};

//exports.edit = function( req, res, next ){
//    var user_id = req.cookies ?
//        req.cookies.user_id : undefined;
//
//    Todo.
//    find({ user_id : user_id }).
//    sort( '-updated_at' ).
//    exec( function ( err, todos ){
//        if( err ) return next( err );
//
//        res.render( 'edit', {
//            title   : 'Express Todo Example',
//            todos   : todos,
//            current : req.params.id
//        });
//    });
//};

//exports.update = function( req, res, next ){
//    Todo.findById( req.params.id, function ( err, todo ){
//        var user_id = req.cookies ?
//            req.cookies.user_id : undefined;
//
//        if( todo.user_id !== user_id ){
//            return utils.forbidden( res );
//        }
//
//        todo.content    = req.body.content;
//        todo.updated_at = Date.now();
//        todo.save( function ( err, todo, count ){
//            if( err ) return next( err );
//
//            res.redirect( '/' );
//        });
//    });
//};

//// ** express turns the cookie key to lowercase **
//exports.current_user = function ( req, res, next ){
//    var user_id = req.cookies ?
//        req.cookies.user_id : undefined;
//
//    if( !user_id ){
//        res.cookie( 'user_id', utils.uid( 32 ));
//    }
//
//    next();
//};
