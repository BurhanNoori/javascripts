const input = document.getElementById('inputScreen'),
    numbers = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator');
    output = document.getElementById('outputScreen');
 

numbers.forEach(number=>{
    number.addEventListener('click', (e)=>{
        input.value+=e.target.innerText;
        const value = input.value;
        Array.from(value).forEach(char=>{
            console.log('char ', char);
            if (char==='+' || char ==='-' || char === '*' || char === '/' || char === 'm'){
                const operatorIndex = value.indexOf(char);
                const number1 =  +value.slice(0,operatorIndex);
                const number2 = +value.slice(operatorIndex + 1);
                const operator = char;
                output.value = compute(number1, number2, operator);
                return
                
            }
        })
    })
})

operators.forEach(operator=>{
    operator.addEventListener('click', (e)=>{
        if(output.value) input.value = output.value;


        lastChar = input.value.slice(-1);
        
        if(lastChar===e.target.innerText) return;
        if(isNaN(+lastChar)) {
            
            input.value=input.value.replace(lastChar, operator.innerText);
            return;
        }
   
        input.value+=e.target.innerText;



    });
})


const compute = function(number1, number2, operator){
    if(number1===undefined || number2===undefined || operator===undefined) return;
    switch (operator) {

        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        case 'm':
            return number1 % number2;
        default:
            return
    }
}
