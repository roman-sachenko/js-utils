# Json-To-Dot-Notation #

Converts Json Object to Dot Notation Object 

```javascript
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

> { name: 'Jame Hetfield',
  'info.instrument': 'guitar',
  'info.hobbies.0': 'hunting',
  'info.hobbies.1': 'snowboarding',
  'info.hobbies.2': 'street hockey',
  'info.hobbies.3': 'jet-skiing',
  'info.hobbies.4': 'collecting older guitars',
  'info.hobbies.5': 'kicking asses',
  'info.bands.0.name': 'Metallica',
  'info.bands.0.detals.formedAt': '1981' }

  
  
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

> { name: 'Jame Hetfield',
  'info.instrument': 'guitar',
  hobbies: 
   [ 'hunting',
     'snowboarding',
     'street hockey',
     'jet-skiing',
     'collecting older guitars',
     'kicking asses' ],
  bands: [ { name: 'Metallica', detals: [Object] } ] }

```
