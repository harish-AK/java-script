function custom(){
    var a=9;
    if(a<10){
        throw new Error("this is an custom error");
    }
    else{
        console.log("working fine");
    }
}
custom();