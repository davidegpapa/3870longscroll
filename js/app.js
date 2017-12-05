

$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $("#banner").offset();
        $(".post").each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                var newDescr = $(this).find(".description").text();
                var oldDescr = $( "#banner" ).html();

                $("#banner").html(newDescr);
                if(newDescr !== oldDescr) {
                    $( "#banner" ).css('opacity', 0.4).animate({ 'opacity': '1',}, 200);
                return;
                }
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });

});
var describe = document.getElementById("describe");
$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $("#describe").offset();
        $(".gear").each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                var newDescr = $(this).find(".description").text();
                var oldDescr = $( "#describe" ).html();

                $("#describe").html(newDescr);
                if(newDescr !== oldDescr) {
                    $( "#describe" ).css('opacity', 0.4).animate({ 'opacity': '1',}, 200);
                return;
                if (y < 1000) {describe.style.display = "none";}
                }
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });

});
