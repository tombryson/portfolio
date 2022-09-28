import { useEffect, Helmet } from 'react'
import './App.css';
import Tapedeck from './Tapedeck.js';
import Tictactoe from './Tictactoe.js';
import Braintrain from './Braintrain.js';
import Burning from './Burning.js';
import TopBackgroundLight from '../images/top-background-light.gif'
import TopBackgroundDark from '../images/top-background-dark.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSolid fa-cloud-sun} from '@fortawesome/free-solid-svg-icons'
import { faCoffee, faMoon } from '@fortawesome/free-solid-svg-icons'


const icon = <FontAwesomeIcon icon={faMoon} />
// const element = <FontAwesomeIcon icon={faCoffee} />

function App() {
  return (
    <>
    <div>
      <div className="waterfalls background-overlay" id="home">
        <div className='content-top'>
            <h1> </h1>
            <div className='darkMode'>
            </div>
          </div>
        </div>
      </div>
    <div></div>
    <h1>Welcome</h1>
    <p>My name is Tom Bryson, a Full-stack developer based in Melbuorne</p>
  
        <div id="burning-airlines" style={{height: 1000}}>
        <Burning />
        </div>
        <div id="brain-train" style={{height: 1000}}>
        <Braintrain />
        </div>
        <div id="tapedeck" style={{height: 1000}}>
        <Tapedeck />
        </div>
        <div id="tic-tac-toe" style={{height: 1000}}>
        <Tictactoe />
        </div>
    </>
  );
}

export default App;
