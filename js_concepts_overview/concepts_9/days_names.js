
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Sunday
console.log(days[days.length - 1]);
// Loop through the array with for
for (let i = 0; i < days.length; i++) {
  console.log(`Day: ${days[i]}`);
}
// Day: Monday
// Day: Tuesday 

// Loop through the array with forEach
days.forEach(show);
function show(array) {
  console.log(array.toLowerCase());
}
// monday
// tuesday

// Loop through the array with forEach
// with anonymous function
days.forEach(function (day) {
  console.log(day.toUpperCase());
});
// MONDAY
// TUESDAY

// Loop through the array with forEach
// with arrow function
days.forEach((day) => {
  console.log(day.replace("a", "@"));
});
// Mond@y
// Tuesd@y

//names
let names = Array("Vani", "Leo", "Abi");

// method filter
// the name must be less than 4 characters and includes the letter 'A'
let result = names.filter((name)=> name.length<4 && name.toUpperCase().includes('A'))
// ['Abi']

// method map
let namesUpperCase = names.map(name => name.toUpperCase())
// ['VANI', 'LEO', 'ABI']

// combine map and filter
let namesReplaceI = names.map(name => name.replaceAll('i', 'I')).filter(name => name.length<4)
// ['Leo', 'AbI']

// find: returns the first element that meets the condition
let nameFound = names.find(name=>name.length<4)
// Leo

// some: returns if there are elements that meets the condition
let longNames = names.some(name => name.length>5)
// false