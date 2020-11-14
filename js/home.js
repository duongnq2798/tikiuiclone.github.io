/*---------------------------------Load More 1----------------------------------*/

$(document).ready(function () {
    $(".moreBox").slice(0, 0).show();
    if ($(".moreBox:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 1).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
});


/*---------------------------------Load More 2----------------------------------*/
$(document).ready(function () {
    $(".moreBox2").slice(0, 0).show();
    if ($(".moreBox:hidden").length != 0) {
        $("#loadMore2").show();
    }
    $("#loadMore2").on('click', function (e) {
        e.preventDefault();
        $(".moreBox2:hidden").slice(0, 1).slideDown();
        if ($(".moreBox2:hidden").length == 0) {
            $("#loadMore2").fadeOut('slow');
        }
    });
});

/*------------------------Check-Box-Radio-------------------------------------------------------------*/
$(function () {
    $("input.radiopick").checkboxradio();
    $("fieldset").controlgroup();
});
/*-----------------------------------Slider-Produc-detail---------------------------------------------*/

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500000,
        values: [100000, 300000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + " đ - " + ui.values[1] + " đ");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + " đ - " +
        $("#slider-range").slider("values", 1) + " đ");
});

/*---------------------Accordion--------------------------------*/
$(function () {
    $("#accordion").accordion({
        collapsible: false
    });
});

/*----------------------------Scroll----------------------------*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $(".thetop").offset().top }, "1000"); return false }) })



/*************Zooom image*********************** */



/**************Click image*************** */
window.onload = function () {
    var image = document.getElementsByClassName("img-confix");
    var image1 = document.getElementById("image-click-1");
    var image2 = document.getElementById("image-click-2")
    var image3 = document.getElementById("image-click-3")
    var image4 = document.getElementById("image-click-4")


    image[0].onclick = function () {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.remove("active-img-border");
        }
        image[0].classList.add("active-img-border");
        image1.style.display = "block";
        image2.style.display = "none";
        image3.style.display = "none";
        image4.style.display = "none";

    }
    image[1].onclick = function () {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.remove("active-img-border");
        }
        image[1].classList.add("active-img-border");
        image1.style.display = "none";
        image2.style.display = "block";
        image3.style.display = "none";
        image4.style.display = "none";

    }
    image[2].onclick = function () {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.remove("active-img-border");
        }
        image[2].classList.add("active-img-border");
        image1.style.display = "none";
        image2.style.display = "none";
        image3.style.display = "block";
        image4.style.display = "none"

    }
    image[3].onclick = function () {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.remove("active-img-border");
        }
        image[3].classList.add("active-img-border");
        image1.style.display = "none";
        image2.style.display = "none";
        image3.style.display = "none";
        image4.style.display = "block";

    }
};


/*************************************** */
$(function () {
    var spinner = $("#spinner").spinner();

    $("#disable").on("click", function () {
        if (spinner.spinner("option", "disabled")) {
            spinner.spinner("enable");
        } else {
            spinner.spinner("disable");
        }
    });
});


/******************Open x close x************************* */
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


/************************************************** */
