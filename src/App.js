import logo from './logo.svg';
import './App.css';
import data from './data'
import Movie from './components/Movie.js'

function App() {
  const movies = data.map(function(movie){
    return <Movie 
    {...movie}
    />
  })
  return (
    <div className="App">
      {movies}
    </div>
  );
}

export default App;
