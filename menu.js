function menu (){
    console.log ("kuk");
    let menu=document.querySelector('.menu-mobile__list');
    if (menu.style.display=== 'none'){
        menu.style.display = 'block';
        } else {
        menu.style.display = 'none';
        }
}