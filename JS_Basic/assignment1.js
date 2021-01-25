// 1-------------Divisble by 7-------------

let number = 343;

if (number % 7 == 0) {
    console.log('Number is Divisble by 7');
    
}
else {
    console.log('Number is not divisible by 7')
}

// 2-------------Multiple of 3-------------


if (number % 3 == 0) {
    console.log('Number is Multiple of 3');
    
}
else {
    console.log('Number is not Multiple of 3')
}

//3-------------Positive Or Negtive-------------

if (number > 0) {
    console.log('Number is Positive');
    
} else {
    console.log('Number is Negative');
    
}

//4-------------Number is having 4 at unit place-------------

if (number % 10==4) {
    console.log('4 is on Units place');
    
} else {
    console.log('4 is not on Units place');
}

//5-------------Number is 3 digit no. or not-------------

if (number >= 100 && number <= 999) {
    console.log('Number is 3 Digit No.');
    
} else {
    console.log('Number is not a 3 Digit No.');
}

//6-------------Even or Odd-------------

if (number%2==0) {
    console.log('Number is Even');
    
} else {
    console.log('Number is Odd');
}

//7 -------------Greater Number in given two  number-------------

let num1 = 1000;
let num2 = 200, num3 = 50;


(num1 > num2) ? console.log(num1, 'is greater than Number',num2 ) : console.log(num2, 'is greater than Number',num1);


//8 -------------Print the Least Number-------------

(num1 > num2) ? console.log(num2) : console.log(num1);

// 9-------------Greater Number in given three number-------------

if (num1 > num2 && num1 > num3) {
    console.log('Number 1 is greater');
    
}
else if (num2 > num3) {
    console.log('Number 2 is greater');
}
else {
    console.log('Number 3 is greater');
}

// 10-------------Least Number in given three number-------------

if (num1 < num2 && num1 < num3) {
    console.log('Number 1 is least number');
    
}
else if (num2 < num3) {
    console.log('Number 2 is least number');
}
else {
    console.log('Number 3 is least number');
}


//11-------------Ascending Order-------------

let values = [45, 3, 21];

values.sort(function (a, b) { return (a - b); });

console.log(values);

//12-------------Descending Order-------------

values.sort(function (a, b) { return (b - a); });

console.log(values);




