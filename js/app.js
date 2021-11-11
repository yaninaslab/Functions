// Function 3
// Let's define a function that is checking every element of an array and return the element that starts with "ph".
function starts_with_ph(arry){
    var i = 0; 
    while(i < arry.length) {

        if(arry[i].startsWith("ph")) {
            return arry[i];
        }
        i++;
    }
   }



// Function 1
// We set the function with 2 integers to call it later in the code
function calculation(num1, num2) {
    var result = (num1 + num2)*5;
    return result
}
// We assign a variable to this function
var result_number = calculation(3,5);
// We print out the value of the return
console.log(result_number);

// Function 2
// Let's set a variable for this function
var s = "string";
// This is the function itself with a condition that if string's length is greater than 10, the function will return true;
// If the string is less than 10, the function will return false;
function number_of_letters(s) {
    if(s.length > 10) {
        return true;
    }else {
        return false;
    }

}
// Here we call a function with using a different string length
number_of_letters("dgdgrggfgffgffdfd");

// Function 3

// This is array for function 3
var words = ["lamp", "rain", "photo"];
// Here we call the function 3
starts_with_ph(words);