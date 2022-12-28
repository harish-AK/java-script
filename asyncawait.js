function makeorder(coffee){
    return new Promise((resolve,reject)=>{
        console.log("making request for "+coffee);
        if(coffee=="black coffee"){
            resolve("here is your coffee have a nice day")//resolve to handle the correct statement
        }
        else{
            reject("sorry! we serve black coffee only")    //reject to handle the wrong statement

        }
    })

}
function process(order){
    return new Promise((resolve,reject)=>{
        console.log("processing order ")
        resolve("extra information "+order)  //order used to print "here is your coffee" simple addition to process resolve in makeorder resolve
    
    })//promise
}
async function func(){            //calling the function
    try{
    var order=await makeorder("black coffee")
    console.log("order has been received")
    var processed=await process(order)
    console.log(processed)
}catch(error){
    console.log(error)

}}
func();





/*makeorder("black tea").then(order=>{
    console.log("order received ")
    return process(order)
}).then(processed=>{                              //promises -first makeorder execute than processed if order is black coffee else .catch(processed)
    console.log(processed)
}).catch(error=>{
    console.log(error);
})*/