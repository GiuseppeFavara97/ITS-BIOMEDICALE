import inquirer from 'inquirer';

async function main() {
    const risposta = await inquirer.prompt([
        {
            type: 'input',
            name: 'maxNumber',
            message: 'Inserisci il numero massimo: '
        }
    ]);
    for(let i = 1; i <= risposta.maxNumber; i ++){

        if(i % 2 == 0){
            console.log(i);

        }
    }
}

main();