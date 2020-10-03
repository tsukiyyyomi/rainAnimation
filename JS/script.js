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
            frames[i].className = 'drop';
            frames[i].setAttribute("style", "height:" +
            Math.random()* (150-50) + 50 + "px;left:" + 
            Math.random()*x + "px;top:" + 
            Math.random() * y + "px;opacity:"+ 
            Math.random()* 1);            
        }
    },10)

}

//window.onload = alert(Math.random()* (100-50) + 50)