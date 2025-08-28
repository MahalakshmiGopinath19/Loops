//1. Print numbers 1 to 10 using a do-while loop.
var number = 1;
do{
    console.log(number);
    number++;
}
while(number<=10);

//2. Keep asking the user to enter a number until they enter 0.
let number = 9; 
do {
    if (number != 0) { 
        console.log("enter a valid number");  
    } else {
        console.log(number);
    }
    break;
}
while (number == 0);

//3.Print the multiplication table of a number entered by the user using do-while.
var number = 5;
var i = 1;
do{
    console.log(number + " X " + i + " = " + (number * i));
    i++;
}
while(i <= 12);

//5.Display all numbers divisible by 5 from 1 to 50 using do-while.
var number = 1;
do{

    if(number % 5 == 0){
        console.log(number);
    }
     number++;
}
while(number <= 50);