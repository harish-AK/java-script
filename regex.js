var search=/concepts/g;  //search word 
 var search1=/concepts/i  ;     // i-modifier handle both cases in a same way   
var search2=/concepts/g  ;  //global modifier return repeated matches if present   
var str="  concepts  of dc concepts are dark concepts";



/*var result=search.exec(str);  
var result1=search1.exec(str);          //exec used when return the index where it matches or return null if dont match and its case sensitive
var result2=search2.exec(str);  
console.log(result,result1,result2);*/

//test()
//var result=search.test(str);   //test only return true if the search string matches  also search a part from the word like ark in dark return true
//console.log(result);

//match returns the match words not index
// and match is case sensitive
//var res=str.match(search);
//console.log(res);

//replace

var replace=str.replace(search,"movies");
console.log(replace);

