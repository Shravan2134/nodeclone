function displayGreeting() {
    const name = document.getElementById('name').value;
    const greetingContainer = document.getElementById('greeting-container');
    const imageContainer = document.getElementById('image-container');
    const celebrationSound = document.getElementById('celebration-sound');

    // Check if the name is empty
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    // Play celebration sound
    celebrationSound.play();

    // Display the personalized greeting message
    greetingContainer.innerHTML = `<p class="greeting-message">🎉 Happy Birthday, <strong>${name}</strong>! 🎂🎉</p>`;

    // Add a fun birthday image
    imageContainer.innerHTML = `
        <img src="https://media.giphy.com/media/3ohhwo06bL7cS5Qmo4/giphy.gif" alt="Birthday Celebration">
    `;

    // Clear the input field after greeting
    document.getElementById('name').value = "";
}
