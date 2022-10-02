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
import { faCoffee, faMoon, faVrCardboard } from '@fortawesome/free-solid-svg-icons'


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

const navDark = (elements, navbar) => {
  console.log(navbar)
  navbar.setAttribute("id","navbar-visible");
  elements.forEach((link) => {
  link.style.color = 'black';
  }
  );
};

const navLight = (elements, navbar) => {
  navbar.removeAttribute("id", "navbar-visible");
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



const IH = window.innerHeight;
const IW = window.innerWidth;
const navbarTheme = () => {
  const elements = document.querySelectorAll("a");
  const navbar = document.getElementsByTagName("nav")[0]
  if (IH < 1000 && IW > 350) {
    if (scrollPosition/IH > 0.70) {
      navDark(elements, navbar);
    } else {
      navLight(elements, navbar);
    }
  } else if (IW < 350) {
    if (scrollPosition/IH > 0.38) {
      navDark(elements, navbar);
    } else {
      navLight(elements, navbar);
    }
  } else {
    if (scrollPosition/IH > 0.70) {
      navDark(elements, navbar);
      } else {
      navLight(elements, navbar);
      }
    }
}
useEffect(() => {
  navbarTheme();
}, [scrollPosition]);


  return (
    <>
    <div>
      <div className="waterfalls background-overlay" id="home">
        <div className='content-top'>
            <h1 id='top'>
              <div className='name'>TOM BRYSON: FULL STACK<span className='web'>WEB</span><br></br>DEVELOPER
              </div> 
            </h1>
            <div className='darkMode'>
            </div>
          </div>
        </div>
      </div>
    <div className='hello'>
      <div class="container">
        <div class="row">
        <div class="col align-self-start">
        <h1 className='welcome'>Welcome</h1>
        </div>
        <div class="col align-self-center">
          <p className='my-name'>My name is Tom Bryson, a Full-stack developer based in Melbourne</p>
        </div>
        <div class="col align-self-end">
          <h2 className='my-projects'> Here are some of my Projects </h2>
        </div>
       </div>
    </div>
    <div>
    </div>
    </div>
      <div className='projects'>
        <div className='burning-airlines project'>
        <Burning />
        </div>
        <div className='brain-train project'>
        <Braintrain />
        </div>
        <div className='tapedeck project'>
        <Tapedeck />
        </div>
        <div className='tic-tac-toe project'>
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
