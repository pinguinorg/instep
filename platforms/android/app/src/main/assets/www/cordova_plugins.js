cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-stepcounter.stepcounter",
    "file": "plugins/cordova-plugin-stepcounter/www/stepcounter.js",
    "pluginId": "cordova-plugin-stepcounter",
    "clobbers": [
      "stepcounter"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-stepcounter": "1.0.0",
  "cordova-plugin-inappbrowser": "3.0.0"
};
// BOTTOM OF METADATA
});