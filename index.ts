const readlineSync = require('readline-sync'); 


const addition = () => {
    const arg1 = +readlineSync.question('Please, enter argument 1: ');
    const arg2 = +readlineSync.question('Please, enter argument 2: ');
    console.log('addition of A and B =', arg1 + arg2);
}

const subtraction = () => {
    const arg1 = +readlineSync.question('Please, enter argument 1: ');
    const arg2 = +readlineSync.question('Please, enter argument 2: ');
    console.log('subtraction of A and B =', arg1 - arg2);
}

const multiplication = () => {
    const arg1 = +readlineSync.question('Please, enter argument 1: ');
    const arg2 = +readlineSync.question('Please, enter argument 2: ');
    console.log('multiplication of A and B =', arg1 * arg2);
}

const division = () => {
    const arg1 = +readlineSync.question('Please, enter argument 1: ');
    const arg2 = +readlineSync.question('Please, enter argument 2: ');
    console.log('division of A and B =', arg1 / arg2);
}

const operations = [                                  
    {name: 'Addition', function: addition},
    {name: 'Subtraction', function: subtraction},
    {name: 'Multiplication', function: multiplication},
    {name: 'Division', function: division},
];

const app = (userName) => {                      
    
    let goExit = false;        

    while (goExit === false) {        
        
        console.log(`OK, ${userName}, please, select the number of the desired operation: `);  
        for (let i = 0; i < operations.length; i++) {       
            console.log(`${i + 1}. ${operations[i].name}`);  
        }
        console.log('0. Exit');                            
        const operationIndex = +readlineSync.question('operation number: ') - 1; 

        if (operationIndex === -1) {          
            goExit = true;            
        } else if (operationIndex >= 0 && +operationIndex < operations.length) {      
            operations[operationIndex].function();    
        } else {
            console.log(`Please, enter correct number`); 
        }
    }
    
    console.log(`Good bye, ${userName}`); 
   
}

const userName = readlineSync.question('Hello! Please, type in your name:');   

app(userName);  
