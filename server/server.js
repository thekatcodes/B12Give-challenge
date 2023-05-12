const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();

// Set the port number to use, either from an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server listening on the specified port
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

/* ---------------- Define data model ---------------- */
let users = [
  {
    id: uuidv4(),
		firstName: "Peter",
		lastnName: "Parker",
		dateOfBirth: "August 10, 2001",
		profilePicture:
			"https://coolhdwall.com/storage1/202107/peter-parker-spider-man-far-from-home-tom-holland-4k-phone-wallpaper-2160x3840.jpg",
		bio: "Your friendly neighbourhood Spiderman. With great power comes great responsibility.",
	},
  {
    id: uuidv4(),
		firstName: "Tony",
		lastnName: "Stark",
		dateOfBirth: "May 29, 1970",
		profilePicture:
			"https://venturecafephiladelphia.org/wp-content/uploads/sites/11/2021/05/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg",
		bio: "There's one thing you can never take away from me: I am Iron Man.",
	},
  {
    id: uuidv4(),
		firstName: "Natasha",
		lastnName: "Romanoff",
		dateOfBirth: "December 3, 1984",
		profilePicture:
			"https://venturecafephiladelphia.org/wp-content/uploads/sites/11/2021/05/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg",
		bio: "There's one thing you can never take away from me: I am Iron Man.",
	},
];

/* ---------------- Define API endpoints ---------------- */

/* Parse incoming JSON data */
app.use(express.json());

/* List all users */
app.get("/users", (req, res) => {
	res.json(users);
});

/* Add new user */
app.post("/users", (req, res) => {
	// Extract the user data from the request body
  const newUser = {id: uuidv4(), ...req.body};

	// Add the new user to the list of users
	users.push(newUser);

	// Send a response to the client indicating that the new user was created successfully
	res.status(201).json(newUser);
});

/* Remove user */
app.delete("/users/:id", (req, res) => {
	// Get the user ID from the request parameters
	const userId = req.params.id;

	// Remove the user from the users array by filtering out the user with a matching ID
	users = users.filter((user) => user.id !== userId);

	// Send a 204 No Content response indicating that the user was successfully deleted
	res.sendStatus(204);
});

/* Update user */
