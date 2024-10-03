import React from 'react';

function Game({ username, side }) {
  return (
    <div>
      <h1>Game On!</h1>
      <p>{username} is on the {side} side.</p>
      {/* Add button press and game display logic */}
    </div>
  );
}

export default Game;
