document.getElementById('wordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input text from the textarea
    const textInput = document.getElementById('textInput').value;

    // Process the input text
    const words = textInput.toLowerCase().match(/\b\w+\b/g) || [];
    const wordCounts = {};

    // Count the frequency of each word
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Create the word cloud
    const wordCloudDisplay = document.getElementById('wordCloudDisplay');
    wordCloudDisplay.innerHTML = ''; // Clear previous word cloud

    for (const [word, count] of Object.entries(wordCounts)) {
        const span = document.createElement('span');
        span.textContent = word;
        // Set font size proportional to word count
        span.style.fontSize = `${Math.min(60, 10 + count * 5)}px`;
        span.style.margin = '5px';
        span.style.display = 'inline-block';
        wordCloudDisplay.appendChild(span);
    }
});
