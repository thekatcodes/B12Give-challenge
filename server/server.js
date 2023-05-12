const express = require("express");
const app = express();

// Set the port number to use, either from an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server listening on the specified port
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

/* Define data model */

let users = [
	{
		firstName: "Peter",
		lastnName: "Parker",
		dateOfBirth: "August 10, 2001",
		profilePicture:
			"https://coolhdwall.com/storage1/202107/peter-parker-spider-man-far-from-home-tom-holland-4k-phone-wallpaper-2160x3840.jpg",
		bio: "Your friendly neighbourhood Spiderman. With great power comes great responsibility.",
	},
	{
		firstName: "Tony",
		lastnName: "Stark",
		dateOfBirth: "May 29, 1970",
		profilePicture:
			"https://venturecafephiladelphia.org/wp-content/uploads/sites/11/2021/05/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg",
		bio: "There's one thing you can never take away from me: I am Iron Man.",
  },
  {
		firstName: "Natasha",
		lastnName: "Romanoff",
		dateOfBirth: "December 3, 1984",
		profilePicture:
			"https://venturecafephiladelphia.org/wp-content/uploads/sites/11/2021/05/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg",
		bio: "There's one thing you can never take away from me: I am Iron Man.",
	},
];

/* Define API endpoints */

// List all users

// Add new user

// Remove user

// Update user
