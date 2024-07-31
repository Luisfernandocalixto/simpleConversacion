// array questions
let questions = [
    "¿Cómo te llamas?",
    "¿De dónde eres?",
    "¿Cuál es tu edad?",
    "¿En qué estas trabajando?",
    "Fue agradable hablar contigo."
];

// initial variables
let num = 0;
let output = document.querySelector("#result");
output.innerHTML = questions[0];
let inputBox = document.querySelector("#ans");

function changeQuestion() {
    inputBox.setAttribute("placeholder", "Enter");
    output.innerHTML = questions[num];
    if (num == 4) {
        inputBox.setAttribute("placeholder", "");
    }
}

function showResponse() {
    let input = inputBox.value;
    if (inputBox.value == "") { }
    // change question with setTimeout
    else {
        if (num == 0) {
            output.innerHTML = `Hola ${input}, encantado de conocerte.`
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Espere...");
            ++num;
            setTimeout(changeQuestion, 2500);
        } else if (num == 1) {
            output.innerHTML = `${input} ¡es un lugar fantástico!`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Espere...");
            ++num;
            setTimeout(changeQuestion, 2500);
        } else if (num == 2) {
            output.innerHTML = `Ya veo , entonces tu edad es ${input}. Genial!`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Espere...");
            ++num;
            setTimeout(changeQuestion, 2500);
        } else if (num == 3) {
            output.innerHTML = `Entiendo`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Espere...");
            ++num;
            setTimeout(changeQuestion, 2500);
        }
    }
}

// Listen enter for user 
inputBox.addEventListener("keypress", function (e) {
    if (e.which == 13) {
        // call function
        showResponse();
    }
})

