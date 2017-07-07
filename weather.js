const fetch = require('node-fetch')
const keys = require('./keys.js')
const zip = 30144

fetch('http://api.wunderground.com/api/' + keys.wunderground + '/hourly/q/' + zip + '.json').then((res) => {
  return res.json()
}).then((json) => {
  for(let i = 0; i < json.hourly_forecast.length; i++) {
    console.log(json.hourly_forecast[i].temp.english)
  }
})
