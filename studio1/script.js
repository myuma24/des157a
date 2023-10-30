(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');

    const madLib = document.querySelector('#madlib');

    const text = document.querySelector('#text');

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
            document.getElementById('overlay').className = 'showing';

            /* Change to over lay popup instead of just a text */
            myText = `You sense a tickle down your spine as you get further and further into the woods. The sun is going down and the sky is getting dim really quickly. Drifting through the seemingly soundless forest, you hear a <strong>${word1}</strong>. You turn and <strong>${word2}</strong> in the opposite direction. Tripping against the leaves and branches you begin to fall, grabbing the nearest <strong>${word3}</strong> you catch yourself. You gasp and breathe feeling a <strong>${word4}</strong> grip around your <strong>${word5}</strong>. Kicking and <strong>${word6}</strong> the air into nothingness, you regain your position and begin <strong>${word7}</strong> again. You spot a small cabin and crawl into the <strong>${word8}</strong> before slamming the door shut, waiting out the night. You look outside and see <strong>${word9}</strong> floating around with no good explanation. The spirits are here to take you you thought and your heart is <strong>${word10}</strong>. May god have mercy on your soul.`;

            const textFields = document.querySelectorAll('input[type=text]');
            for( let i=0; i<textFields.length; i++ ){
            textFields[i].value = '';}

            text.innerHTML = myText;
        }
        document.querySelector('.close').addEventListener('click',function(event){
            event.preventDefault();
            document.getElementById('overlay').className = 'hidden';
    
        })
    
        document.addEventListener('keydown',function(event){
            if (event.key === 'Escape'){
                document.getElementById('overlay').className = 'hidden';
            }
        })

    });

    

})();