var readMore_1 = document.getElementById("read-more-button-1"),
    dots_1 = document.getElementById("dots-1"),
    moreText_1 = document.getElementById("more-1");

readMore_1.addEventListener("click", function() {
    if (dots_1.style.display === "none") {
        dots_1.style.display = "inline";
        readMore_1.innerHTML = "Read more"; 
        moreText_1.style.display = "none";
    } else {
        dots_1.style.display = "none";
        readMore_1.innerHTML = "Read less"; 
        moreText_1.style.display = "inline";
    }
})

var readMore_2 = document.getElementById("read-more-button-2"),
    dots_2 = document.getElementById("dots-2"),
    moreText_2 = document.getElementById("more-2");

readMore_2.addEventListener("click", function() {
    if (dots_2.style.display === "none") {
        dots_2.style.display = "inline";
        readMore_2.innerHTML = "Read more"; 
        moreText_2.style.display = "none";
    } else {
        dots_2.style.display = "none";
        readMore_2.innerHTML = "Read less"; 
        moreText_2.style.display = "inline";
    }
})