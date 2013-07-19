/*
 * Task: plistversion
 * Description: Bump the BuildVersion in plist file
 * Dependencies: child_process semver
 */

module.exports = function(grunt) {
	var terminal = require("child_process").exec;

	grunt.registerMultiTask('plistversion', 'Bump versions in plist file', function() {
		var options = this.data || {},
			m = {
				plistFile : options.plistFile || 'Info.plist',
				versionKey : options.versionKey || 'CFBundleVersion',
				replaceFunction : options.replaceFunction || function(code){
					var semver = require('semver');
					return semver.inc(code, 'minor');
				},
			},
			done = this.async();

		terminal("PlistBuddy -c 'Print " + m.versionKey + "' " + m.plistFile, function(error, stdout, stderr) {
			stdout = stdout.replace('\n', '');
			var newVersion = (m.replaceFunction)(stdout || 0);

			terminal("PlistBuddy -c 'Set :" + m.versionKey + " " + newVersion + "' " + m.plistFile, function(error, stdout, stderr) {
				if (!error) {
					grunt.log.writeln((m.plistFile).cyan+" version bumped.");
					grunt.log.writeln((stdout).green);
				} else {
					grunt.fail.warn('failed to bump version ' + (m.versionKey).red + ' of ' + (m.plistFile).red + ':' + stderr);
					grunt.fail.warn((stdout).red);
				};
				done();
			});
		});
	});
};
