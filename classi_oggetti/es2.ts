class Libro{
    titolo: string;
    autore: string;
    disponibile: boolean = true;

    constructor(titolo: string, autore: string){
        this.titolo = titolo;
        this.autore = autore;
    }

    prendiInPrestito(): void{
        this.disponibile = false;
    }

    restituisci(): void{
        this.disponibile = true;
    }

    stato(): string{
       return this.disponibile ? 'è disponibile' : 'non è disponibile';
    }

    
}

 const libro1 = new Libro('1984','George Orwell');
 const libro2 = new Libro('Il nome della rosa','Umberto Eco');

console.log(`Il libro ${libro1.titolo} dell'autore ${libro1.autore}, ${libro1.stato()}`);
console.log(`Il libro ${libro2.titolo} dell'autore ${libro2.autore}, ${libro2.stato()}`);

libro1.prendiInPrestito();
libro2.prendiInPrestito();

console.log(`Il libro ${libro1.titolo} dell'autore ${libro1.autore}, ${libro1.stato()}`);
console.log(`Il libro ${libro2.titolo} dell'autore ${libro2.autore}, ${libro2.stato()}`);

libro1.restituisci();
libro2.restituisci();

console.log(`Il libro ${libro1.titolo} dell'autore ${libro1.autore}, ${libro1.stato()}`);
console.log(`Il libro ${libro2.titolo} dell'autore ${libro2.autore}, ${libro2.stato()}`);
