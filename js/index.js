
// questions and responses
import { responses } from "../data/response.js";
document.addEventListener('DOMContentLoaded', function () {

	// container of response
	let container = document.getElementById('chatbot');
	let buttonSend = document.getElementById('buttonSend');
	let textarea = document.getElementById('userInput');
	buttonSend.addEventListener('click', send);

	function checkInput() {
		// check value input and function 
		textarea.addEventListener('input', () => {
			buttonSend.disabled = textarea.value.trim() === '';

		});
	}

	checkInput();

	function chat(input) {
		// clear response 
		container.innerHTML = '';
		// input values minuscules 
		input = input.toLowerCase();
		
		
		for (const response of responses) {
			// if input have a response, show response
			if (input.includes(response.input.toLowerCase())) {
				return response.output;
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

})
