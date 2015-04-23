var locomotive = require('locomotive')
    , Controller = locomotive.Controller;

var pagesController = new Controller();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

pagesController.main = function () {
    //
    //var kittySchema = new Schema({
    //    name: String
    //});
    //var Kitten = mongoose.model('Kitten', kittySchema);
    //
    //var kitIn = new Kitten();
    //kitIn.name = 'HELLO KITTEN!';
    //
    //console.log(kitIn);
    //this.title = 'Title: ' + kitIn.name;
    //
    var surveySchema = new Schema({
        name: String,
        active: Boolean
    });

    var Survey = mongoose.model('Survey', surveySchema);
    var firstSurvey = new Survey();
    firstSurvey.name = "our-frist-survey";
    firstSurvey.active = true;

    firstSurvey.save(function (err) {
        if (err) {
            console.log('ERROR:' + err);
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
    this.title = 'Latest Survey: ' + firstSurvey.name;
    //this.title = 'Survey:' + survey.name;

    this.render();
};

module.exports = pagesController;
