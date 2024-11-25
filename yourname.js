
let total=0;

let operation=prompt('\nMenu \n1. + \n2. - \n3. * \n4. /')
let num1=parseInt(prompt('Please enter the first number: '));
let num2=parseInt(prompt('Please enter the second number: '));

if (operation == 1) {
    operation='+'
    total=num1 + num2
}else if (operation == 2) {
    operation='-'
    total=num1 - num2
}else if (operation == 3) {
    operation='*'
    total=num1 * num2
}else if (operation == 4) {
    operation='/'
    total=num1 / num2
}
document.write('<div style="margin-left: 60px; font-size: 25px" >')
document.write(`<strong>${num1} ${operation} ${num2} = ${total}</strong>`);
document.write('</div>');

