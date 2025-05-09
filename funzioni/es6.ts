function calcolaAreaRettangolo(base: number, altezza: number): number {
    
    let calcolo = ( base * altezza ) / 2;
    return calcolo;
};

function eQuadrato(base, altezza): boolean {

    return true;
}

console.log(`L'are de rettangolo è ${calcolaAreaRettangolo(5,6)}.\nL'area del quadrato è ${eQuadrato}`);