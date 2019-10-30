module.exports = (array) => {
	const modes = [];
	const counts = {};
	let max = 0;

	for (let i = 0; i < array.length; i++) {
		if (!counts.hasOwnProperty([array[i]])) {
			counts[array[i]] = 1;
		} else {
			counts[array[i]] += 1;
		}

		if (counts[[array[i]]] > max) {
			max = counts[array[i]];
		}
	}

	for (let j in counts) {
		if (counts[j] === max) {
			modes.push(j);
		}
	}

	return modes;
};
