function part1(){
    // Start your code here for first part. There is no need to return any value.
    document.write('<div style="margin-left: 750px; margin-bottom: 30px; position: fixed; top: 650px;">');
    let StudentID ='101475855';
    document.write(`<strong>Student ID : </strong>${StudentID}`);
    let FullName = 'Kiana Sepasian';
    document.write('<span style="padding-left: 10px">');
    document.write(`<strong>Full Name : </strong>${FullName}`);
    document.write('</span>');
    let LabProfessor = 'Professor Leonard Zajaczkowski';
    document.write('<div>');
    document.write(`<strong>Lab Professor : </strong>${LabProfessor}`);
    let LabSession = 'Wednesday';
    document.write('<span style="padding-left: 10px">');
    document.write('<strong>Lab Session : </strong>' + LabSession);
    document.write('</span>');
    document.write('</div>');
    document.write('</div>');
    let encodedID = '';
    let encodedName = '';
    let encodedLab = '';
    let encodedSession = '';
    let i = 0;
    let x = 0;
    let y = 0;
    let z = 0;

    while (i < StudentID.length) {
            let char = StudentID[i];


            encodedID += String.fromCharCode(char.charCodeAt(0) + 1);

            i++;
    }

    while(x < FullName.length){

        let char1 = FullName[x];

        encodedName += String.fromCharCode(char1.charCodeAt(0) + 1);
        x++;
    }


    while (y < LabProfessor.length){
        let char2 = LabProfessor[y];

        encodedLab += String.fromCharCode(char2.charCodeAt(0) + 1);

        y++;

    }


    while(z < LabSession.length ){
        let char3 = LabSession[z];

        encodedSession += String.fromCharCode(char3.charCodeAt(0) + 1);

        z++;
    }
    document.write('<div style="margin-left: 750px; margin-bottom: 30px; position: fixed; top: 700px;">');
    document.write(`<strong>Encoded Student ID : </strong>${encodedID}`);
    document.write('<span style="padding-left: 10px">');
    document.write(`<strong>Encoded Full Name : </strong>${encodedName}`);
    document.write('</span>');
    document.write('<div>');
    document.write(`<strong>Encoded Lab Professor : </strong>${encodedLab}`);
    document.write('<span style="padding-left: 10px">');
    document.write(`<strong>Encoded Lab Session : </strong>${encodedSession}`);
    document.write('</span>');
    document.write('</div>');
    document.write('</div>');

}


function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    num1=num1 + 5;
    num2=num2 - 3;
    if (num1 === num2 ) {
        _return = 0;
    }else if (num1 < num2 ) {
        _return = -1;
    }else
        _return = 1;
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part3(startNum, endNum) {
    let _return = '';
    let sum = 0;

    if (startNum < endNum) {
        while (startNum <= endNum) {
            _return += startNum;
            sum += startNum;
            startNum++;
        }
    } else if (startNum > endNum) {
        while (startNum >= endNum) {
            _return += startNum;
            sum += startNum;
            startNum--;
        }
    } else {
        sum = startNum + endNum;
        _return = `${sum}`;
    }

    if (sum % 3 === 0) {
        _return = `Magic${_return}`;
    }

    /* Your code ends here.
       Don't add or change anything after this line.*/
       return _return;      
}




function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (array_index >= 0 && array_index < array.length) {
        if (array[array_index] === 0) {
            _return = true;
        } else if (array[array_index] % 2 === 0) {
            let sum = 0;
            let i = 0;
            while (i < array_index) {
                sum += array[i];
                i++;
            }
            _return = sum;
        } else {
            let sum = 0;
            let i = array_index + 1;
            while (i < array.length) {
                sum += array[i];
                i++;
            }
            _return = sum;
        }
    }
    else
        _return = false;

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here


    let sumODD = 0;
    let sumEVEN = 0;

    let oddNumbers = [];
    let evenNumbers = [];

    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            evenNumbers = evenNumbers.concat(array[i]);
            sumEVEN += array[i];
        } else {
            oddNumbers = oddNumbers.concat(array[i]);
            sumODD += array[i];
        }
        i++;
    }

    let result = oddNumbers.concat(evenNumbers);
    result = result.concat(sumODD);
    result = result.concat(sumEVEN);

    return result;

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


