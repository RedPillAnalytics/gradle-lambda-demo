# gradle-lambda-demo

A demo of a javascript function being pushed to AWS Lambda via Gradle build tool

In order for this script to work you must create a wunderground (https://www.wunderground.com/weather/api/) account and sign up for an API key, you can then create a `keys.js` file in the root directory with the following contents, placing your API key in the relevant position:

```javascript
module.exports={
    wunderground: 'your_wunderground_api_key_here'
}
```