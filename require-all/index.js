const path = require('path');



module.exports = {
  /**
   * 
   * @param {String} dirPath 
   * @param {Object} options 
   * @param {Array} options.skipFiles files to skip
   * @param {Array} options.extFilter file extensions to handle (empty array means all files)
   */
  requireAllFromDir(dirPath, options) {

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
}
