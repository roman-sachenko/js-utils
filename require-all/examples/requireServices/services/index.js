const { requireAllFromDir } = require('../../../index');

module.exports = requireAllFromDir(__dirname, { 
  skipFiles: [ 'index.js' ],
  extFilter: ['.js']
});
