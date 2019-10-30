const ora = require('ora');
const getWeather = require('../utils/getWeather');
const parseWeather = require('../utils/parseWeather');
const getLocation = require('../utils/location');
const error = require('../utils/error');

module.exports = async (args) => {
	const spinner = ora().start();

	try {
		const location = args.location || args.l || (await getLocation());
		let zip = args.zip || args.z;
		if (args.country || args.cc) {
			zip = `${zip},${args.country || args.cc}`;
		}
		const results = await getWeather(location, args._[0], zip);
		const forecasts = parseWeather(results);

		spinner.stop();

		console.log(`\nForecasted conditions in ${forecasts.location}:\n`);
		forecasts.forecasts.forEach((day) => {
			console.log(`${day.date}  --  Low: ${day.low}° F  |  High: ${day.high}° F  |  ${day.description}`);
		});
		console.log(`\n \nNot the right location?  Enter 'weather help forecast' for more options.`);
	} catch (err) {
		spinner.stop();
		const errorMessage = `ERROR! -- ${err.response.data.message}`;
		error(errorMessage, true);
	}
};
