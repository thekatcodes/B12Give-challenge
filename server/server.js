// Import required modules
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// Create an instance of the express app
const app = express();

// Use CORS middleware
app.use(cors());

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
		lastName: "Parker",
		dateOfBirth: "August 10, 2001",
		profilePicture:
			"https://coolhdwall.com/storage1/202107/peter-parker-spider-man-far-from-home-tom-holland-4k-phone-wallpaper-2160x3840.jpg",
		bio: "Your friendly neighbourhood Spiderman. With great power comes great responsibility.",
	},
	{
		id: uuidv4(),
		firstName: "Shang-Chi",
		lastName: "Xu",
		dateOfBirth: "May 29, 1999",
		profilePicture:
			"https://www.denofgeek.com/wp-content/uploads/2021/04/Shang-Chi-4.jpeg",
		bio: "My father trained me to be an assasin. All I ever wanted was a normal life.",
	},
	{
		id: uuidv4(),
		firstName: "Natasha",
		lastName: "Romanoff",
		dateOfBirth: "December 3, 1984",
		profilePicture:
			"https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg",
		bio: "I'm still trying to be better. Even if there's a small chance, we owe it to everyone who's not in this room. To try. Whatever it takes.",
	},
];

/* ---------------- Define API endpoints ---------------- */

/* Parse incoming JSON data */
app.use(express.json());

/* List all users */
app.get("/users", (req, res) => {
    // Send the users data as a JSON response
	res.json(users);
});

/* List the user where id parameter matches data id */
app.get("/users/:id", (req, res) => {
	// Get the value of "id" from the request parameters
	const { id } = req.params;

	// Check if "id" exists
	if (id) {
		// Find the user with the matching id in the users array
		const user = users.find((user) => user.id === id);

		// Send the user object as a JSON response
		res.json(user);
	}
});

/* Add new user */
app.post("/users", (req, res) => {
	// Extract the user data from the request body
	const newUser = { id: uuidv4(), ...req.body };

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
app.put("/users/:id", (req, res) => {
	// Get the user ID from the request parameters
	const userId = req.params.id;

	// Get the updated user data from the request body
	const updatedUser = req.body;

	// Loop through the list of users and update the matching user with the new data
	users = users.map((user) => {
		if (user.id === userId) {
			// If there is a match, merge the current user data with the updated data and return it
			return { ...user, ...updatedUser };
		} else {
			// If there is no match, return the original user data without any changes
			return user;
		}
	});
	// Send back the updated user data as a JSON response
	res.json(updatedUser);
});
