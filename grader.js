const average = testScores => {
	let sum = testScores.reduce((acc, current) => {
		return acc + current;
	}, 0);
	const avg = Math.round(sum / testScores.length);
	return avg;
};
const scores = [90.98, 100, 89, 100, 86, 94];
const scores2 = [40, 65, 77, 82, 54, 80, 73, 63, 95, 49];
console.log(average(scores));
console.log(average(scores2));
