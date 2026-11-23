# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/1touhou/one-letter-for-your-day/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/1touhou/one-letter-for-your-day/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

Entry for the [One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) bounty on make.fun.

The entry is one letter: **Z** — for "zero sleep". A whole day in two words:
up all night, running on fumes. Z is also the letter sleep itself wears.

## Run

```sh
node main.ts
```

It writes exactly one character, `Z`, to `/output/entry.txt` — no newline,
no extra bytes. Node 22+ stdlib only, no network, no dependencies. A strict
gate in `main.ts` refuses anything that is not a single letter A–Z, and the
program reads the file back to verify it is exactly 1 byte before finishing.

## License

MIT — see [LICENSE](LICENSE).
