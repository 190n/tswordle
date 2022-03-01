// ..[x].. guess
// ..[x].. secret
// YES
//
// ..x[x]. guess
// ..x[y]. secret
// NO
// condition: number of previous matches is the same and there's at least one match
// x[x]... guess
// x[y].x. secret
// YES
function isYellow(guess: string, secret: string, index: number): boolean {
	const numInSecret = [...secret].reduce((count, c) => c == guess[index] ? (count + 1) : count, 0),
		indexInGuess = [...guess].reduce((count, c, i) => (c == guess[index] && i <= index) ? (count + 1) : count, 0);
	return secret.includes(guess[index]) && indexInGuess <= numInSecret;
}

function runtimeResult(guess: string, secret: string): string {
	return [...guess].map((c, i) => c == secret[i] ? 'g' : (isYellow(guess, secret, i) ? 'y' : '-')).join('');
}

interface WordleTest {
	secret: string;
	guesses: string[];
	results: string[];
}

function check({ secret, guesses, results }: WordleTest) {
	for (const i in guesses) {
		const g = guesses[i];
		const result = runtimeResult(g, secret);
		console.log(result);
		console.assert(result == results[i]);
	}
}

const feb28 = {
	secret: 'choke',
	guesses: ['posit', 'crane', 'clove', 'choke'],
	results: ['-y---', 'g---g', 'g-g-g', 'ggggg'],
};

const vivid = {
	secret: 'vivid',
	guesses: ['craft', 'house', 'glide', 'windy', 'lipid', 'vivid', 'piing', 'xviii'],
	results: ['-----', '-----', '--yy-', '-g-y-', '-g-gg', 'ggggg', '-gy--', '-yyg-'],
};

const mar1 = {
	secret: 'rupee',
	guesses: ['audio', 'crest', 'ruler', 'rupee'],
	results: ['-g---', '-yy--', 'gg-g-', 'ggggg'],
}

check(feb28);
check(vivid);
check(mar1);
