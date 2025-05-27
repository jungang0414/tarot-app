import './App.css';
import ReadingScreen from './components/ReadingScreen/ReadingScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>塔羅牌占卜</h1>
      </header>
      <main>
        <ReadingScreen />
      </main>
    </div>
  );
}

export default App;