# Chess Vision

Chess Vision is a lightweight starter project for experimenting with chessboard vision workflows: reading a board from images or video frames, deriving a position, and feeding that position into chess tooling.

This first commit keeps the repo dependency-free so it stays small and easy to shape into the right stack next.

## What's included

- `src/index.js` exposes a tiny project summary and CLI entrypoint.
- `test/smoke.test.js` verifies the starter module with Node's built-in test runner.
- `package.json` defines the initial project scripts.

## Scripts

```sh
npm start
npm test
```

## Next steps

- Choose the first input target: board photo, livestream frame, screen capture, or recorded clip.
- Pick the vision stack once the input target is clear.
- Add sample fixtures and expected FEN outputs for repeatable evaluation.
