let equal_pressed = 0;
//refer all buttons excluding ac and del
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
 
window.onload = () => {
    input.value = "";
};

//Accesing each class using foreach 
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equal_pressed == 1)
        {
            input.value = "";
            equal_pressed = 0;
        }
        //display value of each iteration
        input.value += button_class.value;
    });
});



//solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try{
        //evaluate user's input
        let solution = eval(inp_val);

        //true for natural no.s
        //false for decimals
        if(Number.isInteger(solution)) {
            input.value = solution;
        }
        else
        {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        alert("Invalid Input");
    }
    console.log(equal_pressed);
});

//clear whole input
clear.addEventListener("click", () => {
    input.value = ""; 
});

//erase single input
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length-1); 
});