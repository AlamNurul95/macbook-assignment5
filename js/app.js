document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    const memoryTotal = parseFloat(memoryCost.innerText);
    memoryCost.innerText = memoryTotal + 100;
});

