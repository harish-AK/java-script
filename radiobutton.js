function radiobutton(){         
    op1=document.getElementById("opt1");
    op2=document.getElementById("opt2");
    if(op1.checked==true){
        alert("sorry your answer "+op1.value+" is wrong and the correct answer is :"+op2.value);
    }
    else if(op2.checked==true){
        alert("congrats , correct answer is :"+op2.value);  //op2.value returns the value in op2 in html file

    }
    else{
        alert("no options selected");
    }

}