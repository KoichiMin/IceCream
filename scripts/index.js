"use strict"

window.onload = function(){
    const cup = document.getElementById("cup");
    const cone = document.getElementById("cone");
    
    // if cup id is checked
    cup.addEventListener("change", function() {
        if (cup.checked) {
            displayToppings();
        } 
        
    });

    // if cone id is checked
    cone.addEventListener("change", function() {
        if (cone.checked){
            hideToppings();
        }
    });
    
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = function(event){
        event.preventDefault();
        totalCost();
    }

}

function displayToppings() {
    const toppingsId = document.getElementById("displayToppings");
    toppingsId.style.display = "block";
}

function hideToppings() {
    const toppingsId = document.getElementById("displayToppings");
    toppingsId.style.display = "none";
}


function totalCost (){
    let basePrice = 0;
    let toppings = 0;
    let totalDue = 0;

    const numScoops = Number(document.getElementById("numScoops").value);
    
    if (numScoops > 0 && numScoops < 5){
    
    if(numScoops == 1){
        basePrice = 2.25
    }else{
        basePrice = 2.25 + (1.25 * (numScoops - 1))
    }
    

    const sprinkles = document.getElementById("sprinkles").checked;
    const whippedCream = document.getElementById("whippedCream").checked;
    const hotFudge  = document.getElementById("hotFudge").checked;
    const cherry = document.getElementById("cherry").checked;

    if(sprinkles){
        toppings += 0.5
    }
    if(whippedCream){
        toppings += 0.25
    }

    if(hotFudge){
        toppings += 1.25
    }

    if(cherry){
        toppings += 0.25
    }


    totalDue = basePrice + toppings


    document.getElementById("basePrice").innerText = "$" + basePrice.toFixed(2);
    document.getElementById("toppings").innerText = "$" + toppings.toFixed(2);
    document.getElementById("totalDue").innerText = "$" + totalDue.toFixed(2);    
} else{
    document.getElementById("basePrice").innerText = "$" + basePrice.toFixed(2);
    document.getElementById("toppings").innerText = "$" + toppings.toFixed(2);
    document.getElementById("totalDue").innerText = "$" + totalDue.toFixed(2);   
}
}
