const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {

    if (window.scrollY >= 40) {

        nav.classList.add('bgwhite');

    } else {

        nav.classList.remove('bgwhite');

    }


})



var sign = document.getElementById('signup');

sign.addEventListener('click', ()=>{

    alert(`Thank You for Sign Up`);


})


var log = document.getElementById('login');

log.addEventListener('click', ()=>{

    alert(`Thank You for Log In`);


})

var buy = document.getElementsByClassName('buybuton');

for(var i =0; i<=buy.length; i++){


    
    buy[i].addEventListener('click', ()=>{
        
        alert(`Thanks for Ordering`);
        
        
    })

}