import React from "react";
import Player from "./Player";
import players from "./players"; // Import your players array
import "./App.css";

function App() {
  return (
    <div className="gallery">
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          age={player.age}
          imageUrl={player.imageUrl}
          jerseyNumber={player.jerseyNumber}
        />
      ))}
    </div>
  );
}

export default App;
