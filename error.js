function makeorder(){
    console.log("you are right spiderman is the best");
}
try{
    makeorder();
    process();  //the function which is not defined when we call this outside none of it will work bacause try wont run 
}catch(error){
    console.log("problem in your program ")
    console.log(error.name);  //error name
    console.log(error.message); //what type of error
}
finally{
    console.log("this will execute even there is an error or not");
}