import Impuestos from "./impuestos.js";
import Cliente from "./cliente.js";

let impuesto1 = new Impuestos(210400, 2001);
let cliente1 = new Cliente("Fruna", impuesto1);

console.log(cliente1.calcularImpuesto());
