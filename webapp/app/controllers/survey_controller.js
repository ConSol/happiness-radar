var locomotive = require('locomotive');
var Controller = locomotive.Controller;

var SurveyController = new Controller();

var Survey = require('../models/survey');

SurveyController.new = function () {
    this.render();
}

SurveyController.list = function() {
    var myTitle;
    var survey =
        Survey.find(function (error, surveys) {
            console.log(surveys);
        });
    this.title = 'Latest Survey: ' + survey.name + ', created: ' + survey.created;

    this.render();
}

SurveyController.create = function () {
    var survey = new Survey();
    survey.name = this.param('name');
    survey.active = true;
    survey.question = this.param('question');

    survey.save(function (err) {
        if (err) {
            console.log('ERROR:' + err);
            throw err;
        } else {
            console.log('SUCCESS!');
        }
    });

    this.redirect('/');
}

module.exports = SurveyController;
