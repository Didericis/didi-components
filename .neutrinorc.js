module.exports = {
  use: [
    ['@neutrinojs/airbnb', {
      eslint: {
        rules: {
          'import/no-extraneous-dependencies': 'off',
          'react/require-default-props': 'off',
          'react/forbid-prop-types': 'off',
        }
      }
    }],
    ['@neutrinojs/react-components', {
      style: { extract: { plugin: { filename: '[name].css' } } }
    }],
    ['@neutrinojs/mocha', {
      ui: 'bdd-lazy-var/global'
    }]
  ]
};
