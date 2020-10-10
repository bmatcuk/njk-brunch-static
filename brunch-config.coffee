module.exports.config =
  paths:
    public: '.'
    watched: ['src']

  files:
    javascripts:
      joinTo: 'index.js'

  modules:
    wrapper: false
    definition: false

  npm:
    enabled: false

  sourceMaps: false

  overrides:
    production:
      optimize: false
