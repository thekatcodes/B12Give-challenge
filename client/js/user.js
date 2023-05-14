const urlParams = new URLSearchParams(window.location.search);
const userDataString = urlParams.get('id');
console.log('userDataString:', userDataString);

// Store user id in a variable
const userId = decodeURIComponent(urlParams.get('id'));
console.log('userId:', userId); // check the value of userId


