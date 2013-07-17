grunt-contrib-plistversion
==========================

> Bump versions in Xcode plist files


## Getting Started
This plugin requires [Grunt](http://gruntjs.com/) `~0.4.0` and [Semver](http://github.com/isaacs/node-semver)

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-plistversion --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-plistversion');
```

## plistversion task
_Run this task with the `grunt plistversion` command._

This plugin uses `registerMultiTask` so you can define multiple version keys to update.

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### plistFile
Type: `String`
Default: Info.Plist

#### versionKey
Type: `String`
Default: CFBundleVersion

#### replaceFunction
Type: `Function`
Default: `function ... return semver.inc(code, 'minor') `


### Usage Examples

```js
grunt.initConfig({
	plistversion: {
	  bumpversion: {
	    plistFile: 'ios/LesFrontaliers/LesFrontaliers-Info.plist'
	  }
	},
})
```
