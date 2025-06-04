// Prompt the user  to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending eith full name length.

let fullname = prompt("Enter name: ");
let username = "@" + fullname + fullname.length;
console.log(username);