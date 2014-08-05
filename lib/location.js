var os = require("os");

module.exports.location = os.platform() === "win32" ? "phantom\\phantomjs.exe" : "phantom/bin/phantomjs";
