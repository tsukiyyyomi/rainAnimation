window.addEventListener('load', createRain )

function createRain(){
    let frames, duplicate, x, y;
    let el = document.createElement('div');
    let load = document.querySelector('.load');

    load.appendChild(el);
    duplicate = load.innerHTML;
    load.innerHTML = duplicate.repeat(4);
    frames = load.children;
    setInterval(function(){
        x = document.documentElement.clientWidth-10;
        y = document.documentElement.clientHeight -100;
        for(let i = 0; i < frames.length; i++){
            frames[i].setAttribute("style", "position:absolute; background:#fff; height:100px; width:1px; left:" + 
            Math.random()*x + "px;top:" + Math.random() * y + "px;opacity:"+ Math.random()* 1);
            
        }
    },1)

}