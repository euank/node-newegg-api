var util = require('util');
var http = require('http');
function createFnFromPath(path) {

  return function(args) {
    args = Array.prototype.slice.call(arguments);
    var cb = args.pop();
    var url = "http://www.ows.newegg.com/" + path;
    var formatArgs = args;
    formatArgs.unshift(url);
    console.log(JSON.stringify(formatArgs));
    var finalUrl = util.format.apply(util, formatArgs);
    console.log(finalUrl);
    http.get(finalUrl, function(res) {
      var body = '';
      res.on('data', function(chunk) { body += chunk.toString(); });
      res.on('end', function() {
        try {
          return cb(null, JSON.parse(body));
        } catch(ex) {
          return cb(ex);
        }
      });
    }).on('error', function(e) {
      return cb(e);
    });
  };
}

module.exports = {
  getProduct: createFnFromPath("Products.egg/%s/Specification"),
  getMenus: createFnFromPath("Stores.egg/Menus"),
  getCategory: createFnFromPath("Stores.egg/Categories/%s"),
  getNavigation: createFnFromPath("Stores.egg/Navigation/%s/%s/%s"),
};
