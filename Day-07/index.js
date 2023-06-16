var num = 25;

// Use the Math.sqrt() method to calculate the square root of "num". Display the result.
console.log("Square root", Math.sqrt(num));


var randomNum = Math.round(Math.random() * 10);
console.log("Random number:", randomNum);

// Use the Date() constructor to create a new date object called "today".
var today = new Date();

// Display the current date and time.
console.log("Current date and time:", today);


console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day of the month:", today.getDate());
console.log("Day of the week:", today.getDay());

// Use setter functions to set the following values in the "today" object:
// Year to 2022, Month to December, Day of the month to 31
today.setFullYear(2022);
today.setMonth(11);
today.setDate(31);

// Use getter functions to extract and display the updated values from the "today" object.
console.log("Updated year:", today.getFullYear());
console.log("Updated month:", today.getMonth() + 1);
console.log("Updated day of the month:", today.getDate());

// Use the Date() constructor to create a new date object called "birthday".
// Set the year, month, and day of the month to your own birthday.
var birthday = new Date(1999,7,19); 

// Use the getTime() method to extract the number of milliseconds between the "birthday" object and the "today" object.
// Display the result.
var millisecondsDiff = today.getTime() - birthday.getTime();
console.log("Milliseconds between birthday and today:", millisecondsDiff);

// Use the getTime() method to extract the number of days between the "birthday" object and the "today" object.
// Display the result.
var daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
console.log("Days between birthday and today:", daysDiff);