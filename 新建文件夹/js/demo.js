$(function () {
    var y0=0;
    var y1=0;
    var num = 0;
    var index = 0;
    function move (index){
        num=0;
        $("#footer li").removeClass("red");
        $("#footer li:eq("+index+")").addClass("red");
        $("#top li").addClass("select selected");
        $("#top li>div img").addClass("first").removeClass("one");
        $("#top li:eq(" + index + ")").addClass("select").removeClass("selected");
        $("#top li:eq(" + index + ")>div img").removeClass("one");
    }
    $("#footer li").on("click", function () {
        index = $(this).index();
        move(index);
    });
  

    $(".title").on("click", function () {
        var len = $("#top li:eq(" + index + ")>div img").length-1;
        if (num < len) {
            num++;
            $("#top li:eq(" + index + ")>div img:eq("+num+")").addClass("one");

        }else{
            if(index>$("#footer li").length-1){
                index=-1;
            }
            index++;
            move(index);
        }
    })
})