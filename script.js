function tipApp () {
    const calculateBtn = document.querySelector("#calculateBtn");
    const answerDiv = document.querySelector("#answerDiv");
    const retryBtn = document.querySelector(".retryBtn");

    console.log(retryBtn);
    
    calculateBtn.onclick = function runCalculations() {
        let amount = document.querySelector("#amount").value;
        let groupCount = document.querySelector("#groupCount").value;
        let serviceLevel = document.querySelector("#serviceLevel").value;

        if (!amount) {
            alert("Please Enter a Amount Value!");
        } else {  
            console.log(calculation(amount, groupCount, serviceLevel));
            answerDiv.classList.add("answer")
            let answer = document.createElement("H1");
            let retry = document.createElement("BUTTON");

            answer.innerHTML = calculation(amount, groupCount, serviceLevel);
            answer.className = "answerLabel"

            retry.classList.add("retryBtn");
            retry.innerHTML = "Do Another Calculation.";
            retry.className = "retryBtn";


            answerDiv.prepend(retry);
            answerDiv.prepend(answer);

        }
    }

    retryBtn.onclick = function resetForm () {
        document.querySelector("#amount").value = null;
        document.querySelector("#groupCount").value = null;
        document.querySelector("serviceLevel").value = "Amazing";
        document.querySelector(".answer").remove();
        document.querySelector(".answerLabel").remove();
        document.querySelector(".retryBtn").remove();
    }
}

function calculation (amount, groupCount, serviceLevel) {
    let percentage = 0.00;
    let tipAmount = 0.00;
    switch(serviceLevel) {
        case "Amazing":
            percentage = 0.3;
            break;
        case "Good":
            percentage = 0.25;
            break;
        case "Par":
            percentage = 0.18;
            break;
        case "Not so good":
            percentage = 0.13;
            break;
        case "Terrible":
            percentage = 0.10;
            break;
        default:
            percentage = 0.15;
    }


    if (!groupCount || groupCount.toString() === "0") {
        tipAmount = `$${(amount * percentage).toFixed(2)}`;
    } else {
        tipAmount = `$${((amount / groupCount) * percentage).toFixed(2)}`;
    }

    return tipAmount;
}

tipApp();