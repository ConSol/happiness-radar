var util = require('util');

module.exports = function () {
    // Warn of version mismatch between global "lcm" binary and local installation
    // of Locomotive.
    if (this.version !== require('locomotive').version) {
        console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
    }

    //linking the mongoose (mongo-db) datastore as datastore
    this.datastore(require('locomotive-mongoose'));
}
