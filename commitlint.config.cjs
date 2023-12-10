module.exports = {
  // extends: ['@commitlint/config-conventional'],
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 20],
    // Custom rules for capital letter and ending with a comma
    'header-case-start-capital': [2, 'always'],
    'header-end-period': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': ({ raw }) => {
          return [
            /^[A-Z]/.test(raw),
            'Commit message must start with a capital letter',
          ];
        },
        'header-end-period': ({ raw }) => {
          return [/\.$/.test(raw), 'Commit message must end with a period'];
        },
      },
    },
  ],
};
