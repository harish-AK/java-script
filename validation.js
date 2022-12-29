function validate()
{
    var uname=document.getElementById("uname").value;
    var age=document.getElementById("age").value;
    var pass=document.getElementById("pass").value;

    if(uname.trim()== "" ||age.trim()== ""||pass.trim()== "")   //trim allows only one space in the input
    {
        alert("please fill the details");
        return false;
        }
    else if(uname=="harish"&&pass=="1234"&&age>30)
    {
        alert("sucessfully sighned in");
        return true;
    }
    else{
        alert("wrond username or password");
        return false;
    }

}