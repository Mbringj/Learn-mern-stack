// la Definition de type en typeScript 
var user = {
    name: "John Doe",
    id: 123,
};
// on peut declare une variable de type User
// ceci ne pas possible et renvoie une erreur
// const user2: User = {
//   username: "Jane Doe",
//   id: 234,
// }
var user2 = {
    name: "Jane Doe",
    id: 234,
};
console.log(user2);
// declaration d'interface avec une classe
// interface User {
//   name: string;
//   id: number;
// }
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user5 = new UserAccount("John Doe", 123);
console.log(user5);
// Vous pouvez utiliser les interfaces pour annoter les types de paramètres et valeurs de retour de fonctions
function getAdminUser() {
    return {
        name: "Admin",
        id: 1,
    };
}
// function removeUser(user: User): User {
//   return user;
// }
console.log(getAdminUser());
// Les unions fournissent également une manière de gérer les types hétérogènes. 
// Par exemple, vous pouvez avoir une fonction qui accepte un array ou
//  un string Les unions fournissent également une manière de gérer les types hétérogènes. 
// Par exemple, vous pouvez avoir une fonction qui accepte un array ou un string 
function getLength(x) {
    return x.length;
}
console.log(getLength("Hello")); // 5
// Type	Condition
// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)
// les Types generiques
// TypeScript vous permet de créer des types génériques.
// Les types génériques sont des types qui peuvent être utilisés avec n’importe quel type de valeur.
// Ils sont souvent utilisés pour créer des fonctions ou des classes qui peuvent fonctionner avec différents types de données.
// Par exemple, vous pouvez créer une fonction qui prend un tableau de n’importe quel type et retourne le premier élément du tableau :
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3])); // 1
