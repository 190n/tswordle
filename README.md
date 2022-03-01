tswordle
========

Trying to implement [Wordle](https://www.nytimes.com/games/wordle/index.html) using TypeScript's type system. Currently, I've implemented a version that works at runtime in [runtime.ts](./runtime.ts) (test with `ts-node runtime.ts`).

The goal:

```ts
type secret = ['v', 'i', 'v', 'i', 'd'];
type guess =  ['w', 'i', 'n', 'd', 'y'];
type result = Result<guess, secret>;
const x: result = '-g-y-'; // ⬛🟩⬛🟨⬛, no type error
const x2: result = '-g---'; // type error! '-g---' is not assignable to '-g-y-'
```
