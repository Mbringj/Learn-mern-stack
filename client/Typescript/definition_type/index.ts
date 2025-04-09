
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

// ceci ne pas possible et renvoie une erreur

// const user2: User = {
//   username: "Jane Doe",
//   id: 234,
// }

const user2: User = {
  name: "Jane Doe",
  id: 234,
}


console.log(user2);


// declaration d'interface avec une classe

// interface User {
//   name: string;
//   id: number;
// }

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user5: User = new UserAccount("John Doe", 123);

console.log(user5);


// Vous pouvez utiliser les interfaces pour annoter les types de paramètres et valeurs de retour de fonctions

function getAdminUser(): User {

  return {
    name: "Admin",
    id: 1,
  };
}

// function removeUser(user: User): User {
//   return user;
// }

console.log(getAdminUser());
// console.log(removeUser(user4));

// les type supplementaires en typescript

// JavaScript fournit déjà
//  un petit ensemble de types primitifs, 
// dont vous pouvez vous servir 
// dans une interface : boolean, bigint, null, number, string, symbol, et undefined. 
// TypeScript étend cette liste en y ajoutant 
// any (tout permettre), 
// unknown (s’assurer que quiconque se sert de ce type déclare le type voulu), 
// never (il est impossible d’avoir ce type), 
// et void (une fonction qui retourne undefined ou ne retourne rien).


// Composition de Types

// Unions
// TypeScript vous permet de combiner plusieurs types en un seul type.

type MyBool = true | false;

// Un usage populaire des types union est de décrire les ensembles
//  de string ou number acceptables en tant que valeurs

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Les unions fournissent également une manière de gérer les types hétérogènes. 
// Par exemple, vous pouvez avoir une fonction qui accepte un array ou
//  un string Les unions fournissent également une manière de gérer les types hétérogènes. 
// Par exemple, vous pouvez avoir une fonction qui accepte un array ou un string 

// function getLength(x: string | string[]): number {
//   return x.length;
// }

// console.log(getLength("Hello")); // 5


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

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3])); // 1

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithName = Array<{ name: string}>

// Vous pouvez utiliser les types génériques avec vos propres types :

interface Backpack<T> {
  add: (item: T) => void;
  get: () => T;
}

declare const backpack: Backpack<string>;

interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// affiche "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // affiche "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // affiche "33, 3"
 
const color = { hex: "#187ABF" };
logPoint(color);

class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // affiche "13, 56"