const convertTemp = require('./kelvinToFahrenheit');
const getModes = require('./getModes');

module.exports = (data) => {
	if (data.main) {
		return parseToday(data);
	} else {
		return parseForecast(data);
	}
};

function parseToday(data) {
	const location = `${data.name}, ${data.sys.country}`;
	const temp = `${convertTemp(data.main.temp)}° F - ${data.weather[0].description}`;
	const date = Date(data.dt * 1000);

	return {
		location: location,
		temp: temp,
		date: date,
	};
}

function parseForecast(data) {
	const location = `${data.city.name}, ${data.city.country}`;

	// Forecast data from API is given in 5-day/3-hours

	// Group forecast data by data

	// For each day, get the lowest low, highest high, and mode of descriptions
	const forecasts = new Array(5);
	let index = 0;

	for (let i = 0; i < data.list.length; i++) {
		const forecast = data.list[i];
		const date = forecast.dt_txt.substring(0, 10);
		const low = convertTemp(forecast.main.temp_min);
		const high = convertTemp(forecast.main.temp_max);
		const description = forecast.weather[0].description;

		const dayForecast = {
			date: date,
			low: low,
			high: high,
			description: [description],
		};

		if (!forecasts[index]) {
			forecasts[index] = dayForecast;
			continue;
		}

		if (forecasts[index].date !== date) {
			index += 1;
			forecasts[index] = dayForecast;
			continue;
		}

		if (forecasts[index].date === date) {
			forecasts[index].low = Math.min(forecasts[index].low, low);
			forecasts[index].high = Math.max(forecasts[index].high, high);
			forecasts[index].description.push(description);
			continue;
		}
	}

	forecasts.forEach((day) => {
		day.description = getModes(day.description).join(' / ');
	});

	return {
		location,
		forecasts,
	};
}
