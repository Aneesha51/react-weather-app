
import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <Weather defaultCity="New York"/>
     <footer>
     <small>
      <p>This project was by <a href="https://www.linkedin.com/in/aneesha-rangan-41b171196" target="_blank" rel="noopener noreferrer">Aneesha Rangan</a> and is Open-source on <a href="https://github.com/Aneesha51" target="_blank" rel="noopener noreferrer">GitHub</a> and is hosted on  <a href="https://jade-croquembouche-d185e5.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a> </p>   
      </small>
     </footer>
    </div>
    </div>
  );
}


