/**
 * Custom import modifier that adds {h} and {Fragment} to the top of files
 * that need them
 */

module.exports = function jsxGlobal(babel) {
  var
    t = babel.types,
    visitor = {};

  function createImport(_toImport) {
    return t.importDeclaration(
      [t.importSpecifier(
        t.identifier(_toImport),
        t.identifier(_toImport)
      )],
      t.stringLiteral('preact')
    );
  }
  visitor = {
    Program: {
      exit: function (path, state) {
        if (state.get('jsxDetected')) {
          path.unshiftContainer('body', createImport('h'));
        }
        if (state.get('jsxFragmentDetected')) {
          path.unshiftContainer('body', createImport('Fragment'));
        }
      },
    },
    JSXElement: function (path, state) {
      state.set('jsxDetected', true);
    },
    JSXFragment: function (path, state) {
      state.set('jsxFragmentDetected', true);
    },
  };

  return {
    visitor: visitor,
  };
};