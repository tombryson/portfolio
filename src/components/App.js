import { useEffect, Helmet } from 'react'
import './App.css';
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
  
         <div id="burning-airlines" style={{height: 500}}>
          <h1>Burning Airlines</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="brain-train" style={{height: 500}}>
        <h1>Brain Train</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="tapedeck" style={{height: 500}}>
        <h1>Tapedeck</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="tic-tac-toe" style={{height: 500}}>
        <h1>Tic Tac Toe</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
    </>
  );
}

export default App;
