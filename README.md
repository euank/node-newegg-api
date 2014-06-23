node-newegg-api
===============

A newegg api wrapper in nodejs


Right now it's neither tested nor documented. Those are both major TODOs.

The search api is also TODO.

This code was heavily helped by [this blog
post](http://www.bemasher.net/neweggs-json-quasi-api/).

Example code showing all current functions:
```javascript
var newegg = require('node-newegg-api');

newegg.getProduct("N82E16811219038", function(err, data) {

});

newegg.getMenus(function(err, data) {

});

var storeId = 1;
newegg.getCategory(storeId, function(err, data) {

});

var categoryId = 1;
var nodeId = 1;
newegg.getNavigation(storeId, categoryId, nodeId, function(err, data) {

});
```
