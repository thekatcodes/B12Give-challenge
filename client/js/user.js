// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get value of thei id parameter
const userDataString = urlParams.get("id");
console.log("userDataString:", userDataString);

// Decode thei id parameter and store it in a variable
const userId = decodeURIComponent(urlParams.get("id"));
console.log("userId:", userId); // check the value of userId

// Fetch the user with the given id
fetch(`http://localhost:3000/users/${userId}`)
	.then((response) => response.json())
	.then((user) => {
		// console.log(user)

		const userProfile = document.querySelector("main");

		const profileDetail = document.createElement("div");
		profileDetail.innerHTML = `
        <div>
        <img src="${user.profilePicture}" alt="Profile Picture">
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>Date of Birth</p>
        <h3>${user.dateOfBirth} </h3>
        <p>Bio</p>
        <h3>${user.bio} </h3>
        </div>
        `;
		userProfile.appendChild(profileDetail);
	})
	.catch((error) => console.error(error));


/* ---------------- Click events ---------------- */


// Select icons
const backButton = document.querySelector(".fa-arrow-left");
const editButton = document.querySelector(".fa-pen-to-square");
const deleteButton = document.querySelector(".fa-trash-can");

// Attach event listeners to the icons
backButton.addEventListener("click", () => {
// Redirect to index.html
window.location.href = `index.html`;

});
