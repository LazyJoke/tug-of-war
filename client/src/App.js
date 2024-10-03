import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Game from './components/Game';

const socket = io('http://localhost:4000');

function App() {
  const [username, setUsername] = useState('');
  const [side, setSide] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const joinGame = (selectedSide) => {
    if (username) {
      setSide(selectedSide);
      socket.emit('join', { username, selectedSide });
    }
  };

  useEffect(() => {
    socket.on('gameStart', () => setGameStarted(true));
  }, []);

  return (
    <div className="App">
      {!username ? (
        <input 
          type="text" 
          placeholder="Enter username" 
          onChange={(e) => setUsername(e.target.value)} 
        />
      ) : !gameStarted ? (
        <div>
          <button onClick={() => joinGame('left')}>Left</button>
          <button onClick={() => joinGame('right')}>Right</button>
        </div>
      ) : (
        <Game username={username} side={side} />
      )}
    </div>
  );
}

export default App;
