/*
	A recursive function that adds two strings containing 
	numbers larger than 53-bits. Normal Javascript arithmetic 
	doesn't work so we have to convert each string into an array 
	then use the normal addition method of adding and carrying 
	to find the sum. 
*/

const addLargeNumbers = (a,b,carry = 0,sum ='') => {

	// If there are no more numbers in either array 
	// then return the final result with any leading zeros stripped 
	if(!(a.length || b.length || carry)) return sum.replace(/^0+/,''); 
	
	// Convert each string in to an array using ES6's spread operator. 
	let sA = [...a];
	let sB = [...b];
	
	// Remove the last digits from the array, 
	// convert them to numbers, and add them together.
	// If carry equals true then 1 is added to the final result.
	carry = carry + (~~sA.pop() + ~~sB.pop());
	
	// Find the remainder of the sum and
	// add it to the final string.
	sum = carry % 10 + sum;
	
	// Set carry to true if the sum is greater than 9.
	carry = carry > 9;
	
	// Convert each array back into a string and also pass carry and sum as parameters. 
	return addLargeNumbers(sA.join(''), sB.join(''), carry, sum);
	
}
let sum = addLargeNumbers('798723498273489237849239423479234792347928374928347293479823748','9192734623649812634812634871236481723648912364812364');
document.getElementById('sum').innerHTML = `The sum is ${sum}`;
