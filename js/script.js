/**
 * lazy loading solution by david walsch : Simple Image Lazy Load and Fade [https://davidwalsh.name/lazyload-image-fade]
 */
function lazyLoadingImg() {
    [].forEach.call(document.querySelectorAll('noscript'), function (noscript) {
        var img = new Image();
        img.setAttribute('data-src', '');
        img.setAttribute('class', noscript.classList);
        noscript.parentNode.insertBefore(img, noscript);
        img.onload = function () {
            img.removeAttribute('data-src');
        };
        img.src = noscript.getAttribute('data-src');
    });
}

if (window.addEventListener) {
    window.addEventListener("load", lazyLoadingImg, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", lazyLoadingImg);
}

/**
 * To top arrow
 */
document.getElementById("to-top").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 0);
});

var arrow = document.getElementById('to-top');

window.onscroll = function () {
    // If you want to check distance
    var y = window.pageYOffset;
    if (y > 400) {
        if (!arrow.classList.contains('show')) {
            arrow.classList.add('show');
        }
    } else {
        arrow.classList.remove('show');
    }
};