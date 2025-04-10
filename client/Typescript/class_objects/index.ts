
class Maison {
  surface: number = 23;
  nombreChambres: number = 34;
}

console.log(new Maison());


console.log(new Maison().surface);

console.log(new Maison().nombreChambres);

const maison:Maison = new Maison();


maison.surface = 45;

maison.nombreChambres = 67;


console.log(maison.surface);

console.log(maison.nombreChambres);

class Jardin {
  name: string;
  surface!: number;

  constructor(name: string, surface: number = 0) {
    this.name = name;
    this.surface = surface;
  }

}


let jardin:Jardin = new Jardin("maroua complexe de domayo");


console.log(jardin.name);
console.log(jardin.surface);

class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}