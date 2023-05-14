import { dobDropdown, years, months } from "./helper.js";

export function updateUser(user) {
	const profileUpdate = document.querySelector(".profile-detail");
	profileUpdate.innerHTML = `
  <div> 
  <img src="${user.profilePicture}" alt="Profile Picture">
  <input type="text" name="profilePicture" value="${user.profilePicture}">
  <h2><input type="text" name="firstName" value="${user.firstName}"> <input type="text" name="lastName" value="${user.lastName}"></h2>
  <p class="dob">Date of Birth</p>
  <p>Bio</p>
  <h3><textarea name="bio">${user.bio}</textarea></h3>
  <button class="save-button">Save</button>
  <button>Cancel</button>
  </div>
  `;

	// Create new select elements for dropdowns
	const monthDropdown = document.createElement("select");
	const dayDropdown = document.createElement("select");
	const yearDropdown = document.createElement("select");

	// Call dobDropdown function to populate the month, day, and year dropdowns
	dobDropdown(monthDropdown, dayDropdown, yearDropdown);

	// Add the month, day, and year dropdowns to the .dob element
	document
		.querySelector(".dob")
		.append(monthDropdown, dayDropdown, yearDropdown);

	// Extract the month, day, and year values from the user's dateOfBirth string using the split() method
	const [month, day, year] = user.dateOfBirth.split(/[\s,]+/);

	// Set the selected index of the dropdowns based on the extracted values
	yearDropdown.selectedIndex = years.indexOf(parseInt(year));
	const monthIndex = months.findIndex((monthArr) => monthArr === month);
	if (monthIndex !== -1) {
		monthDropdown.selectedIndex = monthIndex;
	}
	dayDropdown.selectedIndex = parseInt(day) - 1;
	// Save click event to send new data back to server + close input fields and display new profile data

	const saveButton = document.querySelector(".save-button");
  saveButton.addEventListener("click", () => {
    console.log('Click')
		const profileUpdate = document.querySelector(".profile-detail");
		const userId = user.id;

		// Get the updated values from the input fields
		const profilePicture = profileUpdate.querySelector(
			"input[name='profilePicture']"
		).value;
		const firstName = profileUpdate.querySelector(
			"input[name='firstName']"
		).value;
		const lastName = profileUpdate.querySelector(
			"input[name='lastName']"
		).value;
		const bio = profileUpdate.querySelector("textarea").value;
		const dob = `${monthDropdown.value} ${dayDropdown.value}, ${yearDropdown.value}`;


    console.log('dob data',dob)

		// Construct the updated user object
		const updatedUser = {
			id: userId,
			profilePicture: profilePicture,
			firstName: firstName,
			lastName: lastName,
			bio: bio,
			dateOfBirth: dob,
		};
    console.log('updated user',updatedUser)
  });
  
}

// Cancel on click reverts to profile
