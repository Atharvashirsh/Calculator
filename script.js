//console.log("hello");

let buttons = document.querySelectorAll(".buttons");
let inputscreen = document.getElementById("inputscr");
let outputscreen = document.getElementById("outputscr");
console.log(buttons);
inputscreen.value = "0";
outputscreen.value = "0";
let start = 1;

try {
    Array.from(buttons).forEach((key) => {
        key.addEventListener("click", (e) => {
            if (e.target.innerHTML === "C") {
                inputscreen.value = "0";
                outputscreen.value = "0";
                start = 1;
            } else if (e.target.innerHTML === "Del") {
                if (inputscreen.value.length == 1) {
                    // console.log(inputscreen.value.length);
                    inputscreen.value = "0";
                    start = 1;
                } else {
                    inputscreen.value = inputscreen.value.slice(0, -1);
                }
            } else if (e.target.innerHTML === "=") {
                outputscreen.value = eval(inputscreen.value).toFixed(6);
            } else if (e.target.innerHTML === "Ans") {
                inputscreen.value = outputscreen.value;
            } else {
                if (start) {
                    inputscreen.value = "";
                    start = 0;
                }
                //alert("Button pressed is ", e.target.innerHTML);
                inputscreen.value += e.target.innerHTML;
            }
        });
    });
} catch (e) {
    alert("SYNTAX ERROR" + e.message);
}
