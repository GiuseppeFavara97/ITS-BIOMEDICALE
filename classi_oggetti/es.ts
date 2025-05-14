class Animale{
    nome: string;

    constructor(nome: string,){
        this.nome = nome;
    };

    versoAnimale(): void {

        switch(this.nome){

            case 'Mucca':
                console.log('Muuu');
                break;
            case 'Pecora':
                console.log('Beee');
                break;
        }
        
    };

};
const animale1 = new Animale('Mucca');
animale1.versoAnimale;
