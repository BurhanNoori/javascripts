let input = document.getElementById('inputScreen'),
    buttons = document.querySelectorAll('button'),
    output = document.getElementById('outputScreen');
 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        
        let buttonText = e.target.innerText;

        switch (buttonText) {
            case 'BCKSP':
                input.value = input.value.substring(0, input.value.length - 1);
                break;
            case 'sqrt':
                output.value = Math.sqrt(+input.value);
                break;
            case 'sin':
            case 'cos':
            case 'tan':
            case 'ln':
            case 'log':
            case 'mod':
            case 'pi':
            case 'P':
            case 'C':
            case '=':
            case '+':
                output.value="";
                input.value += buttonText;
                input.value.split("+")
                break;
            case '-':
                input.value += buttonText;
                break;
            case '*':
                input.value += buttonText;
                break;
            case '/':
                input.value += buttonText;
                break;
            case '%':
                input.value += buttonText;
                break;
            case '^':
            case '.':
            case 'e':
            case 'e^x':
            case 'deg':
            case 'rad':
            case '1/x':
            case '(':
            case ')':
            case '!':
            break;
            default: 
            input.value += buttonText;
            //console.log(inputValue);
        }
    });

})