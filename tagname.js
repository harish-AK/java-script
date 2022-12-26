function tagname(){
    var sec=document.getElementsByTagName("div");  // get the input from user using tag name(tag)
   /* sec[0].style.fontFamily="Courier New";
    sec[1].style.color="Blue";
    sec[2].style.fontStyle="italic";
    sec[3].style.backgroundColor="red";
    sec[4].style.fontPalette="dark";*/
    for(var i=0;i<sec.length;i++)
    {
        sec[i].style.fontFamily="Courier New";   //for loop to make all sections same
    }
}
// css in java script style used to desing the sections defined in html