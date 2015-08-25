var P = require('bluebird');

module.exports = function collectFailures(plist) {
  return P.all(plist.map(function(p) {
    return P.resolve(p).then(function(e) {
      /* we only care about errors */
      return null;
    }).catch(function(err) {
      return err;
    });
  })).then(function(errors) {
    return errors.filter(function(e) {
      return e;
    });
  });
}
