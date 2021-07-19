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




    // 레이어 팝업 구현
    $("#noticePopup").click(function () {
        $("#popupArea").css({
            "display": "block"
        });

    });

    $("#popupBtn").click(function () {
        $("#popupArea").css({
            "display": "none"
        });

    });





}); //끝
