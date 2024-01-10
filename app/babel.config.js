module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          navigators: './src/navigators',
          helpers: './src/helpers',
          services: './src/services',
          screens: './src/screens',
          stores: './src/stores',
          atoms: './src/components/atoms',
          icons: './src/components/atoms/icons',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          templates: './src/components/templates',
          themes: './src/themes',
        },
      },
    ],
  ],
};
