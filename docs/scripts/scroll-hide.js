var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    siteHeader = document.getElementsByClassName("site-header")[0];

    if (prevScrollpos > currentScrollPos) {
        siteHeader.style.top = "0";
    } else {
        siteHeader.style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
}