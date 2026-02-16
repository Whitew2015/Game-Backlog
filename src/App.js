import './App.css';
import GameCard from './GameCard';
import { useState } from 'react';

function App() {

  //filter state
  const [filter, setFilter] = useState("All");

  //test variable
  const games = [
  { id: 1, title: "Elden Ring", status: "Playing" },
  { id: 2, title: "Cyberpunk 2077", status: "Backlog" },
  { id: 3, title: "Spider-Man 2", status: "Completed" }
  ];

  const filteredGames = filter === "All" ? games :
    games.filter(game => game.status === filter);

  return (
    <div className="App">
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Playing")}>Playing</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Backlog")}>backlog</button>
      </div>
      

      {filteredGames.map(game => (
        <GameCard key={game.id} title={game.title} status={game.status} />
      ))}
      
    </div>
  );
}

export default App;
