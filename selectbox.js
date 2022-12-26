function selectbox(){         
    dc=document.getElementById("one");
    if(dc.options[dc.selectedIndex].value=="SUPERMAN"){
        alert("powerful hero is "+dc.options[dc.selectedIndex].value);

}
}