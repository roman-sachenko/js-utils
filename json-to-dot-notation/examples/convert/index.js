const { convertWithArray, convertWithoutArray } = require('../../index');
  
  const jsonObject = {
    name: 'Jame Hetfield',
    info: {
      instrument: 'guitar',
      hobbies: ['hunting', 'snowboarding', 'street hockey', 'jet-skiing', 'collecting older guitars', 'kicking asses'],
      bands: [
        {
          name: 'Metallica',
          detals: {
            formedAt: '1981'
          }
        }
      ] 
    }
  }
  
  const resultWithArray = convertWithArray(jsonObject);
  const resultWithoutArray = convertWithoutArray(jsonObject);
  
  
  console.log('With Array');
  console.log(resultWithArray);
  console.log('---------------------------------------------------');
  console.log('Without Array');
  console.log(resultWithoutArray);
  