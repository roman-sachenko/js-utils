# Require All #

## NodeJS Function ##

(NodeJS) Requires All Files in a folder to be able to export them at once without requiring files one by one.


```javascript

const requireAllFromDir = (dirPath, options) => {
  
  const { skipFiles = [], extFilter = [] } = options;
  const filesToExport = {};

  require('fs').readdirSync(dirPath).forEach((fileFullName) => {
        
    if(!skipFiles.includes(fileFullName)) {
      const fileBaseNme = path.basename(fileFullName, '.js');
      const filePath = `${dirPath}/${fileFullName}`;
      
      if(!extFilter.length) {
        return filesToExport[fileBaseNme] = require(`${filePath}`);
      }
      
      if(extFilter.includes(path.extname(fileFullName))) {
        return filesToExport[fileBaseNme] = require(`${filePath}`);
      }
    }
  });
  
  return filesToExport;
}
```