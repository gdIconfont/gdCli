const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const variables = {
  '--main-color': '#3399ff',
  '--lMain-color': '#5cadff',
  '--border-color': '#efefef',
	'--strong-color': '#ff6600',
	'--wain-color': '#ff9900'
}
module.exports = {
  plugins: [
  	cssnext({
      'browserslist': [
        "last 3 version",
        "ie 9"
      ],
      'warnForDuplicates': false,
      features: {
        customProperties: {
          variables
        }
      }
    }),
    cssnano({
      zindex: false
    }),
    require('postcss-pxtorem')({
      rootValue: 100,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
}
