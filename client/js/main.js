const userList = document.querySelector("main");

console.log('TESTTET')

// GET request to the server to fetch the list of users

fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then(data => {
    data.map(user => {
      const userCard = document.createElement('div');
      userCard.innerHTML = `
        <div class="card">
          <img src="${user.profilePicture}" alt="Profile Picture">
          <h2>${user.firstName} ${user.lastName}</h2>
        </div>
      `;
      userList.appendChild(userCard);
    })
  })
  .catch(error => console.error(error));