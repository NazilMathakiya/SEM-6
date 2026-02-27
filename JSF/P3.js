13.3// Write a Node.js program using moment to display the current date and time.

const moment = require("moment");

const now = moment();

console.log("Current Date:", now.format("DD-MM-YYYY"));
console.log("Current Time:", now.format("HH-mm-ss"));

console.log("Full Date and Time:", now.format("DD-MM-YYYY HH-mm-ss"));
