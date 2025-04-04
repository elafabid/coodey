function displayNumber(num) {
    const input = document.getElementById('input');
    input.value += num;
}

function clearInput() {
    const input = document.getElementById('input');
    input.value = "";
}

function calculate() {
    try {
        const input = document.getElementById('input');
        const result = eval(input.value);
        input.value = result;
    } catch (error){
        const input = document.getElementById('input');
        input.value = "Error";
    }
}