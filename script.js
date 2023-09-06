
let display = document.getElementById("display");

let nums = document.querySelectorAll(".btn");
console.log(nums);

let disValue="";

for(nu of nums) {
    nu.addEventListener("click",(e) => {
        btnText=e.target.innerText;
        console.log("button text is " , btnText)

        if(btnText=="x") {
            btnText="*";
            disValue+=btnText;
            display.value=disValue;
        }

        else if(btnText=="Clear") {
            disValue="";
            display.value=disValue;
        }

        else if(btnText=="=") {
            display.value=eval(disValue);
        }

        else {
            disValue+=btnText;
            display.value=disValue;
        }
    })
}