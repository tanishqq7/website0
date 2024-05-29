function showMessage(answer) {
    var messageElement = document.getElementById('message');
    
    if (answer === 'Yes') {
        messageElement.textContent = 'Great! You said Yes!';
    } else {
        messageElement.textContent = 'Oops! You said No!';
    }
}
