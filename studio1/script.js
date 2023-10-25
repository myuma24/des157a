(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');

    const madLib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const word1 = document.querySelector('#word1').value;
        
        const word2 = document.querySelector('#word2').value;
        
        const word3 = document.querySelector('#word3').value;
        
        const word4 = document.querySelector('#word4').value;

        const word5 = document.querySelector('#word5').value;
        
        const word6 = document.querySelector('#word6').value;
        
        const word7 = document.querySelector('#word7').value;
        
        const word8 = document.querySelector('#word8').value;
        
        const word9 = document.querySelector('#word9').value;

        const word10 = document.querySelector('#word10').value;

        /* const myText = `This is noun 1: ${noun1} - This is noun 2: ${noun2} - This is the adjective: ${adj} - This is the verb: ${verb}`;

        //empty strings will always render false so the variabels in the if statement must not be empty to render true and log the innerHTML.

        if (noun1 && noun2 && adj && verb){
            madLib.innerHTML = myText;
        } else {
            alert("Please fill out the entire form");
        }; */

        let myText = " ";

        if (word1 == ""){
            document.querySelector('#word1').focus();
        }
        else if (word2 == "") {
            document.querySelector('#word2').focus();
        }

        else if (word3 == ""){
            document.querySelector('#word3').focus();
        }

        else if (word4 == ""){
            document.querySelector('#word4').focus();
        }
        else if (word5 == ""){
            document.querySelector('#word5').focus();
        }
        else if (word6 == ""){
            document.querySelector('#word6').focus();
        }
        else if (word7 == ""){
            document.querySelector('#word7').focus();
        }
        else if (word8 == ""){
            document.querySelector('#word8').focus();
        }
        else if (word9 == ""){
            document.querySelector('#word9').focus();
        }
        else if (word10 == ""){
            document.querySelector('#word10').focus();
        }
        else {
            myText = `You sense a tickle down your spine as you get further and further into the woods. The sun is going down and the sky is getting dim really quickly. Drifting through the seemingly soundless forest, you hear a ${word1}. You turn and ${word2} in the opposite direction. Tripping against the leaves and branches you begin to fall, grabbing the nearest ${word3} you catch yourself. You gasp and breathe feeling a ${word4} grip around your ${word5}. Kicking and ${word6} the air into nothingness, you regain your position and begin ${word7} again. You spot a small cabin and crawl into the ${word8} before slamming the door shut, waiting out the night. You look outside and see ${word9} floating around with no good explanation. The spirits are here to take you you thought and your heart is ${word10}. May god have mercy on your soul.`;

            const textFields = document.querySelectorAll('input[type=text]');
            for( let i=0; i<textFields.length; i++ ){
            textFields[i].value = '';}
        }

        madLib.innerHTML = myText;

    });

})();