function toggleNavbar(){
    let menu=document.querySelector(".navbar");
    let header=document.querySelector(".header");
    if(menu.style.display=="none"){
        header.style.height="80vh";
        menu.style.display="flex";
    }else{
        menu.style.display="none";
        header.style.height="80px";
    }
}