// Get references to the month, day, and year dropdown menus
const monthDropdown = document.querySelector('#month');
const dayDropdown = document.querySelector('#day');
const yearDropdown = document.querySelector('#year');

// Create arrays for the months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

months.forEach((month, index) => {
    const option = document.createElement('option');
    option.text = month;
    option.value = index + 1;
    monthDropdown.add(option);
});