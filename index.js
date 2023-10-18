// 实现轮播图切换
let img = document.querySelector('.banner1');
let slide = document.querySelector('.banner');

let imgArr = ['banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg','banner5.jpg','banner6.jpg','banner7.jpg'];

let count = 0;

// 定义函数，用来切换图片的路径
function cutImg(){
    img.src = './img/' + imgArr[count];
    for(let i = 0; i < lis.length; i++){
        lis[i].className = '';
    }
    lis[count].className = 'active';
}

// 设置定时器每隔3秒count加1然后执行函数
let timer = setInterval(function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();
}, 2000);

// 鼠标滑入div，将定时切换图片给干掉
slide.onmouseover = function(){
    clearInterval(timer);
}

// 鼠标滑出div，将定时切换图片启动
slide.onmouseout = function(){
    timer = setInterval(function(){
        count++;
        if(count > imgArr.length - 1){
            count = 0;
        }
        cutImg();
    }, 2000);
}
