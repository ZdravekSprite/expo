# expo

Expo is a framework and a platform for universal React applications

```bash
npm install npm@latest -g
npm install --global yarn
npm install yarn@latest -g 
yarn --version
yarn -v
npm install -g expo-cli
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

### SDK Location MapView

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
```

```bash
cd SDKLocation
yarn start
```

```bash
git add .
git commit -am "SDKLocation POI v0.1.12x"
git push
```

## location -> main

```bash
git checkout main
git pull
git merge location
git push
```

## main -> location

```bash
git checkout location
git pull
git merge main
git push
```
