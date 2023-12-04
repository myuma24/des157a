(function(){
    'use strict'
    console.log('reading JS');

    document.getElementById('startgame').addEventListener('click', function() {
        playClick();
        document.getElementById('container').style.display = 'none';
        document.getElementById('pick-character').style.display = 'block';
    });


/* THE OVERLAY FOR RULES */
    var modal = document.getElementById("rulesModal");
    var rulesbutton = document.getElementById("rules");
    var span = document.getElementsByClassName("close")[0];

    rulesbutton.onclick = function() {
        playClick();
        modal.classList.add("show");
    } 
    //on click adds the class show that makes the overlay appear
    //below are the different ways a user can "exit" the overlay
    span.onclick = function() {
        playClick();
        modal.classList.remove("show");
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
        }
    }
    
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
        modal.classList.remove("show");
        }
    };

/* PICK CHARACTER FORM VALUES */
    const select = document.querySelector("#other");
    const char1 = document.querySelector("#char1");
    const char2 = document.querySelector("#char2");

    // Function changes HTML for plays by assing character on Name Char
    function characterAssign(Name, Char){
        if (Char === char1){
            Char.innerHTML = `<img src = "images/${Name}.PNG" alt = "${Name}" id = "char1" style = "transform: scaleX(-1);">`;
            console.log('i am char1');
        } else {
            Char.innerHTML = `<img src = "images/${Name}.PNG" alt = "${Name}" id = "char2">`;
            console.log('i am char2');
        }
    }

    select.addEventListener('click', function(event){
        event.preventDefault();
        playClick();

        const selectedvalue = document.querySelector('#playerone').value;
        const selectedvalue2 = document.querySelector('#playertwo').value;
       
        if (selectedvalue === selectedvalue2) {
            alert("Please pick two different characters");
            //Compares the values, if both players pick the same character, alert will appear. 
            return;
        }

        characterAssign(selectedvalue, char1);
        characterAssign(selectedvalue2, char2);

        document.getElementById('actions').style.display = 'block';
        document.getElementById('healthbars').style.display = 'flex';
        document.getElementById('healths').style.display = 'flex';
        document.getElementById('characterpick').style.display = 'flex'
        document.getElementById('pick-character').style.display = 'none';
    });

/* ATTACK FUNCTIONS */

    const atk = document.querySelectorAll(".attacks");
    const heal = document.querySelector(".heal");
    const battle = document.querySelector("#battle");

    const player1 = {
        score: 30,
        gameEnd: 0,
        name: 'Player 1',
        id: 'player1',
        healthid: 'health1'
    };

    const player2 = {
        score: 30,
        gameEnd: 0,
        name: 'Player 2',
        id: 'player2',
        healthid: 'health2'
    };
    
    let playerTurn = true;
    
    function playerAttack(attacker, target){
        const spell = event.target.innerHTML;
        const hitOrMiss = Math.random() < 0.5; // 50% chance to hit or miss
        battle.innerHTML = `${attacker.name} picked ${spell}.`;

        if (hitOrMiss) {
            const Power = Math.ceil(Math.random() * 10);
            target.score -= Power; // subtract Power from player2's score
            document.getElementById(`${target.id}Score`).innerHTML = `${target.name} Health: ${target.score}`;
            battle.innerHTML += `<br> Hit! ${target.name} lost ${Power} HP. <strong>${attacker.name} goes again.</strong>`;
            adjustHealth(target, Power, false);

            // Add shake animation
            char1.classList.add('shake');
            char2.classList.add('shake');

            char1.addEventListener('animationend', function() {
                char1.classList.remove('shake');
            });
             
             char2.addEventListener('animationend', function() {
                char2.classList.remove('shake');
            });

        } else {
            battle.innerHTML += `<br> Attack missed, <strong>${target.name}'s</strong> turn.`;
            playerTurn = !playerTurn; // switch turns
        }
    }

    const attackFunction = function (event) {
        if (playerTurn) {
            playerAttack(player1, player2);

        } else {
            playerAttack(player2, player1);
        }
    
        if (player1.score <= 0) {
            // Show the restart button
            document.getElementById('actions').innerHTML = `<p id="battle"><strong>Player 2 wins!</strong></p><button id="restart">Restart Game</button>`;
        } else if (player2.score <= 0) {
            // Show the restart button
            document.getElementById('actions').innerHTML = `<p id="battle"><strong>Player 1 wins!</strong></p><button id="restart">Restart Game</button>`;
        }
         
        document.getElementById('restart').addEventListener('click', function() {
            // Reset the game state
                location.reload();
        });
    };
        


    // Makes attack function do its thing when button of atk is clicked :D
    for (const eachBtn of atk) {
        eachBtn.addEventListener("click", attackFunction);
        playClick();
    }  
    
/* HEALING FUNCTION */

    /* This is the healing version of the attack function, instead of subtracting health it adds health, also has a higher chances of success */
    function playerHeal(target){
        const spell = event.target.innerHTML;
        const hitOrMiss = Math.random() < 0.8 // 80% chance for Math.random to generate a number less than 0.7
        battle.innerHTML = `<strong>Player 1</strong> chose ${spell}.`;

        if (hitOrMiss) {
            const Power = Math.ceil(Math.random() * 6);
            target.score += Power; // add Power from player2's score
            document.getElementById(`${target.id}Score`).innerHTML = `${target.name} Health: ${target.score}`;
            battle.innerHTML += `<br> Healed ${Power} HP. <strong>${target.name} go again.</strong>`;

            adjustHealth(target, Power, true);
        }
        else {
            battle.innerHTML += `<br> Heal interupted, <strong>${target.name}'s</strong> turn.`;
            playerTurn = !playerTurn; // switch turns
        }
    }

    const healing = function (event) {
        if (playerTurn) {
            playerHeal(player1);
        } else {
            playerHeal(player2);
        }
    }

    heal.addEventListener("click", healing);

    function playClick(){
        const audio = new Audio('sounds/click.mp3');
        audio.play();
    }

/* HEALTH BARS */

    function adjustHealth(player, heal, isHealing){

        const health = document.getElementById(`${player.healthid}`);
        const currentWidth = health.offsetWidth;
        const healthratio = heal/30;
        
        if (player.score <= 0){
            const newWidth = 0;
            health.style.width = newWidth + 'px';
        } else if (isHealing) {
            const newWidth = currentWidth + healthratio*220;
            health.style.width = newWidth + 'px';
        } else {
            const newWidth = currentWidth - healthratio*220;
            health.style.width = newWidth + 'px';
        }
    }

})();