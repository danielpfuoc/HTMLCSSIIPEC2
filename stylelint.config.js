module.exports = {
  extends: 'stylelint-config-airbnb',
  plugins: ['stylelint-scss'],
  rules: {
    'number-leading-zero': 'always',
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment', 'first-nested', 'inside-block'] },
    ],
    'string-quotes': 'single',
  },
};
