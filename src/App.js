
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <Weather defaultCity="New York"/>
     <footer>
     <small>
                <a href="https://github.com/Aneesha51">Open-source code</a>
                <span>, by </span>
                <a href="https://www.linkedin.com/in/aneesha-rangan-41b171196">Aneesha Rangan</a>
            </small>
     </footer>
    </div>
    </div>
  );
}


