let acc = document.getElementsByClassName("accordion");
console.log(acc)



for (let i=0; i<acc.length; i++){
    acc[i].addEventListener("click",(el)=>{
        el.target.classList.toggle("active")

        let panel = el.target.nextElementSibling;
        if (panel.style.display==="block"){
            panel.style.display="none";
        } else {
            panel.style.display="block";
        }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
    });
}