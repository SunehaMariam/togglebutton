let toggleButton = document.getElementById("toggleButton");
toggleButton.onclick=() =>{
    if (document.body.style.backgroundColor==="white") {
        document.body.style.backgroundColor="black";
        toggleButton.textContent="switch to light mode 🔆"
   
    } else {
        document.body.style.backgroundColor="white"
        toggleButton.textContent="switch to dark mode ☀︎";
        document.body.style.color="black";
        document.body.style.backgroundcolor="white";
       
    }
}
