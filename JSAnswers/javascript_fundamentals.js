/*Let maxNumber represent the biggest number, set it to zero to start
While there are still numbers left in the list
	Look at the next number in the list
	Compare it to the maxNumber
		If next number is smaller than maxNumber
			Set maxNumber to that number
Report maxNumber as the biggest in the list

Answer 
a)we are looking for the maxNumber form list of numbers in our array, the next number smaller tahn max is not the maxNumber,the number>maxNumber is.  
  b) we need to find the largest number from the rest of the list we need to compair every number in the list with maxNumber.

*/

/*Step 1
Create two variables called "num1" and "num2". Assign each variable a different numerical value between 1 and 15.
*/
let num1 = 10;
let num2 = 7;
/*
Step 2
Using the variables above, add these variables together and multiply by 3. 
Assign the expression to a variable called "result" and console.log its value. 
*/
let result = (num1 + num2) * 3;
console.log(result);
/*
Step 3
Using the result variable, write an if/else statement comparing the result to the number 50.
If the result is larger than 50, console.log "Result is bigger". 
If it is smaller, console.log "Result is smaller"
*/
if (result > 50) {
  console.log("result is bigger");
} else {
  elseconsole.log("result is smaller");
}

/*
Arrays & Loops
Step 1
Create an empty array and assign it to a variable called "numberList".
*/
let numberList = [];
/*
Step 2
Using a for loop, place the numbers from 0 to 5 into the "numberList" array.
console.log the numberList array.
*/
numberList = [0, 1, 2, 3, 4, 5];
console.log(numberList);
/*
Step 3
Remove the last number in the array and console.log the array.
*/
let numberList = [0, 1, 2, 3, 4];
console.log(numberList);
