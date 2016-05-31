//var loginFlag = false;
//var loginHelper = null;
$(document).ready(function(){
    $('.carousel').carousel(
        {
            "pause":"false",
            "interval":1e9
        }
    );
    $('.carousel').on('slide.bs.carousel', function (event) {
        var tag = $(event.relatedTarget).attr("tag");
        var progress = $(event.relatedTarget).attr("progress");

        $('#img_home').attr("src", "images/home.png");
        $('#img_intro').attr("src", "images/intro.png");
        $('#img_gift').attr("src", "images/gift.png");
        $('#img_feedback').attr("src", "images/feedback.png");
        $('#img_related').attr("src", "images/related.png");

        $('#img_' + tag).attr("src", "images/" + tag + "_selected.png");

        //$("#progress").width(progress + "px");
//                $("#progress").css('left', (progress / 2) - 500 + "px");
        $("#progress").animate({width: progress, left: (progress / 2) - 300}, 500);
        playAnimation(tag);
    });

    playAnimation("home");

});

function switchtimeliner(timelinerIndex){
    $('.carousel').carousel(timelinerIndex);
}

function playAnimation(tag){
}
