// https://github.com/microsoft/TypeScript/pull/40336
// via https://gist.github.com/jet2jet/5b06e87fd20d20a5dac93bf5b5965722
type Split<S extends string, D extends string> =
	string extends S ? string[] :
	S extends '' ? [] :
	S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] :
	[S];

type IsGreen<guess extends string[], secret extends string[], i extends number> =
	secret[i] extends guess[i] ? true : false;

type IsYellow<guess extends string[], secret extends string[], i extends number> =
	true;

type ResultInString<guess extends string[], secret extends string[], i extends number> =
	IsGreen<guess, secret, i> extends true ? 'g' : (
		IsYellow<guess, secret, i> extends true ? 'y' : '-'
	);

export type WordleResult<guess extends string, secret extends string> =
	`${ResultInString<Split<guess, ''>, Split<secret, ''>, 0>}\
${ResultInString<Split<guess, ''>, Split<secret, ''>, 1>}\
${ResultInString<Split<guess, ''>, Split<secret, ''>, 2>}\
${ResultInString<Split<guess, ''>, Split<secret, ''>, 3>}\
${ResultInString<Split<guess, ''>, Split<secret, ''>, 4>}`;

type CloveChoke = WordleResult<'clove', 'choke'>;
