window.addEventListener('DOMContentLoaded', function () {
    var index = document.querySelector('#index');
    var shop = document.querySelector('#Shop');
    var About = document.querySelector('#About');
    var Contact = document.querySelector('#Contact');
    var header = document.querySelector('header');
    var section = document.querySelectorAll('main section');

    for (var i = 0; i < section.length; i++) {
        section[i].addEventListener('click', function () {
            if (this.id == "Shop") {
                this.classList.add('active');
                About.classList.remove('active');
                Contact.classList.remove('active');
            } else if (this.id == "About") {
                this.classList.add('active');
                shop.classList.add('active'); 
                Contact.classList.remove('active');
            } else if (this.id == "Contact") {
                this.classList.add('active');
                shop.classList.add('active');
                About.classList.add('active');
            };

            header.addEventListener('click', function () {
                shop.classList.remove('active');
                About.classList.remove('active');
                Contact.classList.remove('active'); 
            })
        })
    };
    var post = 0;
    window.addEventListener('scroll', function(){
        var st = window.scrollTop;
        if(st > post){
          $('#Shop .Content_box').style.cssText = "transform:translateY(100vh)"
        }
        
    })



})
