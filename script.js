let slideIndex = 1;
showSlides(slideIndex);


//Next/previous controls

function plusSlide(n) {
    showSlides(slideIndex += n);
}



//Thumbnail image controls


function currentSlide(n) {
    showSlides(slideIndex = n);
}





function showSlides(n) {

    let i;

    let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("dot");

    if(n > slides.length) {
        slideIndex = 1
    }


    if(n < 1) {
        slideIndex = slides.length;
    }


    for(i = 0; i < dots.length;i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    let m;
    
    for(m = 0; m < slides.length;m++) {
        slides[m].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}