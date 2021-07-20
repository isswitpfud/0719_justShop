/* eslint-disable */

$(function () {
    //mainMenu
    $("li.mainLi").mouseover(function () {
        $("li.mainLi>ul.subMenu").stop().slideDown(800);
    });

    $("li.mainLi").mouseout(function () {
        $("li.mainLi>ul.subMenu").stop().slideUp(300);
    });

    $("li.mainLi").mouseover(function () {
        $("#navBg").stop().slideDown(500);
    });

    $("li.mainLi").mouseout(function () {
        $("#navBg").stop().slideUp(300);
    });




    /*slide영역*/

    setInterval(fnslideShow, 2000);
    function fnslideShow() {
        $("#slide").animate(
            {"margin-top": "-300px"},
            1000,
            function () {
                $("#slide>a:nth-child(1)")
                    .insertAfter("#slide>a:nth-child(3)");

                $("#slide").css({
                    "margin-top": "0px"
                });
            }
        );
    }


    //멀티탭영역

    $("button.Btn").click(function () {
        $("button.Btn").css({
            "border": "1px solid #aaa",
            "background-color": "#eee"
        });

        $(this).css({
            "border-bottom-color": "#fff",
            "background-color": "#fff"
        });


        $("div.tabContents").css({
            "display": "none"
        });

        var dataLink = $(this).attr("data-link");

        $("#" + dataLink).css({
            "display": "block"
        });
    });

    // ** 멀티탭버튼 구현
    // $("button.Btn").click(function () {   -->버튼에 class="selected"적용시
            // $("button.Btn").removeClass("selected"); =클릭했을 때, selected를 제거
            // $(this).addClass("selected"); 클릭한 this를 셀렉터로 클레스를 지정
    // });

    // **탭 콘텐츠 --> datalink설정
    // var dataLink = $(link).attr("data-link"); -->attr:속성 
    // var 변수안에는 클릭한 data-link의 버튼.내용이 저장되있음

    // $("div.tabContents").css({"dispaly":"block"});
    //  $("#"+dataLink).css({"dispaly":"block"});



    // 레이어 팝업 구현
    $("tr#popupPoint").click(function () {
        $("#popupArea").css({"display": "block"});
    });

    $("#popupBtn").click(function () {
        $("#popupArea").css({"display": "none"});
    });


}); //끝
