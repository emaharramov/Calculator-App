 const display = document.getElementById("display")

    function calc() {
        display.value = eval(display.value)
    }
    function press(x) {
        display.value= display.value + x
    }
    function reset() {
        display.value = ''
    }
    function sil() {
        display.value = display.value.slice(0, -1);
    }
