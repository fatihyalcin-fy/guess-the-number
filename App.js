let numberArea = document.getElementById("number-area");
let submitButton = document.getElementById("submit-button");
let result = document.getElementById("result");
let attempt = document.getElementById("attempt");
let attemptText = document.getElementById("text2");
let attemptDiv = document.querySelector(".attempt")

attempt.value = 10;

let y = 44;

console.log(y);

submitButton.addEventListener("click", ()=>{
    
    if(numberArea.value == y){
        result.innerHTML = "Congrats! You found the number in your " + (10 - (attempt.value - 1)) + ". trial.";
        // attemptDiv.style.display = "none";
        document.body.style.backgroundImage = "url('./images/image-1.jpg')";
    }

    else if(numberArea.value < y)

        result.innerHTML = `Enter a number between ${numberArea.value} and 100`

    else if(numberArea.value > 100){
        alert("The number should be between 0-100")
    }

    else{
        result.innerHTML = `Enter a value between 0 and ${numberArea.value}`
    }

});

submitButton.addEventListener("click", ()=>{
    
    if(numberArea.value != y && attempt.value != 0){
        attempt.value--;
        attempt.innerHTML = attempt.value;
    }

    else if(parseInt(attempt.value) == 0){
        alert("You have no attempt left!")
    }

    else if(numberArea.value == y){
        attempt.innerHTML = attempt.value - 1
    }
})