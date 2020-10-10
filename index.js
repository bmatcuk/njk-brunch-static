var NunjucksBrunchStatic, _, nunjucks;

nunjucks = require('nunjucks');

_ = {
  merge: require('lodash.merge')
};

NunjucksBrunchStatic = (function() {
  class NunjucksBrunchStatic {
    constructor(config1) {
      var ref, ref1;
      this.config = config1;
      if ((ref = this.config) != null ? ref.fileMatch : void 0) {
        this.handles = this.config.fileMatch;
        delete this.config.fileMatch;
      }
      if ((ref1 = this.config) != null ? ref1.fileTransform : void 0) {
        this.transformPath = this.config.fileTransform;
        delete this.config.fileTransform;
      }
    }

    transformPath(filename) {
      return filename.replace(/\.static\.njk$/, '.html');
    }

    compile(data, filename, options, context, callback) {
      var env, opts;
      opts = _.merge({}, this.config, options != null ? options.nunjucks : void 0);
      env = nunjucks.configure(opts);
      return env.renderString(data, context, callback);
    }

  };

  NunjucksBrunchStatic.prototype.handles = /\.static\.njk$/;

  NunjucksBrunchStatic.prototype.acceptsContext = true;

  return NunjucksBrunchStatic;

}).call(this);

module.exports = function(config) {
  return new NunjucksBrunchStatic(config);
};

