window.onscroll = function fireFunctions() { stickyHeader(), progressBar() }

const navbar = document.getElementById("sticky-nav");

function stickyHeader() {
    if (window.pageYOffset >= 70) {
        navbar.classList.add("sticky");
        navbar.classList.remove("d-none");

    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("d-none");

    }
}

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}