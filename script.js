function convertTemperature() {
    let inputTemp = document.getElementById('temperature').value.trim();
    let scale = document.getElementById('scale').value;


    if (inputTemp === '' || isNaN(inputTemp)) {
        alert('Please enter a valid temperature.');
        return;
    }


    let result;
    if (scale === 'celsius') {

        result = (inputTemp * 9 / 5) + 32;
        document.getElementById('result').innerHTML = `${inputTemp}°C = ${result.toFixed(2)}°F`;
    } else if (scale === 'fahrenheit') {
        result = (inputTemp - 32) * 5 / 9;
        document.getElementById('result').innerHTML = `${inputTemp}°F = ${result.toFixed(2)}°C`;
    }

}