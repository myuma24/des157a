(function(){
    'use strict'
    console.log('reading JS');

    const bttns = document.querySelectorAll("#actions button");
    const battle = document.querySelector("#battle");
    const atcks = ["Slice", "Jab", "Cut", "Swing"];

    

    document.getElementById('startgame').addEventListener('click', function() {
        document.getElementById('actions').style.display = 'block';
        document.getElementById('gamecontrol').style.display = 'none';
    });

    //If hitOrMiss is true, the attack hits and a random amount of damage is inflicted. If hitOrMiss is false, the attack misses.
    let player1Score = 30;
    let player2Score = 30;
    let player1Turn = true; // start with player 1's turn

    document.getElementById('restart').addEventListener('click', function() {
        // Reset the game state
            location.reload();
    });
    
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
                battle.innerHTML += "<br> Attack missed, switching turns.";
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
                battle.innerHTML += "<br> Attack missed, switching turns.";
                player1Turn = !player1Turn; // switch turns
            }
        }
    
        if (player1Score <= 0) {
            battle.innerHTML += `<br> Player 2 wins!`;
            // End the game
            this.removeEventListener("click", attackFunction);
            // Show the restart button
            document.getElementById('restart').style.display = 'block';
        } else if (player2Score <= 0) {
            battle.innerHTML += `<br> Player 1 wins!`;
            // End the game
            this.removeEventListener("click", attackFunction);
            // Show the restart button
            document.getElementById('restart').style.display = 'block';
        }    
    };
        
    for (const eachBtn of bttns) {
        eachBtn.addEventListener("click", attackFunction);
    }
})();