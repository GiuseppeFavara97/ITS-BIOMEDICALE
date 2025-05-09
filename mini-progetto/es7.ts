import inquirer from 'inquirer';

async function main() {
    const risposta = await inquirer.prompt([
        {
            type: 'input',
            name: 'nome',
            message: 'Inserisci il tuo nome: '
        },
        {
            type: 'imput',
            name: 'eta',
            message: 'Iserisci la tua età: '
        }

    ]);

    let nome: string = risposta.nome;
    let eta: number = risposta.eta

    function checkAge(nome, eta){
        
        if(eta >= 18){
            console.log(`L'utente ${nome} è maggiorenne.`);
        }else{
            console.log(`L'utente ${nome} è minorenne.`)
        };
    }
   checkAge(nome,eta);
   const risposta2 = await inquirer.prompt([
    {
        type: 'input',
        name: 'numero',
        message: 'Inserisci un numero: '
    }
]);

let number: number = risposta2.numero;

function stampNumbers(number){

    for(let i = 1; i <= number; i ++){

        if(i > 10){
            if(i % 2 == 0){
                console.log( i + 'è pari.');
            }else{
                console.log( i + ' è dispari.');
            }; 
        }else{
            console.log(i);
        };
    }
};
stampNumbers(number);

}

main();