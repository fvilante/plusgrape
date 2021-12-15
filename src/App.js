import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Voce é meu amor <code>(ouviu?)</code> I love you ;D!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a test of static web hosting. Haha!
        </a>
      </header>
    </div>
  );
}

export default App;
