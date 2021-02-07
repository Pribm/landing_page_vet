const navButton = document.querySelector('.bars');
const navbar = document.querySelector('nav');
const menu = document.querySelectorAll('nav li');
const tm = TweenMax;
const tl = new TimelineMax();
let showingMenu = false;

//button clicks
navButton.addEventListener('click', showMenu);


var navHeight = navbar.clientHeight;

function showMenu(){
    showingMenu = !showingMenu;
    if(showingMenu == true){
        tm.to(menu, 1,{y:navHeight-25,height:navHeight, display: 'flex', alignItems: 'center', autoAlpha: 1, ease: Elastic.easeOut});
    }else{
        tm.set(menu,{clearProps:'all'});
    }
}

function resize() {
    tm.set(menu, {clearProps:'all'});
}

window.onresize = resize;