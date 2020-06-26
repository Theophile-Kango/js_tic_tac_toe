export const gamePlayers = (() => {
    const playerFactory = (name, symbol, score) => ({ name, symbol, score });

    const players = (name, symbol) => {
        return playerFactory(name, symbol, 0);
    }

    return { players }
})();

export const gameBoardLogic = (() => {

const victoryArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];
    
let gameboardArr1 = [];
let gameboardArr2 = [];

    const checkWin = (player, gameboardArr) => {
    
        for(let i = 0; i < victoryArr.length; i += 1) {
            if (gameboardArr.includes(victoryArr[i][0])
                && gameboardArr.includes(victoryArr[i][1])
                && gameboardArr.includes(victoryArr[i][2])) {
                player.score += 1;
                game.score();
                return `${player.name} wins!`;
            } else if (counter === 9 && result.textContent === '') {
                game.score();
                return "It's a draw!";
            }
        };
    }
    
    const populateArr = (position, symbol) => {
        if (symbol === 'X') {
        gameboardArr1.push(Number(position) + 1);
        writeResult(player1, gameboardArr1);
        } else {
        gameboardArr2.push(Number(position) + 1);
        writeResult(player2, gameboardArr2);
        }
    };

    return { checkWin, populateArr}
})();
    
    



