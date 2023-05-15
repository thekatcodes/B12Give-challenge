// Import required modules
import { updateUser } from "./updateUser.js";

// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get value of the id parameter
const userDataString = urlParams.get("id");
console.log("userDataString:", userDataString);

// Decode thei id parameter and store it in a variable
const userId = decodeURIComponent(urlParams.get("id"));
console.log("userId:", userId); // check the value of userId

let userData;

// Fetch the user with the given id
fetch(`http://localhost:3000/users/${userId}`)
	.then((response) => response.json())
	.then((user) => {
		// console.log(user)
    userData = user;
		const userProfile = document.querySelector("main");

    const profileDetail = document.createElement("div");
    profileDetail.classList.add("profile-detail-container");

		profileDetail.innerHTML = `
            <img src="${user.profilePicture}" alt="Profile Picture" class="profile-image">
            <h2 class="profile-name">${user.firstName} ${user.lastName}</h2>
            <p class="dob-label">Date of Birth</p>
            <h3 class="user-dob">${user.dateOfBirth} </h3>
            <p class="profile-bio-label">Bio</p>
            <h3 class="profile-bio-text">" ${user.bio} "</h3>
            `;
		userProfile.appendChild(profileDetail);

		const updateButton = document.querySelector(".fa-pen-to-square");

		updateButton.addEventListener("click", () => {
			updateUser(user);
		});
	})
	.catch((error) => console.error(error));

/* ---------------- Back and Delete click events ---------------- */

// Select icons
const backButton = document.querySelector(".fa-arrow-left");
const deleteButton = document.querySelector(".fa-trash-can");

// Attach event listeners to the icons
backButton.addEventListener("click", () => {
	// Redirect to index.html
	window.location.href = `index.html`;
});

deleteButton.addEventListener("click", () => {
 	// Send delete request to server with user data
   fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        // Redirect to index.html
        window.location.href = `index.html`;
        console.log("deleted user, now back to home page");
      }
    })
    .catch((error) => console.error(error));
});
