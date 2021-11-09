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
number_of_letters("dgdgr");

// Function 3

function starts_with_ph(array) {
    for(i=0; i < array.length; i++) {
        var that_word = array[0];
        if(that_word.startsWith("ph")) {
            that_word = array[i];
        }
    }
    return that_word;
   }

   var words = starts_with_ph(["lamp", "rain", "photo"]);

   
function starts_with_ph(array){
   var i = 0; 
   var that_word = array[0];
   while(i < array.length) {
  
       if(that_word.startsWith("ph")) {
           that_word = array[i];
       }
       i++;
   }
   return that_word;
  }
  