document.getElementById('submit').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const score = parseInt(document.getElementById('score').value);

  if (name && !isNaN(score)) {
      const leaderboardData = document.getElementById('leaderboard-data');
      const newRow = document.createElement('tr');

      const rankCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const scoreCell = document.createElement('td');

      rankCell.innerText = leaderboardData.children.length + 1;
      nameCell.innerText = name;
      scoreCell.innerText = score;

      newRow.appendChild(rankCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(scoreCell);

      leaderboardData.appendChild(newRow);

      document.getElementById('name').value = '';
      document.getElementById('score').value = '';
  } else {
      alert('Please enter a valid name and score');
  }
});
