import logo from './christmas-tree-silhouette.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI's Christmas Dream 2022....
        </a>
        <p>
          Born-In-A-Stable-Diffusion and Xmas-tallography
        </p>
        <a>Born-In-A-Stable-Diffusion</a>
        <p>
          

          This tree has baubles modeled on outputs of a Stable Diffusion model rendered into 3D.
          A Stable Diffusion Model translates words into Images. We used a Stable Diffusion to create Images of our beloved animals doing Chritmassy things such as:
          " an Okapi Ice Skating"
          " a Red Lion Fish wearing a Christmas Hat"
          The baubles have been realized by a mixture of modelling clays and 3-D printing.
        
        </p>
        <a>Xmas-tallography</a>
        <p> This tree represents elements of the imaging that we are famous for at the Rosalind Franklin Institute.
          The lights on the christmas tree have been programmed show sinograms that we have simulated with our algorithms.
          The baubles are all reciprocal space representations of snowflakes made by laser cutter, paper cutting and crochet.
        </p>
      </header>
    </div>
  );
}



export default App;
