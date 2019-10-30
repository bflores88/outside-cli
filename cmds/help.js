const menus = {
	main: `
 outside [commmand] <options>

 today ............. show weather for today
 forecast .......... show 5-day weather forecast
 version ........... show package version
 help .............. show help menu for a command`,
	today: `
 outside today <options>
 
 --location, -l .... the city location to use
 --zip, -z ............. the zip code to use
 --country, -cc..... the country code to use`,
	forecast: `
 outside forecast <options>
 
 --location, -l .... the location to use
 --zip, -z ............. the zip code to use
 --country, -cc..... the country code to use`,
};

module.exports = (args) => {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

	console.log(menus[subCmd] || menus.main);
};
