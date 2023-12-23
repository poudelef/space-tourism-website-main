document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.querySelector('.Home').addEventListener('click',function(){
        window.location.href = 'index.html'
    })

    document.querySelector('.Destination').addEventListener('click',function(){
        window.location.href = 'destination-moon.html'
    })

    document.querySelector('.Crew').addEventListener('click',function(){
        window.location.href = 'crew-commander.html'
    })

    document.querySelector('.Technology').addEventListener('click',function(){
        window.location.href = 'technology-capsule.html'
    })
});
