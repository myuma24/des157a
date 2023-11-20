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
    /*     function generateRandomPosition() {
        
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;

        var randomX = Math.random()*0.6*screenWidth+0.20*screenWidth;
        var randomY = Math.random()*0.4*screenHeight+0.1*screenHeight;

        return [randomX,randomY];
    } */

    function init()
    {    
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;    
        imageStyles();

        document.getElementById('gallery').onmousedown = function(event)
        {
            if(frontPolaroid != null && event.target == this)
            {
                generateRandomPosition(frontPolaroid);
            }
        };
    }
    
    function imageStyles() {
        var allImages = document.getElementById('gallery').querySelectorAll('img');
        let textDiv = document.getElementById("text");
        let imageTexts = ["This is my grandma! This was one of the last photos we took of her before she passed away. On this day we got together to make our yearly traditional ZhongZi, a chinese dish consisting of sticky rice wrapped in banana leaf then steamed. Before she left we have her a bunch of veggies we grew in our backyard and she was very happy. I miss her very much.","This was taken right after I was born. I was a heavy baby apparently, 8.2lbs. I was very easy to push out though and my mom was thankful for that. One thing interesting to note is that my dad still has that outfit, he wears it in the winter to sleep.", "This was my first time at the carnival with my parents. My hometown holds a carnival every year but after COVID, theres no longer a carnival. I haven't seen it come by for a while now.","This was apparently our first car in the family. I don't know what make or model it was but it was stolen overnight! My dad says that it was because we had an unlucky liscense plate. My parents are pretty supersticious and 4 is considered an unlucky number because 4 sounds similiar to the word death in chinese.","This was my dad when he was younger. Taken a few years after marrying my mom. My mom tells me my dad tried really hard to go out with her and she eventually gave him a change. They've been to get for 30 years now!","This was my mom when she was younger, taken a few years years after marrying my dad. Doesn't she look so pretty? Much of my family members say she looked a lot like me when I was a baby.","This is me and my sister when we were younger with our now sister-in-law Jackie. She used to babysit us when we were younger and took car of us. It's kind of crazy to think she is now married to my brother.","This is my brother with me and my sister outside the SCJ art museum. I honestly do not remember this day but I just find it funny that I look so much like a little boy in this photo. I remember the dress my sister is wearing, my mom have that dress to my cousin when she gave birth to her second daughter.","This is my mom standing in our new home! My parents previously lived with my grandma and grandpa in a tiny one bedroom apartment but bought a house in 2002 after giving birth to me. It definately needed a makeover and around, 2011, my dad completely remodeled the entire home, all by himself! So it is safe to say that our kitchen no longer looks like that.","This is our first family photo! From top to bottom is my brother then my mom and dad and then me and my sister. We don't take many family photos, maybe once every decade so looking at ths phot is very bittersweet. My siblings all have graduated college and I will be graduating soon. My parents have grown white hairs and wrinkles. It really shows how time has just shot right past us.","This is a photo of me, my sister, and my mother with our grandparents. I remember this day, getting dressed up all pretty to visit our grandparents. My grandma wanted photos because of how pretty we looked. I miss this moment, the dress I'm wearing in this photo is one of my favorites.","This is my brother! When he was around maybe 8 or 9, around the same age as me in the photos you see. This was before he moved to America. My parents say he was a smart and energetic even as a child. Now he's pretty quiet but still smart. ","This is my grandma on my dads side with my brother. This is the only photo we have of her. I've never met her before mainly because I was too young to return back to China and she passed away before I could. I wish I had got to known her better, she sounded like a wonderful person according to my dad.","This is a family photo of my moms family. The women sitting on the chair is my great grandmother. The younger children are my mom and her siblings. My grandma is the one fourth from the left and my grandpa is next to her. It's really crazy to see my grandma and grandpa so young. I've only ever known them when they were much older.","This was on my sisters birthday sitting on the lap of my dad!. I included this photo because of some of the details are very important. When we were younger, we would always go to the mall and stop by this jewlery store. They would give us each a balloon to take home every time. They are still open to this day, I wonder if they'll remember us. The penguin is my childhood teddybear that I still have to this day. He now sits on my dresser with other penguins.","Me being held by my dad for the first few times. I know I am crying in this photo but I was a very quiet child that rarely ever cried. This was just a one time thing I swear!","This was my grandpa at the airport. I believe this was the first few years my grandpa came to America. He would go back and fourth to bring my grandma then my parents and her siblings. My grandparents on my dads side stayed in China.","This was during Christmas. My parents went to the mall as they would decorate every year. While the decorations haven't change the shops sure have. The See's Candy you see being my mother just recently closed down. I remember we would always go there to get a free sample of their chocolate. Good ol' memories."];
        
        for(var i = 0; i < allImages.length; i++) {
            var imageToWrap = allImages[i];
            imageToWrap.classList.add('image');
            var polaroidWrapper = document.createElement('div');
            polaroidWrapper.classList.add('polaroid');
            wrap(imageToWrap, polaroidWrapper);
            generateRandomPosition(polaroidWrapper);
    
            polaroidWrapper.onmousedown = function(event) {
                bringToFront(event);
            };
            (function(index) { 
                /*click event listener to the polaroidWrapper*/                
                polaroidWrapper.addEventListener('click', function(event){
                    event.preventDefault(); 
                    /*captured index to select the corresponding text*/                 
                    let myText = imageTexts[index];
                    console.log('index:', index); // log the index
                    console.log('myText:', myText); // log the text
                    textDiv.innerHTML = myText;
                });
            })(i);
        }
    }
    function bringToFront(e)
    {
        /* this function when defines how the image behaves when it is click, when the user clicks the image or poloriod div, it will scale tp 2.5 and if the user is still clicking the image it will rotate the image. if the user clicks out of the image it with return to its old size defined by the randompositionrotation function */
        if(frontPolaroid != null)
        {
            generateRandomPosition(frontPolaroid);
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

    /* this is the function that places all the images in random positions using variables that define different x and y values and a random degree function that transforms and scales the image. */
    function generateRandomPosition(polaroidDiv)
    {
        var randomDegrees = Math.random()*180-90;
        polaroidDiv.style.transform = 'rotate('+randomDegrees+'deg) scale(1.0)';

        var randomX = Math.random()*0.5*screenWidth+0.25*screenWidth;
        polaroidDiv.style.left = randomX+'px';

        var randomY = (Math.random()*0.6*screenHeight+0.13*screenHeight);
        polaroidDiv.style.top = randomY+'px';    

        polaroidDiv.style.zIndex = pileZIndex;
    }
    function wrap(el, wrapper) 
    {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }
})(); 