var shareButton = document.querySelector('button');
var socialMedia = document.querySelector('.author-social-media');

socialMedia.classList.add('invisible');

shareButton.addEventListener ('click', function() {
    shareButton.classList.toggle('got-clicked');
    socialMedia.classList.toggle('invisible');

})


