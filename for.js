//1.Print numbers 1 to 10 using a for loop.
var numbers = 10;
for(let numbers = 1; numbers <= 10; numbers++){
    console.log(numbers);
}

//2.Print even numbers from 2 to 20.
var num = 20;
for(i = 2; i <= num; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//3.Print the multiplication table of 7 (1x7 to 10x7).
for(i = 1; i <= 10; i++){
    console.log(i + " X 7 = " + (i*7));
}

//4.Sum all numbers from 1 to 50 using a for loop.
var sum = 0;
for (var i = 1; i <= 50; i++){
    sum = sum + i;
    console.log(sum);
}

//5.Print the reverse of numbers from 10 down to 1.
for (var i = 10; i >= 1; i--){
    console.log(i);
}

//6.Print all multiples of 3 between 1 and 50.
for(var i = 1; i <= 50; i++){
    if(i%3 == 0){
        console.log(i);
    }
}

//7.Find the factorial of a given number using a for loop.
var fact = 1;
for(var i = 1; i <= 5; i++){
    fact = fact*i;
    console.log(fact);
}

//8.Print all elements of an array using a for loop.
var vegetables = ["carrot", "potato", "cabbage", "capsicum", "beetroot"];
for(var i = 0; i < 5; i++){
    console.log(vegetables[i]);
}