function checkValidity(){
const chairNumber = document.getElementById("number-input").value;
if(chairNumber > 10 || chairNumber < 1){
    alert("Please enter a chair number between 1 and 10");
    return;
}
}