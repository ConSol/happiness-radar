var locomotive = require('locomotive');
var _ = require('underscore');
var Controller = locomotive.Controller;

var SurveyController = new Controller();
var Survey = require('../models/survey');

SurveyController.new = function () {
    var self = this;
    Survey.find(function (error, response) {
        if (error) {
            console.log('ERROR:' + error);
            throw error;
        } else {
            console.log(response);
            self.render({ surveys: response });
        }
    });
}

SurveyController.create = function () {
    var survey = new Survey();
    survey.name = this.param('name');
    survey.active = true;
    survey.question = this.param('question');

    survey.save(function (error) {
        if (error) {
            console.log('ERROR:' + error);
            throw error;
        } else {
            console.log('SUCCESS!');
        }
    });

    this.redirect('/');
}

module.exports = SurveyController;
