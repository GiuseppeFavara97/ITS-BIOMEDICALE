import inquirer from 'inquirer';

async function main() {
    const risposta = await inquirer.prompt([
        {
            type: 'input',
            name: 'temperatura',
            message: 'Inserisci la temperatura: '
        }
    ]);

    if(risposta.temperatura > 30){
        console.log('Fa caldo');
    }else if(risposta.temperatura < 10){
        console.log('Fa freddo');
    }else console.log('Temperatura ideale');
    
}

main();