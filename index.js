let count = 0; // Initialize the counter
const target = 10240; // Set the target number
const intervalTime = 5; // Interval time in milliseconds
const incrementAmount = target / (3000 / intervalTime); // Calculate increment per interval

// Function to update the counter
function updateCounter() {
  count += incrementAmount; // Increment the count

  // Update the displayed count, rounding to avoid decimals
  document.getElementById("counter").textContent = Math.round(count);

  // Check if the count has reached or exceeded the target
  if (count >= target) {
    clearInterval(counterInterval); // Stop the counter
    document.getElementById("counter").textContent = target; // Ensure the display shows the target
  }
}

// Start the counter when the page loads
let counterInterval;

window.onload = function () {
  counterInterval = setInterval(updateCounter, intervalTime); // Call updateCounter every 5 milliseconds
};
