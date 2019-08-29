const PACKAGE = require('../../../webpack.common.js');

module.exports = PACKAGE(
    'a11y/semantic-enrich',             // the package to build
    '../../../../js',                   // location of the MathJax js library
    [                                   // packages to link to
        'components/src/mml-input/lib',
        'components/src/core/lib'
    ],
    __dirname                           // our directory
);
