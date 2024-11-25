
document.write('Hello');

let name= "Bruce";
var Name ='Wayne';

console.log(name);
console.log(Name);

const STUDENT_ID='100100100';
const PI=3.14;

let btname=`Sue`;
let firstName='Md';
console.log(btname);
console.log(firstName);
console.log(PI);


firstName=56;
console.log(firstName);



let a=5;
let b='Hello';
let c=true;
let d = null;
let e;

console.log('5+6');
console.log(5+6);

a=6;
b=7;
console.log(a+b+4);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);



let total=a+b+4;
console.log(a+b+4);
console.log(total);

document.write('<br> Leo is a teacher.');
document.write('<br>' + ' Leo is'+' a teacher.');

let s1="Hello";
let s2="World!";
let s3='<br>';

console.log(s1+s2);
console.log(s1+' '+s2);

document.write(s3+s1+" "+s2+ " great to see you!");
document.write('<p>'+s1+" "+s2+ " great to see you!</p>");

let s4=s3+s1+" "+s2+ " great to see you!";
document.write(s4);

s4=`${s3}${s1} ${s2} great to see you!`

let i=5;
let s6='5';

document.write(s3);
document.write(i+s6); //10 or 55 = 55

document.write(s3);
document.write(i*s6);

document.write(s3);
document.write('s'*s6);

document.write(s3);
document.write(i+parseInt(s6));



let num=parseFloat(prompt('Enter a number:'));
document.write(s3);
document.write(num+num);

let flag=confirm('Do you want a drink?');
document.write(s3);
document.write(flag);
if (flag == true)
    document.write('<br> OK, here is your drink.');
if (flag == false)
    document.write('<br> OK, be that way. No Drink for you.');
