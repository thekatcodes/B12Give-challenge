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
        <img src="${user.profilePicture}" alt="Profile Picture">
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>Date of Birth</p>
        <h3>${user.dateOfBirth} </h3>
        <p>Bio</p>
        <h3>${user.bio} </h3>
        </div>
        `
        userProfile.appendChild(profileDetail);

    })
    .catch((error) => console.error(error));