let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');

let bd = document.querySelector('#bd');
let crash  = document.querySelector('#crash');
let hho = document.querySelector('#hho');
let rim = document.querySelector('#rim');
let sd = document.querySelector('#sd');
let tomh = document.querySelector('#tomh');


btn1.addEventListener('click', function(){
    bd.play();
})    
btn2.addEventListener('click', function(){
    crash.play();
}) 
btn3.addEventListener('click', function(){
    hho.play();
}) 
btn4.addEventListener('click', function(){
    rim.play();
}) 
btn5.addEventListener('click', function(){
    sd.play();
}) 
btn6.addEventListener('click', function(){
    tomh.play();
}) 

document.addEventListener ('keypress', function(event){   // A tary sexmeluc petqa eli bd play lini
    if(event.code == 'KeyA') {
        bd.play();
    } else if(event.code == 'KeyS') {
        crash.play();
    }else if(event.code == 'KeyD') {
        hho.play();
    }else if(event.code == 'KeyF') {
        rim.play();
    }else if(event.code == 'KeyG') {
        sd.play();
    }else if(event.code == 'KeyH') {
        tomh.play();
    }
})