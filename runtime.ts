import type { FiveLetter, FiveLetterIndex, ResultString } from './tswordle';

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
function isYellow(guess: FiveLetter, secret: FiveLetter, index: FiveLetterIndex): boolean {
	for (let i: FiveLetterIndex = 0; i < 5; i++) {

	}

	if (secret.includes(guess[index])) {
		return true;
	} else {
		return false;
	}
}

function runtimeResult(guess: FiveLetter, secret: FiveLetter): ResultString {
	return guess.map((c, i) => c == secret[i] ? 'g' : (isYellow(guess, secret, i as FiveLetterIndex) ? 'y' : '-')) as ResultString;
}

interface WordleTest {
	secret: string;
	guesses: string[];
	results: string[];
}

function check({ secret, guesses, results }: WordleTest) {
	for (const i in guesses) {
		const g = guesses[i];
		const result = runtimeResult(g.split('') as FiveLetter, secret.split('') as FiveLetter).join('');
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
}

check(feb28);
check(vivid);
