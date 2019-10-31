import axios from 'axios';

const location = async () => {
	const results = await axios({
		method: 'get',
		url: 'https://ipapi.co/json/',
	});

	const { postal, country } = results.data;
	return `${postal},${country}`;
};

export default location;
