 //While loop 1 to 10

let i = 1, j = 10;  

while (i <= 10) {
    
    console.log(i);
    i++;
    
}

//While loop 10 to 1

while (j >= 1) {
    
    console.log(j);
    j--;
    
}

//for loop 5 to 15

for (let k = 5; k <= 15; k++){
    console.log(k);
}

//for 15 to 10

for (let l = 15; l >= 10; l--){
    console.log(l);
} 

//1 to 10 Even no.

let i = 2, j = 10;

while (i <= 10) {
    
    console.log(i);
    i += 2;
    
}

//1 to 10 Odd No.

let odd_no = 1;

while (odd_no <= 10) {
    
    console.log(odd_no);
    odd_no += 2;
    
}

let multi = 0;


while (multi< 40) {
    multi += 4;
    console.log(multi);
    
   
    
}

//Multiple of 6

let multi6 = 0;


while (multi6< 60) {
    multi6 += 6;
    console.log(multi6);
    
   
    
}

//Factors of 24

let fact = 1;

while (fact <= 24) {
    if (24 % fact == 0) {
        console.log(fact);  
        
    }
    fact++;
}



//Fibonacci of 17

let t1 = 0, t2 = 1, nextTerm = 0;

for (let fibo = 1; fibo <= 17; fibo++){
    if (fibo == 1) {
        console.log(t1);
    }
    if (fibo == 2) {
        console.log(t2);
    }

    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;

    console.log(nextTerm);

}
