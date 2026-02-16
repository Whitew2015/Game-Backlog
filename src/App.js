import './App.css';
import GameCard from './GameCard';
import { useState, useEffect } from 'react';

function App() {

  //filter state
  const [filter, setFilter] = useState("All");
  const [newTitle, setNewTitle] = useState("");
  const [newStatus, setNewStatus] = useState("Backlog");

  
  const [games, setGames] = useState(() => {
    const savedGames = localStorage.getItem("games");
    return savedGames ? JSON.parse(savedGames) : [
  { id: 1, title: "Elden Ring", status: "Playing" },
  { id: 2, title: "Cyberpunk 2077", status: "Backlog" },
  { id: 3, title: "Spider-Man 2", status: "Completed" }
    ]
  });

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const filteredGames = filter === "All" ? games :
    games.filter(game => game.status === filter);

  const addGame = () => {
    if (!newTitle.trim()) return;

    const newGame = {
      id: Date.now(),
      title: newTitle,
      status: newStatus
    };

    setGames([...games, newGame]);
    setNewTitle("");
  };

  const deleteGame = id => {
    setGames(games.filter(game => game.id !== id));
  };

  return (
    <div className='App'>
      <div className='form'>
        <input type="text" placeholder='Game Title' value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)} />
        
        <select value={newStatus} onChange={(e) => 
          setNewStatus(e.target.value)}>
            <option value="Playing">Playing</option>
            <option value="Completed">Completed</option>
            <option vlaue="Backlog">Backlog</option>
        </select>

        <button onClick={addGame}>Add Game</button>
      </div>

      <div className='buttons'>
        <button className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}>All</button>

        <button className={filter === "Playing" ? "active" : ""} 
        onClick={() => setFilter("Playing")}>Playing</button>

        <button className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}>Completed</button>

        <button className={filter === "Backlog" ? "active" : ""}
        onClick={() => setFilter("Backlog")}>Backlog</button>
      </div>
      

      {filteredGames.map(game => (
        <GameCard key={game.id} title={game.title} status={game.status}
        onDelete={() => deleteGame(game.id)} />
      ))}
      
    </div>
  );
}

export default App;
