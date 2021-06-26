import './App.css';

import PokeSearch from './components/PokeSearch/PokeSearch';
function App() {
  return (
    <main className="App">
      <div className="AppHeader">
        <img
          className="pokeball-img"
          src="https://i.pinimg.com/originals/fd/72/1f/fd721f81cf12ebf7b3234c2c665b584c.png"
          alt="pokeball"
        />
        <h1>Pokemon Search</h1>
      </div>

      <PokeSearch />
    </main>
  );
}

export default App;
