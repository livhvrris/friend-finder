// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    
    // ROUTES
    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function(request, response) {
        var newFriend = request.body;
        friends.push(newFriend);
        response.json(newFriend);
    });

};