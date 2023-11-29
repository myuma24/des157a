(function(){
    'use strict'
    console.log('reading JS');

    document.getElementById('startgame').addEventListener('click', function() {
        document.getElementById('gamecontrol').style.display = 'none';
        document.getElementById('pick-character').style.display = 'block';
    });


/* THE OVERLAY FOR RULES */
    var modal = document.getElementById("rulesModal");
    var rulesbutton = document.getElementById("rules");
    var span = document.getElementsByClassName("close")[0];

    rulesbutton.onclick = function() {
     modal.classList.add("show");
    } //on click adds the class show that makes the overlay appear
    //below are the different ways a user can "exit" the overlay
    span.onclick = function() {
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

/* PICK CHARACTER VALUE? */
    const select = document.querySelector("#other");
    const char1 = document.querySelector("#char1");
    const char2 = document.querySelector("#char2");

    select.addEventListener('click', function(event){
        event.preventDefault();
        const selectedvalue = document.querySelector('#playerone').value;
        const selectedvalue2 = document.querySelector('#playertwo').value;

        if (selectedvalue === selectedvalue2) {
            alert("Please pick two different characters");
            return;
        } else if (selectedvalue === "butch") {
            char1.innerHTML = '<img src = "images/butch.PNG" alt "butch" id = "char1" style = "transform: scaleX(-1);">';
        } else if (selectedvalue == "pidge") {
            char1.innerHTML = '<img src = "images/pigdy.PNG" alt "pidge" id = "char1" style = "transform: scaleX(-1);">';
        } else {
            char1.innerHTML = '<img src = "images/goat.PNG" alt "goat" id = "char1" style = "transform: scaleX(-1);">';
        }

        if (selectedvalue2 === "butch" ){
            char2.innerHTML = '<img src = "images/butch.PNG" alt "butch" id = "char1">';
        } else if (selectedvalue2 == "pidge") {
            char2.innerHTML = '<img src = "images/pigdy.PNG" alt "pidge" id = "char1">';
        } else {
            char2.innerHTML = '<img src = "images/goat.PNG" alt "goat" id = "char1">';
        }

        document.getElementById('actions').style.display = 'block';
        document.getElementById('healthbars').style.display = 'flex';
        document.getElementById('characterpick').style.display = 'flex'
        document.getElementById('pick-character').style.display = 'none';
    });

/* ATTACK FUNCTIONS */

    const atk = document.querySelectorAll(".attacks");
    const heal = document.querySelector(".heal");
    const battle = document.querySelector("#battle");

    let player1Score = 30;
    let player2Score = 30;
    let player1Turn = true; // start with player 1's turn
    
    const attackFunction = function (event) {
        if (player1Turn) {
            const spell = event.target.innerHTML;
            const hitOrMiss = Math.random() < 0.5; // 50% chance to hit or miss
            battle.innerHTML = `Player 1 chose ${spell}.`;
    
            if (hitOrMiss) {
                const Power = Math.ceil(Math.random() * 10);
                player2Score -= Power; // subtract Power from player2's score
                document.getElementById('player2Score').innerHTML = `Player 2 Health: ${player2Score}`;
                battle.innerHTML += `<br> Hit! Minus ${Power} HP`;
            }
            else {
                battle.innerHTML += "<br> Attack missed, next players turn.";
                player1Turn = !player1Turn; // switch turns
            }
        } else {
            const spell = event.target.innerHTML;
            const hitOrMiss = Math.random() < 0.5; // 50% chance to hit or miss
            battle.innerHTML = `Player 2 chose ${spell}.`;
    
            if (hitOrMiss) {
                const Power = Math.ceil(Math.random() * 10);
                player1Score -= Power; // subtract Power from player1's score
                document.getElementById('player1Score').innerHTML = `Player 1 Health: ${player1Score}`;
                battle.innerHTML += `<br> Hit! Minus ${Power} HP`;
            }
            else {
                battle.innerHTML += "<br> Attack missed, next players turns.";
                player1Turn = !player1Turn; // switch turns
            }
        }
    
        if (player1Score <= 0) {
            battle.innerHTML += `<br> Player 2 wins!`;
            // End the game
            this.removeEventListener("click", attackFunction);
            // Show the restart button
            document.getElementById('actions').innerHTML = `<p id="battle"> Player 2 wins!</p><button id="restart">Restart Game</button>`;
        } else if (player2Score <= 0) {
            // End the game
            this.removeEventListener("click", attackFunction);
            // Show the restart button
            document.getElementById('actions').innerHTML = `<p id="battle"> Player 1 wins!</p><button id="restart">Restart Game</button>`;
        }  
        
            
        document.getElementById('restart').addEventListener('click', function() {
            // Reset the game state
                location.reload();
        });
    };
        

    for (const eachBtn of atk) {
        eachBtn.addEventListener("click", attackFunction);
    }

    const healing = function (event) {
        if (player1Turn) {
            const spell = event.target.innerHTML;
            const hitOrMiss = Math.random() < 0.5; // 50% chance to hit or miss
            battle.innerHTML = `Player 1 chose ${spell}.`;
    
            if (hitOrMiss) {
                const Power = Math.ceil(Math.random() * 3);
                player1Score += Power; // subtract Power from player2's score
                document.getElementById('player1Score').innerHTML = `Player 1 Health: ${player1Score}`;
                battle.innerHTML += `<br> Healed ${Power} HP`;
            }
            else {
                battle.innerHTML += "<br> Heal interupted, next players turn.";
                player1Turn = !player1Turn; // switch turns
            }
        } else {
            const spell = event.target.innerHTML;
            const hitOrMiss = Math.random() < 0.5; // 50% chance to hit or miss
            battle.innerHTML = `Player 2 chose ${spell}.`;
    
            if (hitOrMiss) {
                const Power = Math.ceil(Math.random() * 3);
                player2Score += Power; // subtract Power from player1's score
                document.getElementById('player2Score').innerHTML = `Player 2 Health: ${player2Score}`;
                battle.innerHTML += `<br> Healed ${Power} HP`;
            }
            else {
                battle.innerHTML += "<br> Heal interupted, next players turn.";
                player1Turn = !player1Turn; // switch turns
            }
        }
    }

    heal.addEventListener("click", healing);

})();