# expo

Expo is a framework and a platform for universal React applications

```bash
npm install npm@latest -g
npm install --global yarn
npm install yarn@latest -g 
npm install yarn@latest --location=global
yarn --version
yarn -v
npm install -g expo-cli
npm install expo-cli@latest --location=global
yarn global add expo-cli@latest
git add .
git commit -am "install/update npm expo"
```

## FocusTime

```bash
expo init FocusTime
git add .
git commit -am "start FocusTime"
```

To run your project, navigate to the directory and run one of the following npm commands.

- **cd FocusTime**
- **npm start** # you can open iOS, Android, or web from here, or run them directly with the commands below.
- **npm run android**
- **npm run ios** # requires an iOS device or macOS for access to an iOS simulator
- **npm run web**

```bash
cd FocusTime
npm install react-native-paper
npm install expo-keep-awake
npm install @react-native-async-storage/async-storage
npm install --save react-native-vector-icons
```

```bash
cd FocusTime
npm start
git add .
git commit -am "clear History"
```

## SDK Location MapView

```bash
expo init SDKLocation
git checkout -b location
git push --set-upstream origin location
cd SDKLocation
expo install expo-location
expo install expo-device

yarn add @react-navigation/native
yarn add @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
expo install react-native-maps
npm install react-native-maps --save-exact
yarn add react-native-maps -e
yarn add @react-native-async-storage/async-storage
expo doctor --fix-dependencies
expo install expo-file-system
yarn add react-native-paper
yarn add @react-native-picker/picker
expo install react-native-svg
expo install expo-keep-awake
yarn add axios
```

### SDKLocation\src\config.js

```ts
export const BASE_URL = 'http://example.com/api';
```

```bash
cd SDKLocation
yarn android
yarn start
```

```bash
git add .
git commit -am "SDKLocation v0.1.39"
git push
```

## Screen Orientation

```bash
git checkout -b screen
expo init SDKScreen
cd SDKScreen
```

```bash
expo install expo-screen-orientation
```

### Brightness

```bash
expo install expo-brightness
```

```bash
yarn android
yarn start
```

```bash
git push --set-upstream origin screen
git add .
git commit -am "SDKScreen v0.0.3"
git push
```

## POI

```bash
expo init POI
```

- tabs (TypeScript)

```bash
git checkout -b play
git add .
git commit -am "POI v0.0.1"
git push --set-upstream origin play
cd POI
yarn android
```

### [Creating React Native Authentication](https://gist.github.com/silvioramalho/29389b4b3c16b696a5b0a8b3db81e5e7)

- Install dependencies

```bash
```

- Creating Contexts

```bash
mkdir src
mkdir src/contexts
touch src/contexts/auth.tsx
```

- Creating Service

```bash
mkdir src/services
touch src/services/auth.tsx
mkdir src/pages
mkdir src/pages/SignIn
touch src/pages/SignIn/index.tsx
mkdir src/routes
touch src/routes/app.routes.tsx
touch src/routes/auth.routes.tsx
touch src/routes/index.tsx
```

```bash
git add .
git commit -am "POI v0.0.9"
git push
```

### location -> main

```bash
git checkout main
git pull
git merge location
git push
```

### main -> location

```bash
git checkout location
git pull
git merge main
git push
```
