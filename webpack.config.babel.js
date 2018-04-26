export default {
  entry: {
    main: './src/step1.js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['env', { modules: false }],
            ],
            plugins: [
              'syntax-dynamic-import',
              'universal-import',
            ]
          },
        },
      },
    ],
  },
};
