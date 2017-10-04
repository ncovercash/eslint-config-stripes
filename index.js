module.exports = {
  "extends": "airbnb",
  "settings": {
    "import/resolver": {
      "webpack": {}
    },
    "react": {
      "version": "15.6.1"
    },
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "import/extensions": ["warn", "never"],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
          "every": [ "id" ]
      },
      "allowChildren": false,
    }],
    "jsx-a11y/no-noninteractive-tabindex": ["error", {
      "tags": [],
      "roles": ["tabpanel", "dialog"],
    }],
    "max-len": "off",
    "no-console": "off",
    "no-param-reassign": ["error", {
      "props": false
    }],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-underscore-dangle": "off",
    "no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_"
    }],
    "react/forbid-prop-types": ["warn", {
      "forbid": ["any", "array"]
    }],
    "react/jsx-filename-extension": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/sort-comp": ["warn", {
      "order": [
        "static-methods",
        "lifecycle",
        "everything-else",
        "render"
      ]
    }],
  }
};
