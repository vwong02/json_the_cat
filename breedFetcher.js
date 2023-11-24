const request = require('request');
// console.log(process.argv)

const breedName = process.argv[2];
console.log(breedName)

const fetchBreedDescription = function() {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  const data = JSON.parse(body);
    
  if (!breedName) {
    console.log('error:', undefined); 
  } else if (breedName && data.length === 0) {
    console.log('error:', 'No breed was found')
  } else if (error) {
    console.log('error:', error)
  } else 
    console.log(data[0].description);
  }
  
  )};

fetchBreedDescription()


module.exports = { fetchBreedDescription }
