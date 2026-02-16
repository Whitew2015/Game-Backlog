import './App.css';
import GameCard from './GameCard';


const games = [
  { id: 1, title: "Elden Ring", status: "Playing" },
  { id: 2, title: "Cyberpunk 2077", status: "Backlog" },
  { id: 3, title: "Spider-Man 2", status: "Completed" }
]
  


function App() {
  return (
    <div className="App">
      {games.map(game => (
        <GameCard key={game.id} title={game.title} status={game.status} />
      ))}
      
    </div>
  );
}

export default App;
