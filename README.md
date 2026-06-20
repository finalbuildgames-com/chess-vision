# Chess Vision

Chess Vision is an Expo React Native starter for experimenting with chessboard vision workflows across iOS, Android, tablets, and web.

## Setup

```sh
npm install
```

## Run

```sh
npm start
npm run ios
npm run android
npm run web
```

## Verify

```sh
npm test
npx expo install --check
npx expo-doctor
```

## What's included

- `App.js` renders a responsive React Native shell for phone, tablet, desktop, and web runtimes.
- `app.json` declares iOS, Android, and web targets with Expo-managed configuration.
- `src/deviceProfile.js` centralizes width and platform mapping for reusable layout decisions.
- `test/react-native-config.test.js` pins the project setup with Node's built-in test runner.

## Next Steps

- Choose the first input target: board photo, livestream frame, screen capture, or recorded clip.
- Add sample fixtures and expected FEN outputs for repeatable evaluation.
