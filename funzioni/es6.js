function calcolaAreaRettangolo(base, altezza) {
    var calcolo = (base * altezza) / 2;
    return calcolo;
}
;
function eQuadrato(base, altezza) {
    return true;
}
console.log("L'are de rettangolo \u00E8 ".concat(calcolaAreaRettangolo(5, 6), ".\nL'area del quadrato \u00E8 ").concat(eQuadrato));
