module.exports = (phase, { defaultConfig }) => {
 
  return {
      ...defaultConfig,
      webpack: (config, options) => {
        config.node = {
          fs: 'empty'
      }
      return config
    }
  }
}