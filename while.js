//1.Print numbers from 1 to 10 using a while loop.
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

//2.Print the sum of all odd numbers from 1 to 50.
var i = 1;
var num = 0;
while(i <= 50){
    if((i % 2) != 0){
       num = num + i;
    }
    i++;   
}
console.log(num);

//3.Calculate the factorial of a number using a while loop.
var i = 1;
var fact = 1;
while(i <= 5){
    fact = fact*i;
    i++;
}
console.log("factorial of 5 is: " + fact);
