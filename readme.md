# INTRO

This derived from a Stephen Grider course about webpack. The plan is, that this should be a basic from dev to production-ready application. This is version is 1.0.0 and has no view framework. Only a deployable application, bundeled with webpack, and transpiled with babel.

# WHAT I HAVE LEARNED AND SHOULD REMEMBER

## WEBPACK 2.2.0-rc.0


#### MINIMUM CONFIG

| key  | description | datatype(s)  | required  |
| ---- | ----------- | -----------  | --------  |
| entry  | relative path(s) to application entry point (usually `./src/index.js`)  | `""` / `[]` | `true`  |
| output  | config of completed bundle  | `{}`  | `true`  |
| output.path  | absolute path to where the finished bundle should be saved to  | `String`  | `true`  |
| output.filename  | name of the output / bundled file  | `String`  | `true`  |

#### OTHER CONFIG
| key  | description | datatype(s)  | required  |
| ---- | ----------- | -----------  | --------  |
| module  | used to define loader rules  | `{}`  | `false`  |
| module.rules  | used to define loader rules  | `{}`  | `false`  |



#### GOOD TO KNOW

> It is possible to require everything, that is supported by node.js in Webpack



## NODE & NPM


#### DEPENDENCIES

| key  | example |
| ---- | ----------- |
| path  | `path.resolve(__dirname, 'build')`  |



##### NODE VARIABLES

| key  | description |
| ---- | ----------- |
| __dirname  | gives us path to current root directory  |



#### IMPORT & EXPORT RULES (ES6)

there are some different ways to import and export

`import var from 'dependency'` <-- import exported node_modules dependency
`import var from './file'` <-- import exported file
`import './file'` <-- import unexported file, that just needs to run






#### GLOBAL VS. LOCAL VERSIONS

When you install a global dependency, you can run it as a direct command. This is nice, but can cause proplems if a global version is outdated, or if some part of the application requires some older depencency.

When you install a version locally, it is limited to the `node_modules` folder in your project. This means that it can't run as an inpependent command, but is understood in a script in the local project. It makes it easier to control versioning.

## BABEL

First of all. Babels only job, is essentialy to transpile our javascript into ES5
Babel is made up by some different dependencies / modules, this is confusing at first 

#### BABEL_LOADER

The only job of this is to make babel know webpack, Use the babel loader in webpack, and you are good!


#### BABEL CORE

This is the module that transpiles the javascript we write into ES5


#### BABEL-PRESET-ENV

From what? What should the code transpile from? ES6 ES7 or what? this is the job of the preset-env. This is handled in the `.babelrc` file



### .babelrc

Do we need it? Yes. Some say we don't, but we do. We do. This is the file, in which babel is configured. Say you run babel with webpack (babel-loader), on every instance of a javascript file that is compiled through webpack, we tell it, to use the .babelrc configuration.
