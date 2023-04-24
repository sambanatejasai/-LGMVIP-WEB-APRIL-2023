let output = document.getElementById("screen");
let body = document.querySelector('body');

    function display(num) {
        output.value += num;
    }
    function Calc() {
        try {
            output.value = eval(output.value);
        } catch (error) {
            output.value = "Invalid";
        }
        
    }
    function Clear() {
        output.value = ""
    }
    function del() {
        output.value = output.value.slice(0,-1);
    }
    function negate() {
        output.value = -(output.value);
    }

    function toggle() {
        body.classList.toggle('dark')
    }