//Date Prototype


let fecha = new Date(1995, 9, 31, 23);

Date.prototype.sumarDias = function (dias) {
    this.setDate( this.getDate() + dias);
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(5));