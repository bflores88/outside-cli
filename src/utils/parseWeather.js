import getModes from './getModes';
import getIcons from './weatherIcons';

const parseWeather = (data) => {
	if (data.main) {
		return parseToday(data);
	} else {
		return parseForecast(data);
	}
};

function parseToday(data) {
	const location = `${data.name}, ${data.sys.country}`;
	const temp = `${data.main.temp}° F - ${getIcons(data.weather[0].description)}`;
	const date = Date(data.dt * 1000);

	return {
		location,
		temp,
		date,
	};
}

function parseForecast(data) {
	const location = `${data.city.name}, ${data.city.country}`;
	const forecasts = new Array(5);
	let index = 0;

	for (let i = 0; i < data.list.length; i++) {
		const forecast = data.list[i];
		const date = forecast.dt_txt.substring(0, 10);
		const low = forecast.main.temp_min.toFixed(1);
		const high = forecast.main.temp_max.toFixed(1);
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
			forecasts[index].low = Math.min(forecasts[index].low, low).toFixed(1);
			forecasts[index].high = Math.max(forecasts[index].high, high).toFixed(1);
			forecasts[index].description.push(description);
			continue;
		}
	}

	forecasts.forEach((day) => {
		day.description = getModes(day.description)
			.map((des) => {
				return getIcons(des);
			})
			.join(' / ');
	});

	return {
		location,
		forecasts,
	};
}

export default parseWeather;
