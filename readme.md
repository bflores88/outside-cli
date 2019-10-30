# weather-cli

A CLI app that gives the current weather and a 5-day forecast built with Node and based on [outside-cli](https://timber.io/blog/creating-a-real-world-cli-app-with-node/).

![current condition](./screenshots/today.png 'current condition')

![forecasted conditions](./screenshots/forecast.png 'forecasted conditions')

## How to Use

1. Clone or download repository
2. Run `npm install` in the command line to install dependencies
3. Go to [OpenWeatherMap Weather API](https://openweathermap.org/api) and get an API key.
4. Create a `.env` file in the root, copy the `.env.example`, and update with your API key.
5. In the command line, enter `weather today` to get the current weather condition in your location.

---

## Technologies Used

- [OpenWeatherMap Weather API](https://openweathermap.org/api) - For weather information (requires API key to use app)
- [Axios](https://github.com/axios/axios) - Send requests to API
- [Minimist](https://github.com/substack/minimist) - Parse argument options
- [Ora](https://github.com/sindresorhus/ora) - Simple spinner
