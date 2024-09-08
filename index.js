const display = document.getElementById("display");

function addElement(input){
    display.value += input
}

function getResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}