$(document).ready(function () {
    var $progressBar = $('.progress-bar');

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar
    });

    function startProgressBar() {
        $progressBar.css({width: '0%'});
        $progressBar.animate({width: '100%'}, 5000);
    }

    function resetProgressBar() {
        $progressBar.stop(true);
        $progressBar.css({width: '0%'});
        $progressBar.animate({width: '100%'}, 5000);
    }
});


//    let hovi= document.querySelector(".drop-hakimizda")
// hovi.addEventListener("mouseover" ,func)
// function func() {
//
//      let  hovier = document.querySelector(".hakkimizda")
//
// hovier.style.display="block"
//
//
//
// }
window.addEventListener('scroll', function () {
    var myheader = document.getElementById("header")
    if (window.scrollY > 450) {
        myheader.classList.add("scrol-color")


    } else {
        myheader.classList.remove("scrol-color")
    }


})

var nomre = "+994 051 494 03 98"

function whatsap() {
    let number = document.getElementById("whatsap")

    if (!number.classList.contains("number1")) {
        number.classList.add("number1")
    } else {
        number.classList.remove("number1")
    }


}

// function bas(){
//     let basaa= document.getElementById("button")
//     if (!basaa.classList.contains("rui")){
//         basaa.classList.add("rui")
//
//
//     }
//
//     else if (!basaa.classList.contains("flo")){
//         basaa.classList.add("flo")
//
//     }
//     else if (!basaa.classList.contains("glo")){
//         basaa.classList.add("glo")
//
//     }else if (basaa.classList.contains("rui")){
//         basaa.classList.remove("rui")
//
//     }
//
//
//
//
//     else { basaa.classList.remove("glo")
//
//     }
//
// }
// function zoom() {
//     let zoomii = document.querySelector(".qalerya-fotos")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else if (zoomii.classList.contains("zoom-zoom")) {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom1() {
//     let zoomii = document.querySelector(".qalerya-fotos1")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else if (zoomii.classList.contains("zoom-zoom")) {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom2() {
//     let zoomii = document.querySelector(".qalerya-fotos2")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else if (zoomii.classList.contains("zoom-zoom")) {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom3() {
//     let zoomii = document.querySelector(".qalerya-fotos3")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else if (zoomii.classList.contains("zoom-zoom")) {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom4() {
//     let zoomii = document.querySelector(".qalerya-fotos4")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom5() {
//
//     let zoomii = document.querySelector(".qalerya-fotos5")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom6() {
//     let zoomii = document.querySelector(".qalerya-fotos6")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom7() {
//     let zoomii = document.querySelector(".qalerya-fotos7")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }
//
// function zoom8() {
//     let zoomii = document.querySelector(".qalerya-fotos8")
//     if (!zoomii.classList.contains("zoom-zoom")) {
//
//         zoomii.classList.add("zoom-zoom")
//     } else if (zoomii.classList.contains("zoom-zoom")) {
//         zoomii.classList.remove("zoom-zoom")
//     }
//
// }


const slides = document.querySelectorAll(".sliders");
const slidCount = slides.length;
let currentSlide = 0;

function showSlides() {

    currentSlide++;


    if (currentSlide >= slidCount) {
        currentSlide = 0;
    }


    for (let i = 0; i < slidCount; i++) {
        slides[i].style.display = "none";
    }


    for (let i = currentSlide; i < currentSlide + 4; i++) {
        slides[i % slidCount].style.display = "block";
        slides[i % slidCount].style.transition = "1s";
    }
}


showSlides();
setInterval(showSlides, 1000);

function menu() {
    let menu = document.getElementById("menuop")
    let red = document.getElementById("red")
    let grey = document.getElementById("grey")
    let hdst = document.getElementById("hdst")
    let  green  = document.getElementById("green")
    if (!menu.classList.contains("menui")) {
        menu.classList.add("menui")
    } else if (menu.classList.contains("menui")) {
        menu.classList.remove("menui")

    }
    let rotate = document.getElementById("rotate")

    if (!rotate.classList.contains("rotate")) {
        rotate.classList.add("rotate")
    } else if (rotate.classList.contains("rotate")) {
        rotate.classList.remove("rotate")
    }

    if (!red.classList.contains("redi")) {
        red.classList.add("redi")

    } else {
        red.classList.remove("redi")
    }
    if (!grey.classList.contains("greyi")) {
        grey.classList.add("greyi")

    } else {
        grey.classList.remove("greyi")
    }

    if (!hdst.classList.contains("hdst")) {
        hdst.classList.add("hdst")

    } else {
        hdst.classList.remove("hdst")
    }
    if (!green.classList.contains("greennn")) {
        green.classList.add("greennn")

    } else {
        green.classList.remove("greennn")
    }

}
function zoom() {

    const blur = document.querySelectorAll(".fito");

    blur.forEach(phot => {
        phot.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();


            const photo = phot.querySelector(".resimler");

            if (!phot.classList.contains("blur")) {
                phot.classList.add("blur");
                photo.classList.add("scl");
            } else {
                phot.classList.remove("blur");
                photo.classList.remove("scl");
            }
        });
    });
}

zoom();









