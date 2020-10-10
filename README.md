![Release](https://img.shields.io/npm/v/njk-brunch-static.svg)

# njk-brunch-static
Compile static nunjucks files with brunch.

njk-brunch-static is a processor for [html-brunch-static](https://github.com/bmatcuk/html-brunch-static), a [brunch](http://brunch.io/) plugin designed to handle static html files. njk-brunch-static can convert nunjucks files into static html files with html-brunch-static's support for layouts and partial views.

If you're looking for support for deprecated "jade" files, check out [jade-brunch-static](https://github.com/bmatcuk/jade-brunch-static).

## Installation
njk-brunch-static depends on [html-brunch-static](https://github.com/bmatcuk/html-brunch-static), which also depends on [brunch-static](https://github.com/bmatcuk/brunch-static), so, you will need to install all three. The recommended method is via npm:

```bash
npm install --save-dev brunch-static html-brunch-static njk-brunch-static
```

Or manually:

* Add `"brunch-static": "x.y.z"` to package.json
* Add `"html-brunch-static": "x.y.z"` to package.json
* Add `"njk-brunch-static": "x.y.z"` to package.json
* Run `npm install`
* Alternatively, you may use the latest git version with:
  * `"brunch-static": "git+ssh://git@github.com:bmatcuk/brunch-static"`
  * `"html-brunch-static": "git+ssh://git@github.com:bmatcuk/html-brunch-static"`
  * `"njk-brunch-static": "git+ssh://git@github.com:bmatcuk/njk-brunch-static"`

## Configuration
Add njk-brunch-static to your list of html-brunch-static processors:

```coffee
exports.config =
  ...
  plugins: {
    static: {
      processors: [
        require('html-brunch-static')({
          processors: [
            require('njk-brunch-static')({
              fileMatch: 'source/views/home.njk',
              fileTransform: (filename) => filename.replace(/static\.njk/, '.html')
            })
          ]
        })
      ]
    }
  }
```

Most options passed to njk-brunch-static are passed, verbatim, to [nunjucks](https://github.com/mozilla/nunjucks), with the exception of:

* **fileMatch** _(default: `/\.static\.njk/`)_

  > _fileMatch_ is an [anymatch](https://github.com/es128/anymatch) that is used to determine which files will be handled by this processor. As an anymatch, it may be a string with globs, a regex, or a function that takes a filename and returns true if it should be handled, or false otherwise. The default will match files that end in `.static.njk`.

* **fileTransform** _(default: `(filename) => filename.replace(/static\.njk/, '.html')`)_

  > _fileTransform_ converts the input filename into an html filename. It takes a filename as input and returns the new filename with the html extension. If you set the _fileMatch_ property above, you'll probably need to set this option as well to ensure that your output files end with the html extension.

## Context and Local Variables
The [html-brunch-static's context](https://github.com/bmatcuk/html-brunch-static#context-layouts-and-partials) will be exposed in your nunjucks files as local variables allowing you to use them in your template.

