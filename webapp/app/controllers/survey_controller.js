var locomotive = require('locomotive');
var _ = require('underscore');
var Controller = locomotive.Controller;

var SurveyController = new Controller();

var Survey = require('../models/survey');

SurveyController.new = function () {
    Survey.find(_.bind(function (error, response) {
        console.log(response);
        this.surveys = surveys;
    }), this);

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
