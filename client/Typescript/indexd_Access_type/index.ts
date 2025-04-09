
// Nous pouvons utiliser un type d’accès indexé pour rechercher une propriété spécifique sur un autre type :
type Person = {
  age: number;
  name: string;
  id: string;
}

type Age = Person["age"]; // number

// Le type d'indexation est lui-même un type, nous pouvons donc utiliser des unions, keyof ou d'autres types entièrement :


type I2 = Person["age" | "name"];

// type I2 = number | string

type nameOrId = "name" | "id";

type I3 = Person[nameOrId];