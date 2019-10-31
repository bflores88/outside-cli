import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const weatherApiKey = process.env.OPEN_WEATHER_API_KEY;

const getWeather = async (location, apiType, zip) => {
	const apiCall =
		apiType === 'today'
			? 'https://api.openweathermap.org/data/2.5/weather'
			: 'https://api.openweathermap.org/data/2.5/forecast';

	let params = {
		appid: weatherApiKey,
		units: 'imperial',
	};
	if ((location && zip) || zip) {
		params.zip = zip;
	}
	if (location && !zip) {
		params.q = location;
	}

	const results = await axios({
		method: 'get',
		url: apiCall,
		params,
	});

	return results.data;
};

export default getWeather;
