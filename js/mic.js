const search_background = document.getElementById("search_background");
const input_box = document.getElementById("input_box");
const mic_button = document.getElementById("mic_button");
const backgroundAction = () => {
    search_background.style.display = "none"
}
const searchButtonAction = () => {
    search_background.style.display = "flex"
    input_box.focus();
}


document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.keyCode == 32) {
        if (search_background.style.display == "none") searchButtonAction();
        else backgroundAction();
    }
})

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Create a new SpeechRecognition object
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Set the continuous option to true for continuous recognition
    recognition.continuous = true;

    // Event handler when speech is recognized
    recognition.onresult = function(event) {
        const transcript = event.results[event.results.length - 1][0].transcript;
        document.getElementById('input_box').value = transcript;
    };

    // Event handler when recognition is started
    recognition.onstart = function() {
        console.log('Speech recognition started');
    };

    // Event handler when recognition is ended
    recognition.onend = function() {
        console.log('Speech recognition ended');
    };

    // Event handler for errors
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    // Attach click event to the "Start Speech Recognition" button
    document.getElementById('mic_button').addEventListener('click', function() {
        recognition.start();
    });
} else {
    console.log('Speech recognition is not supported in this browser.');
}