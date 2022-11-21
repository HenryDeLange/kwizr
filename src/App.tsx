import './App.css';
import QuizView from './components/QuizView';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KWIZR
        </p>
      </header>
      <QuizView />
    </div>
  );
}

export default App;
