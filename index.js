//creating four digit pin======================================
function pinGenerate(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if(pinString.length==4){
        document.getElementById("display-pin").value = pinString;
    }
    else{
        pinGenerate();
    }
}
document.getElementById("pinGenerator-btn").addEventListener('click', function() { 
    pinGenerate();
});
//pin input processing===================================================================
document.getElementById("key-pad").addEventListener('click', function(e){
    const inputField = document.getElementById("pinInput");
    const providedNumber= inputField.value;
    const numbersButtonValue= e.target.innerText;
    if(numbersButtonValue == "C"){
        inputField.value = ""; 
    }
    else if(numbersButtonValue== "<"){
        inputField.value = providedNumber.slice(0, -1); 
    }
    else if (numbersButtonValue == "Submit"){
        const generatedNumber = document.getElementById("display-pin").value;
        if(providedNumber == generatedNumber && providedNumber != ""){
            document.getElementById("success").style.display = "block";
            document.getElementById("error").style.display = "none";
            inputField.value= "";
        }
        else{
            document.getElementById("error").style.display = "block";
            document.getElementById("success").style.display = "none";
            const opportunityText = document.getElementById("opportunity").innerText;
            const opportunity = parseInt(opportunityText);
            if(opportunity > 1){
                document.getElementById("opportunity").innerText = opportunity - 1;
            }
            else{
                document.getElementById("warning").innerText = "Please, reload the tab again";
                document.getElementById("submitBtn").style.display = 'none';
            }
            inputField.value= "";
        }
    }
    else if(isNaN(numbersButtonValue)){
        console.log("NaN");
    }
    else{
        document.getElementById("pinInput").value = providedNumber + numbersButtonValue;
    }
});