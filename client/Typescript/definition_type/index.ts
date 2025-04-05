
// la Definition de type en typeScript 

const user = {
  name: "John Doe",
  id: 123,
}


interface User {
  name: string;
  id: number;
}

// on peut declare une variable de type User

const user2: User = {
  name: "Jane Doe",
  id: 234,
}

console.log(user2);

