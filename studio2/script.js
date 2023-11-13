(function(){
    'use strict'
    console.log('running js');

    
    let frontPolaroid;
    let pileZIndex = 1;
    let screenWidth;
    let screenHeight;
    init();

/*      window.onload = function randomRotation(){
        var images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++) {
            var randomDegrees = Math.random()*180-90;
            images[i].style.transform = 'rotate(' + randomDegrees + 'deg)';
        }
    };

    
    for(var i = 0; i < images.length; i++) {
        var position = generateRandomPosition();
        images[i].style.position = 'absolute';
        images[i].style.left = position[0] + 'px';
        images[i].style.top = position[1] + 'px';
    }

/*     for(var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function() {
            var randomDegrees = Math.random()*20-10;
            images[i].style.position = 'absolute';
            images[i].style.transform = 'scale(2.5)';
        });
    }; */

/*     function onclick(){
        var one = document.getElementById('#img1')
        one.addEventListener('click', function(){
            one.style.transform = 'scale(2.5)';
        });
        onclick();

    }  */

    function init()
    {    
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;    
        imageStyles();
        document.getElementById('gallery').onmousedown = function(event)
        {
            if(frontPolaroid != null && event.target == this)
            {
                randomPositionAndRotation(frontPolaroid);
            }
        };
    }
    function imageStyles()
    {
        var allImages = document.getElementById('gallery').querySelectorAll('img');
        
        for(var i = 0; i < allImages.length; i++)
        {
            var imageToWrap = allImages[i];
            imageToWrap.classList.add('image');
            var polaroidWrapper = document.createElement('div');
            polaroidWrapper.classList.add('polaroid');
            wrap(imageToWrap, polaroidWrapper);

            
            randomPositionAndRotation(polaroidWrapper);
            
            polaroidWrapper.onmousedown = function(event)
            {
                bringToFront(event);
            };
        }    
    }
    function bringToFront(e)
    {
        if(frontPolaroid != null)
        {
            randomPositionAndRotation(frontPolaroid);
        }
        var polaroid = e.target; 
        if(polaroid.nodeName == 'IMG')
        {
            polaroid = polaroid.parentNode;
        }
        var randomDegrees = Math.random()*20-10;
        polaroid.style.transform = 'rotate('+randomDegrees+'deg) scale(2.5)';
        polaroid.style.left = 42.5+'vw';
        polaroid.style.top = 25+'vh';
        polaroid.style.zIndex = '100';
        frontPolaroid = polaroid;
    }
/*     function generateRandomPosition() {
        
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;

        var randomX = Math.random()*0.6*screenWidth+0.20*screenWidth;
        var randomY = Math.random()*0.4*screenHeight+0.1*screenHeight;

        return [randomX,randomY];
    } */

    function randomPositionAndRotation(polaroidDiv)
    {
        var randomDegrees = Math.random()*180-90;
        polaroidDiv.style.transform = 'rotate('+randomDegrees+'deg) scale(1.0)';
        var randomX = Math.random()*0.6*screenWidth+0.20*screenWidth;
        polaroidDiv.style.left = randomX+'px';
        var randomY = (Math.random()*0.4*screenHeight+0.1*screenHeight);
        polaroidDiv.style.top = randomY+'px';    
        polaroidDiv.style.zIndex = pileZIndex;
        pileZIndex++;
    }
    function wrap(el, wrapper) 
    {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }
    
})(); 