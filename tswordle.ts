// green, yellow, gray
type ResultCharacter = 'g' | 'y' | '-';
export type ResultString = [ResultCharacter, ResultCharacter, ResultCharacter, ResultCharacter, ResultCharacter];

export type FiveLetter = [string, string, string, string, string];
export type FiveLetterIndex = 0 | 1 | 2 | 3 | 4;

type IsGreen<guess extends FiveLetter, secret extends FiveLetter, i extends FiveLetterIndex> =
	secret[i] extends guess[i] ? true : false;

type IsYellow<guess extends FiveLetter, secret extends FiveLetter, i extends FiveLetterIndex> =
	true;

type ResultInString<guess extends FiveLetter, secret extends FiveLetter, i extends FiveLetterIndex> =
	IsGreen<guess, secret, i> extends true ? 'g' : (
		IsYellow<guess, secret, i> extends true ? 'y' : '-'
	);

type Result<guess extends FiveLetter, secret extends FiveLetter> =
	`${ResultInString<guess, secret, 0>}\
${ResultInString<guess, secret, 1>}\
${ResultInString<guess, secret, 2>}\
${ResultInString<guess, secret, 3>}\
${ResultInString<guess, secret, 4>}`;

type PositChoke = Result<['c', 'l', 'o', 'v', 'e'], ['c', 'h', 'o', 'k', 'e']>;

type Flatten<T extends FiveLetter> = `${T[0]}${T[1]}${T[2]}${T[3]}${T[4]}`;
