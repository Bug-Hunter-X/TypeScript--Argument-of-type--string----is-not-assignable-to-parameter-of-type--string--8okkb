function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(people: string[]) {
  people.forEach(person => console.log(greeter(person)));
}

let user = ["Jane", "Doe"];

greeterArray(user); // Correctly handles the array of strings