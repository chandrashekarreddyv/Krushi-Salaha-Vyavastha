function validateInput(inputId) {
    var inputValue = parseFloat(document.getElementById(inputId).value);
    var errorElement = document.getElementById(inputId + "Error");
    
    if (isNaN(inputValue)) {
        errorElement.textContent = "Please enter a valid number.";
    } else if (inputValue < 0 || inputValue > 1000) {
        errorElement.textContent = "Number must be between 0 and 1000.";
    } else if (inputValue.toString().indexOf('.') !== -1 && inputValue.toString().split('.')[1].length > 10) {
        errorElement.textContent = "Maximum precision exceeded. Please enter up to 10 decimal places.";
    } else {
        errorElement.textContent = "";
    }
}
function validateInput1(inputId) {
    var inputValue = parseFloat(document.getElementById(inputId).value);
    var errorElement = document.getElementById(inputId + "Error");
    
    if (isNaN(inputValue)) {
        errorElement.textContent = "Please enter a valid number.";
    } else if (inputValue < 0 || inputValue > 80) {
        errorElement.textContent = "Number must be between 0 and 80.";
    } else if (inputValue.toString().indexOf('.') !== -1 && inputValue.toString().split('.')[1].length > 10) {
        errorElement.textContent = "Maximum precision exceeded. Please enter up to 10 decimal places.";
    } else {
        errorElement.textContent = "";
    }
}
function validateInput2(inputId) {
    var inputValue = parseFloat(document.getElementById(inputId).value);
    var errorElement = document.getElementById(inputId + "Error");
    
    if (isNaN(inputValue)) {
        errorElement.textContent = "Please enter a valid number.";
    } else if (inputValue < 0 || inputValue > 14) {
        errorElement.textContent = "Number must be between 0 and 14.";
    } else if (inputValue.toString().indexOf('.') !== -1 && inputValue.toString().split('.')[1].length > 10) {
        errorElement.textContent = "Maximum precision exceeded. Please enter up to 10 decimal places.";
    } else {
        errorElement.textContent = "";
    }
}
function validateInput3(inputId) {
    var inputValue = parseFloat(document.getElementById(inputId).value);
    var errorElement = document.getElementById(inputId + "Error");
    
    if (isNaN(inputValue)) {
        errorElement.textContent = "Please enter a valid number.";
    } else if (inputValue < 0 || inputValue > 300) {
        errorElement.textContent = "Number must be between 0 and 300.";
    } else if (inputValue.toString().indexOf('.') !== -1 && inputValue.toString().split('.')[1].length > 10) {
        errorElement.textContent = "Maximum precision exceeded. Please enter up to 10 decimal places.";
    } else {
        errorElement.textContent = "";
    }
}