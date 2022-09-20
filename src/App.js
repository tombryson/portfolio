import { useEffect, Helmet } from 'react'
import './App.css';
import TopBackgroundLight from './images/top-background-light.gif'
import TopBackgroundDark from './images/top-background-dark.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSolid fa-cloud-sun} from '@fortawesome/free-solid-svg-icons'
import { faCoffee, faMoon } from '@fortawesome/free-solid-svg-icons'


const icon = <FontAwesomeIcon icon={faMoon} />
// const element = <FontAwesomeIcon icon={faCoffee} />

function App() {
  return (
    <>
    <div>
      <div className="waterfalls background-overlay">
        <div className='content-top'>
            <h1> </h1>
            <div className='darkMode'>
            </div>
          </div>
        </div>
      </div>
    <div><h1 className='your-name'>Tom Bryson</h1></div>
    </>
  );
}

export default App;
