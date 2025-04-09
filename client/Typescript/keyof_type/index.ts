// L'opérateur keyof prend un type d'objet et produit une union littérale, sous forme de chaîne ou de nombre, de ses clés. Le type P suivant est identique à « x » | « y »

type Point2D = {
  x: number;
  y: number;
};

type P = keyof Point2D; // "x" | "y"