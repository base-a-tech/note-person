This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

# using npm
npm run ios

# OR using Yarn
yarn ios

### Install IOS


- cd ios && rm -rf Pods && rm -rf Podfile.lock && rm -rf build && pod deintegrate && cd ..

- sudo arch -x86_64 gem install ffi

- cd /node_modules/react-native/third-party-podspecs/boost.podspec

- edit line 14 to:
  spec.source = { :http => 'https://sourceforge.net/projects/boost/files/boost/1.83.0/boost_1_83_0.tar.bz2',
      :sha256 => '6478edfe2f3305127cffe8caf73ea0176c53769f4bf1585be237eb30798c3b8e' }

- sudo xcode-select --switch /Applications/Xcode.app

- cd ios && bundle exec pod install --verbose

# Install ISO error

rm -rf ~/Library/Developer/Xcode/DerivedData/*
arch -x86_64 pod cache clean --all
arch -x86_64 pod repo remove trunk

arch -x86_64 pod update && arch -x86_64 pod deintegrate && arch -x86_64 pod setup && arch -x86_64 pod install --repo-update

