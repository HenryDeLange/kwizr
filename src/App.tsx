import './App.css';
import QuizView from './components/QuizView';
import logo from './logo.svg';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <div>
                    KWIZR
                </div>
            </header>
            <div className='App-body'>
                <QuizView />
            </div>
        </div>
    );
}

export default App;
