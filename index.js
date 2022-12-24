console.log("stephen wolf");     // writing statement  in the console   of the web page      //html-content javascript-behaviour
//node is an run time environment for executing javascript code   we can execute the output in integreted terminal
//variable
let name='batman';   //variable cant stat with number , cant have a keyword and sholud be meaningful 
console.log(name);           
//camel notation     first letter small 2nd word 1st letter caps
let firstName='Bruse';
let lastName='Wayne';
console.log(firstName,lastName);

//constant  cant be reassigned
const dc="DC dead";
console.log(dc)
//variable can be string 'hari' , boolean true or false , null,number,undefined

//objects

let WB={
    decalred:'no more old dc',
    new:'superman on process'
};
WB.new='no more henry cavil';      //dot notation
let N='new';
WB[N]='henry doing warhamer';      // bracket notation   this will be upadated in   WB
console.log(WB);

//Arrays
let arr=['black adam','wonder women'];
arr[2]='flash';  //add new element in array
console.log(arr);

//functions
function gordan(position,status){         //position is the parameters
    console.log('GCPD james gordan '+position+' '+status);
}
gordan('commissioner','married');
gordan('gotham city'); //undefined status isnt defined  //function can have multiple values for a parameter


function villans(arkham,asylum){
    return arkham+asylum;
}
console.log(villans('joker ','scarecrow'))