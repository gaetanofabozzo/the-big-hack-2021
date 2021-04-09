const path = require('path');

module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier", "react-hooks"],
  parser: 'babel-eslint',
  rules: {
    // Prettier are errors
    "prettier/prettier": ["error"],
    // Allow JSX on JS Files (React only)
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-continue": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'no-console': [2, { allow: ['error', 'info', 'log'] }],
  },
  env: {
    "browser": true,
    "node": true
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages')
      },
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
};

