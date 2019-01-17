(function (win) {
    let docEl=win.document.documentElement;
    function refreshRem() {
        //获取整个页面的宽度
        let width=docEl.getBoundingClientRect().width;
        console.log(width)
        if(width >1024){
            width=1024;
        }
        let rem=width/7.5;
        console.log(width);
        docEl.style.fontSize=rem+'px';
        console.log(rem);
    }
    win.addEventListener('resize',function () {
        refreshRem();
    },false);
    win.addEventListener('pageshow',function (e) {
        if(e.persisted){
            refreshRem();
        }
    },false);
    refreshRem();
})(window);
