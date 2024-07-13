const list = document.querySelectorAll('.list');

function hoverLink() {

    this.querySelector('.indicator').style.display = 'block';
}

function unhoverLink() {
    this.querySelector('.indicator').style.display = 'none';
}

list.forEach((item) => {
    item.addEventListener('mouseenter', hoverLink);
    item.addEventListener('mouseleave', unhoverLink);
});


//
function playVideo() {
    const video = document.querySelector('.section2 .content .image .video');
    const initialImage = document.querySelector('.section2 .content .image .initial-image');

    initialImage.style.display = 'none';
    video.style.display = 'block';
    video.play();
}

function stopVideo() {
    const video = document.querySelector('.section2 .content .image .video');
    const initialImage = document.querySelector('.section2 .content .image .initial-image');

    video.pause();
    video.currentTime = 0;
    video.style.display = 'none';
    initialImage.style.display = 'block';
}

//
const video = document.querySelector('.section2 .content .image .video');
const initialImage = document.querySelector('.section2 .content .image .initial-image');
const playPauseButton = document.querySelector('.play-pause-button');
const videoProgress = document.querySelector('.video-progress');

playPauseButton.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
});

video.addEventListener('timeupdate', function () {
    const progress = (video.currentTime / video.duration) * 100;
    videoProgress.value = progress;
});

videoProgress.addEventListener('input', function () {
    const progress = videoProgress.value;
    video.currentTime = (progress * video.duration) / 100;
});

video.style.display = 'none';
initialImage.style.display = 'block';

//
document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var blurBackground = document.querySelector('.blur-background');

    if (scrollPosition > 50) {
        blurBackground.classList.add('moved');
    } else {
        blurBackground.classList.remove('moved');
    }
});

//
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

//
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

//