let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function Clear(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}
function del(){
    outputScreen.value = '';
}
// trigometry function (sin, cos, tan)
function sin(){
    outputScreen.value = Math.sin(outputScreen.value);
}
function cos(){
    outputScreen.value = Math.cos(outputScreen.value);
}
function tan(){
    outputScreen.value = Math.tan(outputScreen.value);
}
function root(){
    outputScreen.value = Math.sqrt(outputScreen.value, 2);
}
function logs(){
    outputScreen.value = Math.log10(outputScreen.value)
}