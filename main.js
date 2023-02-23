/**
 * 防抖：一段时间内操作只做最后一次
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
function debounce(fn,wait){
    var timer = null;
    return function(){
        if(timer == null){
            // 初始化，给操作上定时器
            timer = setTimeout(fn,wait)
        }
        if(timer !== null){
            // 两次操作间隔较近，则重新计时
            clearTimeout(timer);
            timer = setTimeout(fn,wait);
        }
    }
}


// 定时器方案
/**
 * 节流：每隔一段时间做一次操作
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
function throttle(fn,wait){
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(timer == null){
            // 如果上一次进行完了重新触发，则添加计时器
            fn.apply(context,args);
            timer = setTimeout(function(){
                clearInterval(timer)
                timer = null;
            },wait)
        }
        if(timer){
            // 如果操作还在上一次时间内，则啥也不进行
            return
        }
    }
}

function handle1(){
    console.log("debounce",Math.random());
}
function handle2(){
    console.log("throttle",Math.random());
}

//鼠标移动触发事件
window.addEventListener("mousemove",debounce(handle1,1000));
    
window.addEventListener("mousemove",throttle(handle2,5000));
