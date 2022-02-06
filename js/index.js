// alert('宝~你来啦')

// 重要参数
var backgroundImageNum = 6; //背景图片的数量

// 背景图片的更换
var background = document.getElementById('background');
var up = document.getElementById('up');
var down = document.getElementById('down');
var index = 1;
up.onclick = function () {
    index--;
    if ( index < 1 ) index = backgroundImageNum; 
    background.style.backgroundImage = 'url(./images/background/background'+index+'.jpg)';
}
down.onclick = function () {
    index++;
    if ( index > backgroundImageNum ) index = 1;
    background.style.backgroundImage = 'url(./images/background/background'+index+'.jpg)';
}