function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour time to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, make it 12
    
    // Add leading zero if numbers are single digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Update the HTML DOM elements
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

// Run the clock immediately on load, then update every 1000ms (1 second)
updateClock();
setInterval(updateClock, 1000);
