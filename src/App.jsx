import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <header className="navbar">
        <a className="brand" href="#home">
          TONTON APA?
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#watchlist">Watchlist</a>
          <a href="#watched">Watched</a>
        </nav>
      </header>

      {/* Main Content */}
      <main id="home" className="hero-section">

        <p className="eyebrow">
          YOUR PERSONAL MOVIE PICKER
        </p>

        <h1>
          Too many movies.
          <br />
          Too little time.
        </h1>

        <p className="hero-description">
          Let fate decide your movie tonight.
        </p>

        {/* Movie Picker */}
        <section className="picker-panel">

          <h2>How do you want to pick?</h2>

          <div className="mode-options">
            <button className="mode-button active" type="button">
              All Movies
            </button>

            <button className="mode-button" type="button">
              By Genre
            </button>
          </div>

          <button className="pick-button" type="button">
            🎲 Pick My Movie
          </button>


        </section>
      </main>
    </div>
  )
}

export default App