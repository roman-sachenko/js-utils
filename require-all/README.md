# Require All #

## NodeJS Function ##

(NodeJS) Requires All Files in a folder to be able to export them at once without requiring files one by one.


```javascript

const path = require('path');
const normalizedPath = path.join(__dirname);
const SKIP_FILES = [ 'index.js'];


let filesToExport = {};

require("fs").readdirSync(normalizedPath).forEach((fileFullName) => {
  
  if(!SKIP_FILES.includes(fileFullName)) {
    const fileBaseNme = path.basename(fileFullName, '.js');
    filesToExport[fileBaseNme] = require(`./${fileFullName}`);
  }

});

module.exports = filesToExport;


```