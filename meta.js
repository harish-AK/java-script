let reg=/we.come/;    //. character will complete the output with string
let rege=/w*e/; //any words that start with w and ends with e 
let re=/^welcome/;  //^ carot the string should start with welcome  otherwise return null
let r=/welcome$/; //end with welcome otherwise null
let rr=/welc?ome?/;          // option character welc or ome string no need to contain c but not any other in place if c
let str="welcome to kirikaalan magic show ! welcome";
let out=rr.exec(str);
console.log(out);