function btnValue(btnValue){
    let displayInput = document.getElementById("displayResult");
    displayInput.value += btnValue;
}
function result(){
     let displayInput = document.getElementById("displayResult");
    let num = displayInput.value;
    if(!num == ''){
        let result = eval(num);
        displayInput.value = result;
    }
}
function clInp(){
    let displayInput = document.getElementById("displayResult");
    displayInput.value = '';
}
