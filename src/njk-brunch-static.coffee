nunjucks = require 'nunjucks'
_ =
  merge: require 'lodash.merge'

class NunjucksBrunchStatic
  constructor: (@config) ->
    if @config?.fileMatch
      @handles = @config.fileMatch
      delete @config.fileMatch
    if @config?.fileTransform
      @transformPath = @config.fileTransform
      delete @config.fileTransform

  handles: /\.static\.njk$/

  transformPath: (filename) ->
    filename.replace /\.static\.njk$/, '.html'

  acceptsContext: true

  compile: (data, filename, options, context, callback) ->
    opts = _.merge {}, @config, options?.nunjucks
    env = nunjucks.configure opts
    env.renderString data, context, callback

module.exports = (config) -> new NunjucksBrunchStatic config

