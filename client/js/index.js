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
