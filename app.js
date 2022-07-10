// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


const switchBtn = document.querySelector(".switch-btn");
const container = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
  preloader.classList.add("hide-preloader");
});


switchBtn.addEventListener("click", function() {
    if(!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide");
        container.pause();
    } else {
        switchBtn.classList.remove("slide");
        container.play();
    }
})

