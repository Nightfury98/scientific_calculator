function calculate(cal){

    if(cal.output.value.includes("%")) {
				
        size = cal.output.value.length;
        n = Number(cal.output.value.substring(0, size-1));
        cal.output.value = n/100;
    }
    else
        cal.output.value = eval(cal.output.value);
}
function backspace(cal){
    size=cal.output.value.length;
    cal.output.value=cal.output.value.substring(0,size-1);
}