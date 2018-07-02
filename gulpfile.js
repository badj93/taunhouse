let smartgrid = require('smart-grid')

const setting = {
  outputStyle: 'scss',
  columns: 12,
  container: {
    maxWidth: '1170px'
  }
}

smartgrid('./src/assets/scss/', setting)
