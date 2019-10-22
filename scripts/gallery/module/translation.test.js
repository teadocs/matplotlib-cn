const translation = require('./translation');

(async () => {
  try {
    let result = await translation('Lines, bars and markers');
    console.log('result', result.TargetText);
  } catch (error) {
    console.log('error', error); 
  }
})();
