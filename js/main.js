console.log('文字水平方向无缝滚动');
var text = document.getElementsByClassName('text');
var container = document.querySelector('#container');
var _text = [
    '明天你是否会想起，昨天你写的日记，明天你是否还惦记，曾经最爱哭的你。。。',
    '曾梦想走天涯，看一看世界的繁华，年少的心总有些轻狂',
    '那一天，知道你要走，我们一句话也没有说，当物业的钟声，敲通离别的心门，却打不开你深深的沉默',
    '我只能深深地祝福你,深深地祝福你,最亲爱的朋友,祝你一路顺风'];

// setInterval实现无缝滚动
function scroll(dom, text) {
    if (dom.offsetWidth < dom.scrollWidth) {
        console.log(dom+':文字长度超出了容器宽度');
        var wordLength = dom.scrollWidth;//文字长度
        dom.innerHTML += text;
        var timer = setInterval(function () {
            if (dom.scrollLeft < wordLength) {
                dom.scrollLeft++;
            } else {
                dom.scrollLeft = 0;
            }
        }, 1000 / 60);
    } else {
        console.log(dom+':文字没有超出容器宽度');
    }
}

//test
for (var i = 0; i < text.length; i++) {
    text[i].innerHTML = _text[i%4] + '&nbsp;&nbsp;&nbsp;&nbsp;';
    scroll(text[i], text[i].innerHTML);
}