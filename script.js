document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
  
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => handleCellClick(cell));
      board.appendChild(cell);
    }
  
    let currentPlayer = 'X';
    const winnerCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    function handleCellClick(cell) {
      if (!cell.textContent) {
        cell.textContent = currentPlayer;
        if (checkWinner()) {
          alert(`${currentPlayer} wins!`);
        //  document.getElementById('win').innerHTML = $(currentPlayer) + "wins !";
          resetGame();
        } else if (isBoardFull()) {
          alert('It\'s a tie!');
        //  document.getElementById('win').innerHTML = "It's a Tie";
          resetGame();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }
  
    function checkWinner() {
      return winnerCombos.some(combo => {
        const [a, b, c] = combo;
        return (
          board.children[a].textContent &&
          board.children[a].textContent === board.children[b].textContent &&
          board.children[b].textContent === board.children[c].textContent
        );
      });
    }
  
    function isBoardFull() {
      return Array.from(board.children).every(cell => cell.textContent);
    }
  
    function resetGame() {
      Array.from(board.children).forEach(cell => {
        cell.textContent = '';
      });
      currentPlayer = 'X';
    }
  });
  