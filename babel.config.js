module.exports = {
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
  ],
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react',
  ]
};
