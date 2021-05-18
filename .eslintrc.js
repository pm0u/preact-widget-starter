module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'import'],
  rules: {
    // preact uses class instead of className
    'react/no-unknown-property': [2, { ignore: ['class'] }],
    // don't use these they are bad
    'no-restricted-syntax': [2, 'LabeledStatement', 'WithStatement'],
    // Allow these to be unused
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next',
      },
    ],
    /**
     * in a destructure statement error if anything assigned
     * with let could be const because not reassigned
     */
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
      },
    ],
    // Only force braces if needed for syntax
    'arrow-body-style': [2, 'as-needed'],
    // allow using tagged template literals
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    // warn for console logs
    'no-console': 1,
    // no
    'import/prefer-default-export': 0,
    // require naming functions when can't be inferred, helps debugging
    'func-names': [2, 'as-needed'],
    // max line length of 80
    'max-len': [1, { code: 80 }],
    // error missing extensions if not js/jsx
    'import/extensions': [2, { js: 'never', jsx: 'never' }],
    // allow empty returns
    'consistent-return': 0,
    // don't require importing react
    'react/react-in-jsx-scope': 0,
    // don't care about prop types missing
    'react/prop-types': 0,
    // allow js or js
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    // single quotes, but double allowed to prevent escaping
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // Don't want semi colons
    semi: [2, 'never'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        jsxSingleQuote: true,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
    // warn for not listing all used variables in deps
    'react-hooks/exhaustive-deps': 1,
  },
}
