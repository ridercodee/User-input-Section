const prompt = require(`prompt-sync`)();

let employee = {};

let firstName = prompt("First Name:");
if(!firstName)  { 
  console.error(`Invalid fist name`);
  process.exit(1); 
}
employee.firstName = firstName;

let lastName = prompt("Last Name: ");
if(!lastName) { 
  console.error(`Invalid last name`);
  process.exit(1);
}
employee.lastName = lastName;

let startDateYear = prompt("Employee start Year: ");
// Coverting string to a number
startDateYear = Number(startDateYear);

// Chechk if it is a valid integer
if(!Number.isInteger(startDateYear) ) {
  console.error(`Enter a valid date year`);
  process.exit(1);
}
// Check if the number is in range
if(startDateYear < 1990 || startDateYear > 2023) {
  console.error(`Enter a start date year within the correct range range`);
  process.exit(1);
}

let startDateMonth = prompt("Employee start Date Month (1-12): ");
startDateMonth = Number(startDateMonth);
// Check if it is a valid integer
if(!Number.isInteger(startDateMonth)); { 
  console.error(`Enter a valid start date month `);
  process.exit(1);
}

// Check if it is in range
if(startDateMonth < 1 || startDateMonth > 12) {
  console.error(`ENter a start date month within the correct range`);
  process.exit(1);
}

let startDateDay = prompt("Employee start Date Day (1-31): ");
startDateDay = Number(startDateDay);

//  check if it is a valid integer
if(!Number.isInteger(startDateDay)); { 
  console.error(`Enter a valid start date day `);
  process.exit(1);
}

// Check if it is in range
if(startDateDay < 1 || startDateDay > 31) {
  console.error(`ENter a start date day within the correct range`);
  process.exit(1);
}

// Date element are correct, let,s create the date
employee.startDate = new Date(startDateYear, startDateMonth-1, start)