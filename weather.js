const fetch = require('node-fetch')
const keys = require('./keys.js')
const zip = 94129

fetch('http://api.wunderground.com/api/' + keys.wunderground + '/hourly/q/' + zip + '.json').then((res) => {
  return res.json()
}).then((json) => {
  console.log('San Francisco (' + zip + ') Hourly Forecast - Local Time')
  for(let i = 0; i < json.hourly_forecast.length; i++) {
    console.log(json.hourly_forecast[i].FCTTIME.civil + ' - ' + json.hourly_forecast[i].temp.english + '°F (' + json.hourly_forecast[i].condition + ')')
  }
})
