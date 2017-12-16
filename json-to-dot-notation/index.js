/**
 * Converts Json Object to Dot Notation Object including embedded arrays
 * @param {Object} json - json object
 */
const convertWithArray = (json) => {
  
  const result = {};
  
  const mapRecursively = (obj, current) => {
    for (let key in obj) {
      const value = obj[key];
      const newKey = (current ? current + "." + key : key);
      if (value && typeof value === "object" && !(value instanceof Date)) {
        mapRecursively(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  };
  
  mapRecursively(json);

  return result;
};

exports.convertWithArray = convertWithArray;
  

/**
 * Converts Json Object to Dot Notation Object without embedded arrays
 * Everything inside arrays will not be converted
 * @param {Object} json - json object
 */
const convertWithoutArray = (json) => {
  
  const result = {};

  const mapRecursively = (obj, current) => {
    for (let key in obj) {
      const value = obj[key];
      if (Object.prototype.toString.call(value) !== '[object Array]') {
        const newKey = (current ? current + "." + key : key);
        if (value && typeof value === "object" && !(value instanceof Date)) {
          mapRecursively(value, newKey);
        } else {
          result[newKey] = value;
        }
      } else {
        result[key] = value;
      }
    }
  };
    
  mapRecursively(json);
    
  return result;
};

exports.convertWithoutArray = convertWithoutArray;