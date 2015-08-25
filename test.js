var test = require('tap').test;
var collectFailures = require('./');
var P = require('bluebird');

test('returns only the rejections', function (t) {
    collectFailures([
        P.reject("boom"),
        P.resolve("Yes"),
        "value"
    ]).then(function (rejections) {
        t.deepEqual(rejections, ["boom"]);
        t.end();
    });
});

