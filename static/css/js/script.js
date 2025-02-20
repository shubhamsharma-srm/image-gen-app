document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("imageForm");
    const loader = document.getElementById("loader");

    form.addEventListener("submit", function () {
        loader.style.display = "block"; // Show the loader
    });

    createBubbles(); // Start floating bubbles
    setInterval(createBubbles, 3000); // Keep generating bubbles
});

// Function to create floating bubbles
function createBubbles() {
    const bubbleCount = 10; // Number of bubbles
    const container = document.body;

    for (let i = 0; i < bubbleCount; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let size = Math.random() * 80 + 20; // Random size between 20px - 100px
        let position = Math.random() * 100; // Random horizontal position
        let duration = Math.random() * 5 + 5; // Random animation duration

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${position}vw`;
        bubble.style.animationDuration = `${duration}s`;

        container.appendChild(bubble);

        // Remove bubble after animation ends
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }
}

// Function to trigger confetti effect
function confettiEffect() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

// Add confetti effect when button is clicked
document.querySelector("button").addEventListener("click", confettiEffect);
