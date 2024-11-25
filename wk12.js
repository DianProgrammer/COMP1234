document.write('<div style="position: absolute; bottom: 10px">');
document.write('<h1>KIANA SEPASIAN  | 101475855</h1> ');
document.write('<p>copyright <span style="font-weight: bold">2024</span></p>');
document.write('</div>');


let a=[8,5,6,7,1,4,2,9,0,8,5,6,1,2];
a[14]=7;
a[15]=2;
a[16]=8;

let i=0;

let total=0;
let c=1, b=2;
let operation=prompt(' \n1. + \n2. - \n3. * \n4. /');
if (operation == 1){
    total = c+b;
    operation='+';
}else if(operation == 2){
    total=c-b;
    operation='-';

}

document.write(`${c} ${operation} ${b} = ${total}`);

