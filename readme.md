# INTRO

This derived from a Stephen Grider course about webpack. The plan is, that this should be a basic from dev to production-ready application. This is version is 1.0.0 and has no view framework. Only a deployable application, bundeled with webpack, and transpiled with babel.

# WHAT I HAVE LEARNED AND SHOULD REMEMBER

## WEBPACK 2.2.0-rc.0


#### MINIMUM CONFIG

| key             | description                                 | datatype(s) |
| --------------- | ------------------------------------------- | ----------- |
| entry           | relative path(s) to application entry point | `""` / `[]` |
| output          | config of completed bundle                  | `{}`        |
| output.path     | absolute path for saved bundle              | `""`        |
| output.filename | name of the output / bundled file           | `""`        |

#### OTHER CONFIG

| key               | description                                       | datatype(s) |
| ----------------- | ------------------------------------------------- | ----------- |
| module            | define configruation of bundeling process         | `{}`        |
| module.rules      | used to define `loader` rules                     | `[]`        |
| plugins           | used to add plugin modules to webpack bundeling   | `[]`        |
| output.publicPath | defines a path that webpack should try to resolve | `{}`        |


#### RULES AND LOADERS

In webpack, we use loaders in order to handle specific file types. `module.rules` is how we through webpack can specify how loaders should handle specific files.


##### Anatomy of a rule / loader

A rule is added to Webpack as an `Object` passed to the `Array` called `module.rules`

| key  | description                                    | datatype(s) | example   |
| ---- | ---------------------------------------------- | ----------- | --------- |
| use  | express the loaders needed                     | `""` / `[]` |           |
| test | regex for what types of files should be tested | `regex`     | `/\.js$/` |


Loaders are applied from right to left, when using multible loaders, so the last in the use array should always be the most important one.


###### CSS

| key                    | description                                            |
| ---------------------- | ------------------------------------------------------ |
| `css-loader`           | lets webpack know how to READ css                      |
| `style-loader`         | Adds the styling to the HTML document                  |
| `url-loader`           | Used to determin how an image should be loaded         |
| `image-webpack-loader` | compresses images in the bundle                        |
| `file-loader`          | Used when images goes over the limit set in url loader |


> Css that are imported directly into the application, is added to the header tag of the DOM


##### WEBPACK PLUGINS

Plugins are outside libraries, that we can use to handle specific scenarioes, or things we want to have happening for our bundle. For example weather or not, our CSS shouls be loaded in the DOM or as an individual bundleled file.

###### List of plugins

| key                           | description                | how to use |
| ----------------------------- | -------------------------- | ---------- |
| `extract-text-webpack-plugin` | Moves CSS top sepeate file | wrap the loader in this plugin, and add a new instance of the plugin to the array called plugin. It must have a filename as first argument. The filename is going to be the name of the bundeled CSS file. This CSS file should be included in the HTML file that loads the application




## NODE & NPM

It is possible to require everything, that is supported by node.js in Webpack


#### DEPENDENCIES

| key  | example                            |
| ---- | ---------------------------------- |
| path | `path.resolve(__dirname, 'build')` |



##### NODE VARIABLES

| key       | description                             |
| --------- | --------------------------------------- |
| __dirname | gives us path to current root directory |



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
