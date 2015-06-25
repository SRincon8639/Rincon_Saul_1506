/*
Saul Rincon
06/18/2015
Conditionals Assignment
*/


//Math Section
var myMultiplication=prompt("What is the answer to 12 times 4");
console.log(myMultiplication)//console log will display the answer in multiplication
var myAddition=prompt("What is the answer to 34 plus 17");
console.log(myAddition);//console log will display the answer in addition



//If and else statement Section
var myAmmo=100
//If myAmmo is greater than 99, I can go to the range. If it is not, then I cant shoot today.

if(myAmmo >99){console.log("Going to the Range!!");
}
else{
	console.log("No shooting for you today");
}

var myExpertScore=40;
//if I shoot better than 40 or 40, then I will get an expert score. If I shot less than 40, I will not get expert score
if(myExpertScore>=40){
	console.log("You have qualified expert score!");
}
else{
	console.log("You need to try harder!");
}



//1 ternary  statement section
var myKids=3;//if myKids is less that 2, then I will be able to sleep. If not, I will never be able to sleep

(myKids<2) ? console.log("I can sleep!") : console.log("I will never sleep!");



//1 Logical Operator Section
var myBankAccount=20;
var myNewGun=500;
var myCurrentCash=600;

//if myNewgun is less than myCurrentcash and myBankAccount is less than 20, I need to make more money.
if(myNewGun<myCurrentCash && myBankAccount>20){
		console.log("We can get the new Glock 34!")
}else{
	console.log("Make more money!!");

}

