module.exports = (kelvin) => {
	return kelvinToFahrenheit(kelvin);
};

function kelvinToFahrenheit(kelvin) {
	return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(1);
}
