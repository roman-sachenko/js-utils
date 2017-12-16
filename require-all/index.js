const path = require('path');
const normalizedPath = path.join(__dirname);
const SKIP_FILES = [ 'index.js']; //file to skip
const EXT_FILTER = ['.js']; //file extensions to handle (empty array means all files)


module.exports = {
  requireAllFromDir(dirPath) {

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
  }
}
