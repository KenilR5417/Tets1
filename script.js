
function click_link2(){
    var list= document.getElementById("link2");
    list.classList.add("active");

    var list=document.getElementById("link1");
    list.classList.remove("active");

    var list=document.getElementById("link3");
    list.classList.remove("active");
    
    var list=document.getElementById("link4");
    list.classList.remove("active");

}

function click_link1(){
    var list= document.getElementById("link1");
    list.classList.add("active");

    var list=document.getElementById("link2");
    list.classList.remove("active");

    var list=document.getElementById("link3");
    list.classList.remove("active");

    var list=document.getElementById("link4");
    list.classList.remove("active");

}

function click_link3(){
    var list= document.getElementById("link3");
    list.classList.add("active");

    var list=document.getElementById("link1");
    list.classList.remove("active");

    var list=document.getElementById("link2");
    list.classList.remove("active");

    var list=document.getElementById("link4");
    list.classList.remove("active");

}

function click_link4(){
    var list= document.getElementById("link4");
    list.classList.add("active");

    var list=document.getElementById("link1");
    list.classList.remove("active");

    var list=document.getElementById("link3");
    list.classList.remove("active");

    var list=document.getElementById("link2");
    list.classList.remove("active");
}

function click_menu(){
    var list=document.getElementById("menu");
    list.classList.toggle("open");
}