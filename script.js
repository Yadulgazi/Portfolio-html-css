// header toggle

let menubtn = document.getElementById('menubtn')

menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})


// typing

let typed = new Typed('.auto-input',{
    strings: ["Front-End Developer!", "freelancer!", "Digital Marketer!", "YouTuber!"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,

})