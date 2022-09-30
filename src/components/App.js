import { useState, useEffect, } from 'react'
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const navDark = () => {
  const elements = document.querySelectorAll("a");
  elements.forEach((link) => {
    link.style.color = 'black';
  }
  );
};

const navLight = () => {
  const elements = document.querySelectorAll("a");
  elements.forEach((link, idx) => {
    if (idx <= 3) {
    link.style.color = 'hsla(0,0%,100%,.55)';
    }
    if (idx === 1) {
      link.style.color = 'white';
    }
  }
  );
};

const navbarTheme = () => {
  if (window.innerWidth < 1000) {
    if (scrollPosition > 420) {
      navDark();
    } else {
      navLight();
    }
  } else {
    if (scrollPosition > 900) {
      navDark();
    } else {
      navLight();
    }
  }
}
  
navbarTheme();



  return (
    <>
    <div>
      <div className="waterfalls background-overlay" id="home">
        <div className='content-top'>
            <h1 className='top'>
              <div className='name'>TOM BRYSON FULL STACK <span className='web'>WEB</span> DEVELOPER
              </div> 
            </h1>
            <div className='darkMode'>
            </div>
          </div>
        </div>
      </div>
    <div className='hello'>
    <h1>Welcome</h1>
    <p>My name is Tom Bryson, a Full-stack developer based in Melbourne</p>
    <div>
      <h2> Projects </h2>
    </div>
      </div>
      <div className='projects'>
        <div id="burning-airlines" style={{height: '80vh'}}>
        <Burning />
        </div>
        <div id="brain-train" style={{height: '80vh'}}>
        <Braintrain />
        </div>
        <div id="tapedeck" style={{height: '80vh'}}>
        <Tapedeck />
        </div>
        <div id="tic-tac-toe" style={{height: '80vh'}}>
        <Tictactoe />
        </div>

      </div>
      <div className='skills'>
        <h1>Skills:</h1>
      </div>
    </>
  );
}

export default App;
