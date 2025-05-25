// === 1. Display current year ===
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// === 2. Display last modified date ===
const lastModSpan = document.getElementById("lastModified");
lastModSpan.textContent = document.lastModified;

// === 3. Wind Chill Calculation ===
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chillDisplay = document.getElementById("chill");

// === 4. Define wind chill calculation function ===
function calculateWindChill(t, s) {
    // Formula from National Weather Service (for °C and km/h):
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
}

// === 5. Apply logic and display result ===
if (temp <= 10 && speed > 4.8) {
    const windChill = calculateWindChill(temp, speed);
    chillDisplay.textContent = `${windChill} °C`;
} else {
    chillDisplay.textContent = "N/A";
}
