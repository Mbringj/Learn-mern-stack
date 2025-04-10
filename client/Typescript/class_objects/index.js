var Maison = /** @class */ (function () {
    function Maison() {
        this.surface = 23;
        this.nombreChambres = 34;
    }
    return Maison;
}());
console.log(new Maison());
console.log(new Maison().surface);
console.log(new Maison().nombreChambres);
var maison = new Maison();
maison.surface = 45;
maison.nombreChambres = 67;
console.log(maison.surface);
console.log(maison.nombreChambres);
var Jardin = /** @class */ (function () {
    function Jardin(name, surface) {
        if (surface === void 0) { surface = 0; }
        this.name = name;
        this.surface = surface;
    }
    return Jardin;
}());
var jardin = new Jardin("maroua complexe de domayo");
console.log(jardin.name);
console.log(jardin.surface);
