/**
 * lazy loading solution by david walsch : Simple Image Lazy Load and Fade [https://davidwalsh.name/lazyload-image-fade]
 */
(function () {
    [].forEach.call(document.querySelectorAll('noscript'), function (noscript) {
        var img = new Image();
        img.setAttribute('data-src', '');
        noscript.parentNode.insertBefore(img, noscript);
        img.onload = function () {
            img.removeAttribute('data-src');
        };
        img.src = noscript.getAttribute('data-src');
    });
})();

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