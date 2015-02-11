var it = require('tape'),
    fs = require('fs'),
    ffprobe = require('..');

it('should find ffprobe', function(t) {
  var stats = fs.statSync(ffprobe.path);
  t.ok(stats.isFile(ffprobe.path));
  t.end();
});
