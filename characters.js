/*var reg=/[klaus] mikelson/;  // klaus should be before the word mikelson space wont consider
var regex=/[^elijah] mikelson/ //words start with elijah
var str=" elijah mikelson,mikelson elijah, finn mikelson , freya mikelson ,klaus mikelson";
var out=regex.test(str);
console.log(out)*/
function employee(){
var id=document.getElementById("eid").value;  //  input from user for the emp id will store in id variable
var check=/[E0]121[10-99]/i   // start with E0 followed by 121 thm 10-99  i-case sensitive removed
if(check.test(id)){
    alert("valid user ID");
}
else{
    alert("invalid user id");
}

}

