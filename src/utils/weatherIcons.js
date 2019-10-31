const getIcons = (condition) => {
	if (condition.includes('rain') || condition.includes('mist')) {
		return (condition = `🌧  ${condition}`);
	}

	if (condition.includes('clear') || condition.includes('sun')) {
		return (condition = `☀️  ${condition}`);
	}

	if (condition.includes('overcast')) {
		return (condition = `🌥  ${condition}`);
	}

	if (condition.includes('few')) {
		return (condition = `🌤  ${condition}`);
	}

	if (condition.includes('cloud')) {
		return (condition = `☁️  ${condition}`);
	}

	if (condition.includes('thunder')) {
		return (condition = `🌩  ${condition}`);
	}

	if (condition.includes('snow')) {
		return (condition = `❄️  ${condition}`);
	}

	return condition;
};

export default getIcons;
