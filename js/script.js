// scroll image animation
// window.onload = function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const delay = Math.random() * 100; 
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'scale(1) translate(0, 0)';
          
        }, delay);
      }
    });
  },  { rootMargin: '100px 0px' });

  const hiddenElements = document.querySelectorAll('button');
  hiddenElements.forEach((el) => observer.observe(el));
// };



// img lazy loading
const images = document.querySelectorAll('img');
images.forEach(image => {
  image.setAttribute('loading', 'lazy');
});


// video elements
const videos = document.querySelectorAll("video");
videos.forEach(video => {
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    // video.controls = true;
    // video.preload = "none";
});




// links open in new tab
// var links = document.querySelectorAll('a');
// links.forEach(function(link) {
//     link.setAttribute('target', '_blank');
// });