/* jshint undef: true, unused: true, strict: true, +W034 */
/* globals phantom, require */

if (phantom.args.length < 1) {
  console.log("Usage: viewport.js URL sizeX sizeY");
  phantom.exit();
}
var address = phantom.args[0];
var sizeX = phantom.args[1] || 1117;
var sizeY = phantom.args[2] || 1443;
var fileName = phantom.args[3];
var page = require("webpage").create(), address, fileName, TIMEOUT = 800, capturePage = function(page) {
  "use strict";
  var pageDomain = window.location.hostname.split('.')[0];
  page.render(fileName || pageDomain);
  console.log(pageDomain);
  phantom.exit();
};
page.viewportSize = {width:sizeX, height:sizeY};
page.open(address, function(status) {
  "use strict";
  if (status !== "success") {
    //console.log("404 " + address);
    phantom.exit();
  } else {
    window.setTimeout(capturePage, TIMEOUT, page);
  }
});

