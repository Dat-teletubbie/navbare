
function bigman() {
 
    let a = document.getElementById("showmenu")
    console.log(a)
    if(a.className == "both"){
      
        a.className += "showmenu"
    }
    else{
        a.className = "both"
    }
}   