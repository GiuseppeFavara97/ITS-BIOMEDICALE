var Animale = /** @class */ (function () {
    function Animale(nome) {
        this.nome = nome;
    }
    ;
    Animale.prototype.versoAnimale = function () {
        switch (this.nome) {
            case 'Mucca':
                console.log('Muuu');
                break;
            case 'Pecora':
                console.log('Beee');
                break;
        }
    };
    ;
    return Animale;
}());
;
var animale1 = new Animale('Mucca');
animale1.versoAnimale;
