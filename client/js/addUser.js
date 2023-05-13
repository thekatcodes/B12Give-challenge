// Get references to the month, day, and year dropdown menus
const monthDropdown = document.querySelector('#month');
const dayDropdown = document.querySelector('#day');
const yearDropdown = document.querySelector('#year');

// Create arrays for the months, days, years
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = Array.from({ length: 31 }, (_, index) => index + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, index) => currentYear - index);

// Populate the options for the month dropdown
months.forEach((month, index) => {
    const option = document.createElement('option');
    option.text = month;
    option.value = index + 1;
    monthDropdown.add(option);
});

// Populate the options for the day dropdown
days.forEach((day) => {
    const option = document.createElement('option');
    option.text = day;
    option.value = day;
    dayDropdown.add(option);
})

// Populate the options for the year dropdown
years.forEach((year) => {
    const option = document.createElement('option');
    option.text = year;
    option.value = year;
    yearDropdown.add(option);
  });