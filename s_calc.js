writeExp = (e) => {
    display.value += e.target.id
}

getResult = () => {
    if (display.value == "") {
        alert("Enter expression!!")
    }
    else {
        try {
            display.value = eval(display.value)
        }
        catch{
            alert("Enter valid expression")
            display.value=""
        }
    }
}

allClear=()=>{
    display.value=""
}


backSpace=()=>{
    currentValue= display.value;
    display.value = currentValue.slice(0, -1);
}