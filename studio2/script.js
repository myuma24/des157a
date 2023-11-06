(function(){
    'use strict'
    console.log('running js');

        
    var screenWidth;
    var screenHeight;
    init();

    function init()
    {    
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;    
        allImagesToPolaroids();
        document.getElementById('gallery').onmousedown = function(event)
        {
            if(frontPolaroid != null && event.target == this)
            {
                randomPositionAndRotation(frontPolaroid);      
                frontPolaroid = null;
            }
        };
    }

    //adds polaroid divs around the img tags
    function allImagesToPolaroids()
    {
        var allImages = document.getElementById('gallery').querySelectorAll('img');
        
        for(var i = 0; i < allImages.length; i++)
        {
            var imageToWrap = allImages[i];
            imageToWrap.classList.add('image');
            var polaroidWrapper = document.createElement('div');
            polaroidWrapper.classList.add('polaroid');
            wrap(imageToWrap, polaroidWrapper);
            //random rotation between ?
            randomPositionAndRotation(polaroidWrapper);
            
            polaroidWrapper.onmousedown = function(event)
            {
                bringToFront(event);
            };
        }    
    }

    var frontPolaroid;
    var pileZIndex = 1;
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