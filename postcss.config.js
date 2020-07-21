const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const variables = {
  '--f-size16': '16px',
  '--f-size20': '20px',
  '--f-cl3': '#333',
  '--f-cl6': '#666',
  '--f-cl9': '#999',
  '--main-color': '#007cf9',
  '--blue-color': '#388CFF',
  '--red-color': '#dd6161',
  '--green-color': '#40be80',
  '--orange-color': '#fda844',
  '--white-color': '#fff',
  '--ddd-color': '#ddd',
  '--eee-color': '#eee',
  '--lMain-color': '#5cadff',
  '--border-color': '#efefef',
	'--strong-color': '#ff6600',
	'--wain-color': '#ff9900',
  '--num-30px': '30px',
  '--num-15px': '15px',
  '--num-20px': '20px',
  '--num-10px': '10px',
  '--num-5px': '5px'
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
      rootValue: 50,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
}
