function tabs(val){
if(val==1){
    document.getElementById("tab1-content").style.display="block";
    document.getElementById("tab2-content").style.display="none";
    document.getElementById("tab3-content").style.display="none";
}
if(val==2){
    document.getElementById("tab1-content").style.display="none";
    document.getElementById("tab2-content").style.display="block";
    document.getElementById("tab3-content").style.display="none";
}
if(val==3){
    document.getElementById("tab1-content").style.display="none";
    document.getElementById("tab2-content").style.display="none";
    document.getElementById("tab3-content").style.display="block";
}
}