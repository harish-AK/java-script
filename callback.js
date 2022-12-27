//callback function is an function which is passed as argument for another function
//java script excecutes the function in which the order we called
//setTimeout(func,2000) used to delay the function call 2000-2 seconds

/*function dc(){


    console.log("dark");
}

function marvel(){


    console.log("fun filled");
}
dc()
setTimeout(marvel,2000);  */

function dc(name,marvel){


    console.log("dark "+name);
    marvel();
}

function marvel(){


    console.log("fun filled");
}
dc("black widow",marvel);  //second function is executed first (black widow)