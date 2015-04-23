/** Mongo initializer **/

module.exports = function () {

    this.mongoose = require('mongoose');
    switch (this.env) {
        default :
            //mongoose.connect('$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test');
            //this.mongoose.connect('mongodb://172.17.0.24:27017/test');

            //determine host
            var host;
            if (process.env.MONGO_PORT_27017_TCP_ADDR) {
                host = process.env.MONGO_PORT_27017_TCP_ADDR;
            } else {
                host = 'localhost'
            }

            //determine port
            var port;
            if (process.env.MONGO_PORT_27017_TCP_PORT) {
                port = process.env.MONGO_PORT_27017_TCP_PORT;
            } else {
                port = 27017;
            }

            var url = 'mongodb://' + host + ':' + port + '/test';
            console.log("MONGO CONNECT URL:" + url);
            this.mongoose.connect(url);

            var db = this.mongoose.connection;
            db.on('error', function (e) {
                console.error.bind(console, 'connection error:');
                throw 'MONGO DB CONNECTION ERROR: ' + e;
            });
            db.once('open', function () {
                console.log('MONGO DB CONNECTED!')
            });
    }
};