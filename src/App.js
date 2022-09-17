import react from 'react'
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
      {icon}
      <div className="waterfalls background-overlay">
        <div className='content-top'>
          <h1>Welcome</h1>
          <div className='darkMode'>
          {icon}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
