function processArray() {
    // Get the input value and convert it to an array of numbers
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    // Display results
    document.getElementById('sortedArray').textContent = `Sorted Array: ${array.slice().sort((a, b) => a - b)}`;
    document.getElementById('reversedArray').textContent = `Reversed Array: ${array.slice().reverse()}`;
    document.getElementById('slicedArray').textContent = `Sliced Array (first 3 elements): ${array.slice(0, 3)}`;
    document.getElementById('maxValue').textContent = `Maximum Value: ${Math.max(...array)}`;
    document.getElementById('minValue').textContent = `Minimum Value: ${Math.min(...array)}`;
    document.getElementById('sqrtValue').textContent = `Square Root of First Element: ${Math.sqrt(array[0] || 0)}`;
}
