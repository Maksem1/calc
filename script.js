let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.' ];
const action = ['-', '+', '*', '/'];

const out = document.querySelector('.calc__screen p');
function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    
}

document.querySelector('.calc__button__ac').onclick = clearAll();

document.querySelector('.calc__buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('calc__button')) return;
    // нажата очистка
    if(event.target.classList.contains('calc__button__ac')){
        clearAll() 
    }
    // очистка экрана
    out.textContent = '';
    // получаю нажатаю кнопку
    const key = event.target.textContent
    // для цифр
    if (digit.includes(key)) {
        if (sign == ''){
        a += key;
        out.textContent = a;
        }
        else if (finish){
            b = key;
            finish = false;
            out.textContent = b

        }
        else {
            b += key;
            out.textContent = b;
        }
    }
    // для знаков
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
    }
    // если нажато равно
    if (key == '='){
        if (b == '') {b = a};
        switch (sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}
