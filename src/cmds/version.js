import { version } from '../../package.json';

const getVersion = (args) => {
	console.log(`v${version}`);
};

export default getVersion;
