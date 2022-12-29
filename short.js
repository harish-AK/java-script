var reg=/\d321/ //d is the digit that comes before 321 
var re=/\D+321/ // all characters that comes after 321 words only \D-words opposite of \d
var rr=/\wber/  //  \w -letters  a letter comes before ber
var rege=/\Wber/    //  \W-return the index number and pattern when a letter is not present before ber
var ree=/\sphone/    //    \s space before phone
var regg=/\S+phone/  // |S return true for everything other than space
var str="myphone num@ber is 9876a321547989";
var out=regg.exec(str);
console.log(out);