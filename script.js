document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("hamb-btn");
    var nav = document.getElementById("nav-links-id");
    try{
        wrongbtnName.addEventListener("click", function(){
            nav.classList.toggle("showMenu");
        });
    } catch(err){

    }

    if (btn && nav){
        btn.addEventListener("click", function(){
            nav.classList.toggle("showMenu");

        });
    }

});

