let input= document.getElementById('input-bar');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            // Handle equals button click
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            // Handle clear button click
            string = '';
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            // Handle delete button click
            string = string.slice(0, -1);
            input.value = string;
        }

        else if(e.target.innerHTML == '%'){
            // Handle percentage button click
            string = eval(string) / 100;
            input.value = string;
        }

        else if(e.target.innerHTML == '/'){
            // Handle division button click
            string += '/';
            input.value = string;
        }

        else if(e.target.innerHTML == '*'){
            // Handle multiplication button click
            string += '*';
            input.value = string;
        }

        else if(e.target.innerHTML == '-'){
            // Handle subtraction button click
            string += '-';
            input.value = string;
        }

        else if(e.target.innerHTML == '+'){
            // Handle addition button click
            string += '+';
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
