# Mois du JS - Webpack

This  repository shows examples of Webpack use, based on [moisdujs-base]() basic javascript vanilla application.  
**_WARNING_ this works only on Chrome**

#### step/1

Refactor code to use webpack packaging (no Boostrap yet).  

#### step/2

Include Bootstrap and jQuery dependencies.  
Configure global jQuery module with Webpack ProvidePlugin.  
Add filer-loader and url-loader to bundle Bootstrap glyphicons dependency. 

#### step/3

Add extract-text-webpack-plugin to bundle css in a separate file. 

#### step/4

Add eslint and eslint-loader, add preloader config to lint files before each webpack build. 

#### step/5

Add compression plugin to gzip js and css bundles. 

#### step/6

Add assets plugin and webpack configuration.
Replace index.html by index.mustache.
Add npm build script to generate index.html from template.

#### step/7

Add less loader and webpack configuration.

#### step/8

Use Webpack CommonsChunkPlugin to bundle vendors in a separate file.
Add vendors import into index.mustache to generate script import as for the app.

#### step/8bis

Like step/8 but this time vendors entry reference a module that import all vendors (here bootstrap).

#### step/9

Move custom event to a event service, use require.ensure to lazy load it in code.

#### step/10

Add webpack dev server and configure npm scripts to build and start it.
*WARNING* you can't use hashed bundles with webpack dev server, name changed brake reloading.

#### step/11

Upgrade webpack version to version 2.
Change babel plugins, remove transform-es2015-modules-commonjs to enable tree shaking (we need to use native ES6 modules).
For the same reason, we can't use lazy loading with require.ensure, because it's commonJS pattern.
Add some logic in events service to demonstrate tree shaking.
To test, remove resetEvent in app.js import and build prod version.

#### That's all for now!

Missing something? Ping me @modulom

### Licence

ISC
