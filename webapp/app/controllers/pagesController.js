var locomotive = require('locomotive')
    , Controller = locomotive.Controller;

var pagesController = new Controller();
var mongoose = require('mongoose');
var Survey = require('../models/survey');

pagesController.main = function () {
    var firstSurvey = new Survey();
    firstSurvey.name = "our-frist-survey";
    firstSurvey.active = true;

    firstSurvey.save(function (err) {
        if (err) {
            console.log('ERROR:' + err);
            throw err;
        } else {
            console.log('SUCCESS!');
        }
    });

    var myTitle;

    var survey =
        Survey.find(function (error, survies) {
            console.log(survies);
            if (survies.length > 0) {
                myTitle = function(){return 'Latest Survey:' + survies[0].name};
            } else {
                myTitle = function(){return 'No Survey found!'};
            }
        });
    this.title = 'Latest Survey: ' + firstSurvey.name + ', created: ' + firstSurvey.created;
    //this.title = 'Survey:' + survey.name;

    this.render();
};

module.exports = pagesController;
