const exampleModal = document.getElementById('exampleModal');
const myVideo = document.querySelector('.video-testimonial');

exampleModal.addEventListener('shown.bs.modal', event => {
  myVideo.play();
});


exampleModal.addEventListener('hidden.bs.modal', event => {
  myVideo.pause();
});