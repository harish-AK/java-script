function display(){
    var nam=document.getElementById('uname').value; //value returns the text inside the textbox , getelementById used to get input in textbox
    var pas=document.getElementById('upass').value;
    if(pas=="wakanda"){  //check the password and print the result
        alert("Your name is "+nam+"\n"+"the password is "+pas);//alert used to display the result in pop up mode
    }
    else{
        alert("wrong password");
    }

}
