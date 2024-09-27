let expButton = document.querySelector("#exp-button");
let expCounter = document.querySelector("#exp-counter");
let expCount = 0;
expButton.addEventListener("click", function(event) {
    expCount++
    expCounter.innerHTML = `${expCount} Years Coding Experience!`
})
