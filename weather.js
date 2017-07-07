const fetch = require('node-fetch')
const keys = require('./keys.js')

fetch('http://api.wunderground.com/api/' + keys.wunderground + '/conditions/q/30144.json').then((res) => {
  return res.text()
}).then((body) => {
  console.log(body)
})
