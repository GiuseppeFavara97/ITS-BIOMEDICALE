var Libro = /** @class */ (function () {
    function Libro(titolo, autore) {
        this.disponibile = true;
        this.titolo = titolo;
        this.autore = autore;
    }
    Libro.prototype.prendiInPrestito = function () {
        this.disponibile = false;
    };
    Libro.prototype.restituisci = function () {
        this.disponibile = true;
    };
    Libro.prototype.stato = function () {
        return this.disponibile ? 'è disponibile' : 'non è disponibile';
    };
    return Libro;
}());
var libro1 = new Libro('1984', 'George Orwell');
var libro2 = new Libro('Il nome della rosa', 'Umberto Eco');
console.log("Il libro ".concat(libro1.titolo, " dell'autore ").concat(libro1.autore, ", ").concat(libro1.stato()));
console.log("Il libro ".concat(libro2.titolo, " dell'autore ").concat(libro2.autore, ", ").concat(libro2.stato()));
libro1.prendiInPrestito();
libro2.prendiInPrestito();
console.log("Il libro ".concat(libro1.titolo, " dell'autore ").concat(libro1.autore, ", ").concat(libro1.stato()));
console.log("Il libro ".concat(libro2.titolo, " dell'autore ").concat(libro2.autore, ", ").concat(libro2.stato()));
libro1.restituisci();
libro2.restituisci();
console.log("Il libro ".concat(libro1.titolo, " dell'autore ").concat(libro1.autore, ", ").concat(libro1.stato()));
console.log("Il libro ".concat(libro2.titolo, " dell'autore ").concat(libro2.autore, ", ").concat(libro2.stato()));
