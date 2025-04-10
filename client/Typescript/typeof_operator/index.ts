console.log(typeof "my string");

// converti et affiche le type de la variable

let s = "my string";

let n: typeof s = s;

// n===s

// Ce n'est pas très utile pour les types de base, mais combiné avec d'autres opérateurs de type, vous pouvez utiliser typeof pour exprimer de manière pratique de nombreux modèles. À titre d'exemple, commençons par examiner le type prédéfini ReturnType<T>. Il prend un type de fonction et produit son type de retour :4

type Predicate = (x: unknown) => boolean;

type K = ReturnType<Predicate>;

function f() {

  return {
    x: 10,
    y: 15
  }
}


type PS = ReturnType<typeof f>;


function fs() {

  return {
    x: 10,
    y: 15
  }
}

type PT = ReturnType<typeof fs>;
// P est de type { x: number; y: number; }

// let shouldContinue: typeof msgbox("Are you sure you want to continue?");

// Un autre exemple d'indexation avec un type arbitraire 
// consiste à utiliser number pour obtenir le type des éléments d'un tableau. 
// Nous pouvons combiner cette méthode avec typeof pour capturer facilement 
// le type d'élément d'un littéral de tableau

const MyArray = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 40 }
]

type MyArrayType = typeof MyArray[number];

type Ages = typeof MyArray[number]["age"]; // number

type Age2 = Person["age"]; // number

// Nous pouvons également utiliser typeof pour capturer le type d'une fonction.

type key = "age";
type Age = Person[key];