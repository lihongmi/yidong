~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(320);

var step = 0;
var mySwiper = new Swiper('.swiper-container', {
    autoplay:4000,
    loop: true,
    direction: 'vertical',
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    onSlidePrevEnd: function () {
        step--;
        if (step < 0) {
            step = 1;
        }
        change();
    },
    onSlideNextEnd: function () {
        step++;
        if (step > 5) {
            step = 2;
        }
        change();
    }
});

function change() {
    var divList = document.querySelectorAll(".swiper-slide");
    [].forEach.call(divList, function (curDiv, index) {
        curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
    });
}

~function(){
    var audioBox=document.querySelector('.audio');
    var myAudio=audioBox.getElementsByTagName('audio')[0];
    window.setTimeout(function(){
        myAudio.play();
        myAudio.addEventListener('canplay',function(){
            audioBox.style.display='block';
            audioBox.className+=" audioMove";
        },false);
    },1000);
    audioBox.addEventListener('click',function(){
        if(myAudio.paused){
            myAudio.play();
            audioBox.className+=' audioMove';
            return;
        }
        myAudio.pause();
        audioBox.className='audio';
    },false)
}();
