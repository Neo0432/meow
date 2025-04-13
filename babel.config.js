module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@app': './src/app',
            '@entrypoint': './src/entrypoint',
            '@entities': './src/entities',
            '@features': './src/features',
            '@widgets': './src/widgets',
            '@screens': './src/screens',
            '@shared': './src/shared',
            '@mocks': './src/mock-data',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
