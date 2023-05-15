/* ---------------- Display all users cards ---------------- */

const userList = document.querySelector("main");

// GET request to the server to fetch the list of users
export function renderUsers() {
	// Fetch list of users from the server
	fetch("http://localhost:3000/users")
		.then((response) => response.json())
		.then((data) => {
			data.map((user) => {
				const userCard = document.createElement("div");
				console.log("user", user);

				// Set the `innerHTML` of the user card element to a string containing the user data
				userCard.innerHTML = `
            <div class="card" id="${user.id}">
              <img src="${user.profilePicture}" alt="Profile Picture">
              <h2>${user.firstName} ${user.lastName}</h2>
              <button class="view-profile">View Profile</button>
            </div>
          `;
				userList.appendChild(userCard);

				// Select "View Profile" buttons
				const viewProfileButton = userCard.querySelector(".view-profile");

				// Attach event listener to each button
				viewProfileButton.addEventListener("click", () => {
					console.log("TEST CLICK");

					// Redirect to user.html and pass the user id as a query parameter
					window.location.href = `user.html?id=${user.id}`;
				});
			});
		})
		.catch((error) => console.error(error));
}

// Call function to display users right away
renderUsers();


/* ---------------- Hide/Display Modal on click events ---------------- */

// Select Add User button
const addUserButton = document.querySelector(".add-user-button");

// Select modal element
const modal = document.getElementById("add-user-modal");

// Select close button inside the modal
const closeButton = modal.querySelector(".close");

// Add event listener to Add User button
addUserButton.addEventListener("click", () => {
  console.log('+ Add User clicked')
  // Show the modal
  modal.style.display = "block";
});


// Add event listener to close (x) button
closeButton.addEventListener("click", () => {
  console.log('close icon clicked')

  // Hide the modal
  modal.style.display = "none";
});