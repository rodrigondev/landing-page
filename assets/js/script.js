window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if (document.querySelector(".topo__menu nav ul").style.display == 'flex'){
            document.querySelector(".topo__menu ul").style.display = 'none';
        } else {
            document.querySelector(".topo__menu nav ul").style.display = 'flex';
        }
    });
}