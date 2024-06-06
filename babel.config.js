module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        exclude: ['transform-regenerator', 'transform-async-to-generator'],
      },
    ],
    '@babel/preset-react',
    '@babel/typescript',
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@think-and-dev/cartesify-boardgame': './packages',
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
