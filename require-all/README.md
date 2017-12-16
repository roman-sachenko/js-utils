# Require All #

## NodeJS Function ##

(NodeJS) Requires All Files in a folder to be able to export them at once without requiring files one by one.


```javascript

const filesToExport = {};

require('fs').readdirSync(dirPath).forEach((fileFullName) => {
      
  if(!SKIP_FILES.includes(fileFullName)) {
    const fileBaseNme = path.basename(fileFullName, '.js');
    const filePath = `${dirPath}/${fileFullName}`;
      
    if(!EXT_FILTER.length) {
      return filesToExport[fileBaseNme] = require(`${filePath}`);
    }
      
    if(EXT_FILTER.includes(path.extname(fileFullName))) {
      return filesToExport[fileBaseNme] = require(`${filePath}`);
    }
  }
    
});

return filesToExport;
```