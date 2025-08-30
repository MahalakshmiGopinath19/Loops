
//while loop:
//1:

var totalBooks = 25;
while (totalBooks < 30){
    totalBooks = totalBooks + 50;
}
console.log("Books are restocked,now the remaining books we have: " +totalBooks);

//2:

var patients = 1;
while(patients > 0){
    if(patients <= 10){
        console.log("patient " +patients + " explaining their problems to doctor");
        patients++;
}
else{
    break; 
}
}
