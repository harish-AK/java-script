/*var msg=()=>alert("iam iron man");
function timefunc(){
    setTimeout(msg,2000); //alert will execute aftr 2 seconds when the button is clicked

}*/


/*function timefunc(){ //when time function is called it will execute anonymous function after 2 seconds
    setTimeout(function(){   //function() is an anonymous function
        alert("avengers assemble");
    },2000)
}*/

var id=0;
var msg=()=>alert("i can do this all day");
function timefunc(){
    id=setTimeout(msg,2000);  //id=setInterval(msg,2000); setinterval used to execute the code like loop after every 2 seconds when we click ok
}
function stop(){   //it will stop the function to execute clearatime out function is used 
    clearTimeout(id);
}