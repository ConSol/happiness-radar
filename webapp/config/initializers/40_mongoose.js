/** Mongo initializer **/

module.exports = function () {

    this.mongoose = require('mongoose');
    switch (this.env) {
        default :
            //mongoose.connect('$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test');
            //this.mongoose.connect('mongodb://172.17.0.24:27017/test');
            var hostAddress = process.env.MONGO_PORT_27017_TCP_ADDR + ':' + process.env.MONGO_PORT_27017_TCP_PORT;

            var url = 'mongodb://' + hostAddress + '/test';
            console.log("MONGO CONNECT URL:" + url);
            this.mongoose.connect(url);
        //case 'development':
        //    mongoose.connect('mongodb://mongodb.example.com/dev');
        //    break;
        //case 'production':
        //    mongoose.connect('mongodb://mongodb.example.com/prod');
        //    break;
    }
    //this.mongooseTypes = require("mongoose-types");
    //this.mongooseTypes.loadTypes(this.mongoose);
    //mongoose.model('User', schemas.UserSchema);
    //mongoose.model('Post', schemas.PostSchema);
}