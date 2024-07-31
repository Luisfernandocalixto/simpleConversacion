
// questions and responses
const responses = [
	{ input: 'hola', output: '¡Hola! ¿Cómo puedo ayudarle?' },
	{ input: '¿cómo estás?', output: 'Soy un robot, así que no tengo sentimientos, pero gracias' },
	{ input: '¿cuál es tu nombre?', output: 'Mi nombre es Jayson o en realidad Json. ¡Encantado de conocerlo!' },
	{ input: '¿qué puedes hacer?', output: 'Puedo responder preguntas, brindarte información y conversar contigo' },
	{ input: 'adiós', output: '¡Adiós! Qué tengas un lindo día.' },
	{ input: 'cuenta un chiste', output: '¿cómo se llama a un osito sin dientes... un osito de goma!' },
	{ input: 'por qué el cielo es azul', output: 'la luz azul se dispersa más que la luz roja' },
	{ input: 'quiero preguntar algo', output: 'estoy escuchando...' },
	{ input: 'gracias', output: 'de nada' },
	{ input: '¿de dónde eres?', output: 'Soy turco, pero estoy programado en los Países Bajos' },
	{ input: '¿qué debería ver?', output: 'Comedia, reír es bueno para la salud' },
	{ input: '¿cuántos años tienes?', output: 'me hicieron el lunes 13 de marzo de 2023' },
	{ input: 'cuenta otro chiste', output: 'Puede febrero marzo...no pero abril mayo' },
	{ input: 'crear un código de shell html', output: '<!DOCTYPE html><html lang="en"><head></head><body> </body></html>' },
	{ input: '¿quién eres?', output: 'Mi nombre es Jayson o en realidad Json. ¡Encantado de conocerlo!' },
	{ input: 'buen chiste', output: 'gracias' },
	{ input: 'jaja', output: '¿qué es tan gracioso?' },
	{ input: '¿qué es la IA?', output: '¿Qué es la inteligencia artificial (IA)? La inteligencia artificial es la simulación de procesos de inteligencia humana mediante máquinas, especialmente sistemas informáticos. Las aplicaciones específicas de la IA incluyen sistemas expertos, procesamiento del lenguaje natural, reconocimiento de voz y visión artificial.' },
];

// container of response
let container = document.getElementById('chatbot');
let buttonSend = document.getElementById('buttonSend');
let textarea = document.getElementById('userInput');
buttonSend.addEventListener('click', send);

function checkInput() {
	// check value input and function 
	textarea.addEventListener('input', () => {
		buttonSend.disabled = textarea.value.trim() === ''

	});
}

checkInput();

function chat(input) {
	// clear response 
	container.innerHTML = '';
	// input values minuscules 
	input = input.toLowerCase();


	for (let i = 0; i < responses.length; i++) {
		// if input have a response, show response
		if (input.includes(responses[i].input)) {
			return responses[i].output;
		}
	}
	return 'UPS! Lo siento, no comprendo lo que intentas decir';
}


function send() {

	const userInput = document.getElementById('userInput').value;
	const responseElement = document.createElement('p');

	responseElement.innerHTML = `	
    <div class="chat-body">
        <div class="message incoming">
            <p>Tú: ${userInput} </p>
        </div>
        <div class="message outgoing">
            <p>Chatbot: ${chat(userInput)} </p>
        </div>
    </div>
	`;
	// add response to container
	container.appendChild(responseElement);
	// clear input
	document.getElementById('userInput').value = '';
	// add attribute disabled to input
	buttonSend.setAttribute('disabled', true);

}

