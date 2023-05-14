const userList = document.querySelector("main");

// GET request to the server to fetch the list of users
export function renderUsers() {
	// Fetch list of users from the server
	fetch("http://localhost:3000/users")
		.then((response) => response.json())
		.then((data) => {
			data.map((user) => {
        const userCard = document.createElement("div");
        console.log('user', user)
				userCard.innerHTML = `
            <div class="card" id="${user.id}" data-user=${JSON.stringify(user)}>
              <img src="${user.profilePicture}" alt="Profile Picture">
              <h2>${user.firstName} ${user.lastName}</h2>
              <button class="view-profile">View Profile</button>
            </div>
          `;
				// userCard.dataset.user = JSON.stringify(user);
        userList.appendChild(userCard);
        
        // Select "View Profile" buttons
        const viewProfileButton = userCard.querySelector(".view-profile");
        
        // Attach event listener to each button
        viewProfileButton.addEventListener("click", () => {
            console.log('TEST CLICK')
          
            // Get the user data from the "data-user" attribute
            const userData = JSON.parse(userCard.dataset.user);
        
            // Redirect to user.html and pass the user data as a query parameter
            window.location.href = `user.html?id=${userData.id}`;
          });
      });
    })
    .catch((error) => console.error(error));
      
}

// Call function to display users right away
renderUsers();


// data-user='{"id": ${user.id}, "firstName": ${user.firstName}, "lastName": ${user.lastName}, "profilePicture": ${user.profilePicture}, "bio": ${user.bio}}'
