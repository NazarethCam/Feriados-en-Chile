export default class cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
  calcularImpuesto() {
    let resultado =
      (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;

    return `El impuesto a pagar es ${resultado}`;
  }
}
