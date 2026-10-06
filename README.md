# Chess Vision

An Expo and React Native starter for chessboard vision experiments. It currently provides a responsive app shell for phones, tablets, and web. Chessboard recognition is not implemented yet.

## Install

Use npm and a Node version supported by the locked React Native/Metro packages:
`^20.19.4 || ^22.13.0 || ^24.3.0 || >=25.0.0`. The root manifest's `>=20`
constraint alone is less strict. Install dependencies from the repository root:


```sh
npm ci
```

## Run

```sh
npm start
```

The scripts start Expo's development server; they do not produce a release build.
Choose a target explicitly:

| Command | Target and prerequisites |
| --- | --- |
| `npm run web` | Metro web development in a browser |
| `npm run android` | Android device or configured Android SDK/emulator |
| `npm run ios` | iOS device or, for the local simulator, macOS with Xcode |

`npm start` exposes Expo's terminal target menu. A physical device needs an
Expo-compatible client/development setup and access to the development server.
The repository has no configured release-build, deployment, or recognition pipeline.

[index.js](index.js) registers [App.js](App.js), which draws a static 8×8 board
and a device/runtime panel. There is no camera capture, piece detection, chess
engine, game-state extraction, or backend in the current source.
[src/deviceProfile.js](src/deviceProfile.js) selects phone, tablet (700px+), and
desktop (1024px+) layouts by available width; these labels describe layouts,
not hardware detection. [app.json](app.json) declares iOS, Android, and web
with Metro as the web bundler. [babel.config.cjs](babel.config.cjs) uses the
Expo Babel preset.

## Check

```sh
npm test
```

The test script runs Node's built-in test runner and needs no installed Expo
packages. [test/react-native-config.test.js](test/react-native-config.test.js)
checks manifests and responsive device-profile values. It does not render the
app or verify device/camera behavior. To inspect layout manually, run the web
entry point and resize around the 700px and 1024px breakpoints.

## License

MIT. [LICENSE](LICENSE) credits Micah Anthony (Final Build Games); that existing
copyright notice is preserved. The project is hosted under
[Final Build Games](https://github.com/finalbuildgames-com). Dependencies retain
their respective licenses. `private: true` in package metadata prevents npm
publication and does not replace the MIT license.
