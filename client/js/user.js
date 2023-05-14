const urlParams = new URLSearchParams(window.location.search);
const userDataString = urlParams.get('id');
console.log('userDataString:', userDataString);

// Store user id in a variable
const userId = decodeURIComponent(urlParams.get('id'));
console.log('userId:', userId); // check the value of userId



fetch(`http://localhost:3000/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {

        console.log(user)

        const userProfile = document.querySelector('main');
        
        
        const profileDetail = document.createElement('div');
        profileDetail.innerHTML = `
        <div>
        <h1>${user.firstName}</h1>
        </div>
        `
        userProfile.appendChild(profileDetail);

    })
    .catch((error) => console.error(error));