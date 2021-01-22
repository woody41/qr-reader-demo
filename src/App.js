import logo from './logo.svg';
import './App.css';
import QRreader from './components/QRreader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <QRreader></QRreader>
        </p>
      </header>
    </div>
  );
}

export default App;
