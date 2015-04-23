var express = require('express');
var poweredBy = require('connect-powered-by');

module.exports = function () {
    // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
    // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
    // middleware available as separate modules.
    if ('development' == this.env) {
        this.use(express.logger());
    }

    this.use(poweredBy('ConSol Software GmbH'));
    this.use(express.favicon());
    this.use(express.static(__dirname + '/../../public'));
    this.use(express.bodyParser());
    this.use(express.methodOverride());
    this.use(this.router);
    this.use(express.errorHandler());
}
