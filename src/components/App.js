import { useState, useEffect, } from 'react'
import './App.css';
import Tapedeck from './Tapedeck.js';
import Tictactoe from './Tictactoe.js';
import Connect4 from './Connect4.js';
import Burning from './Burning.js';
import Contact from './Contact.js';
import Arrow from '../images/arrow.png';
import Skill1 from '../images/skills/html5-original.svg';
import Skill2 from '../images/skills/javascript-original.svg';
import Skill3 from '../images/skills/css3-original.svg';
import Skill4 from '../images/skills/nodejs-original.svg';
import Skill5 from '../images/skills/postgresql-original.svg';
import Skill6 from '../images/skills/rails-original-wordmark.svg';
import Skill7 from '../images/skills/react-original.svg';
import Skill8 from '../images/skills/ruby-original.svg';
import Arrow2 from '../images/arrow-2.png';
import Pencil from '../images/pencil.jsx';

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
  navbar.setAttribute("id","navbar-visible");
  elements.forEach((link) => {
  link.style.color = 'black';
  }
  );
};

const navLight = (elements, navbar) => {
  navbar.removeAttribute("id", "navbar-visible");
  elements.forEach((link, idx) => {
    if (idx <= 4) {
    link.style.color = 'hsla(0,0%,100%,.55)';
    }
    if (idx === 1) {
      link.style.color = 'white';
    }
  }
  );
};


useEffect(() => {
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
  navbarTheme()
}, [scrollPosition]);


  return (
    <>
    <div>
      <div className="waterfalls background-overlay" tabIndex="0" id="home">
        <div className='content-top'>
            <h1 id='top'>
              <div className='name'>TOM BRYSON: <span className='full'>FULL</span> STACK<span className='web'>WEB</span><br></br>DEVELOPER
              </div>
            </h1>
            <div className='cache'></div>
          </div>
        </div>
      </div>
    <div className='hello'>
      <div class="container">
        <div class="row">
          <div className='text-box box-1'>
            <h1 className='welcome spartan'>Welcome</h1>
          </div>
          <div className='text-box box-2'>
            <p className='my-name spartan'>My name is Tom Bryson, a Full-stack developer based in Melbourne.</p>
          </div>
          <div className='text-box box-3'>
            <h2 className='my-projects spartan'> Here are a few of my projects </h2>
            <img src={Arrow} className='arrow' alt='an arrow'></img>
          </div>
       </div>
    </div>
  </div>
    <div className='projects'>
      <div className='burning-airlines project'>
        <Burning />
      </div>
      <div className='connect-four project'>
        <Connect4 />
      </div>
      <div className='tapedeck project'>
        <Tapedeck />
      </div>
        <div className='tic-tac-toe project'>
        <Tictactoe />
      </div>
      <div className='project no-padding cyan'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320">
          <path fill="#76a8d1" fill-opacity="1" d="M0,192L21.8,165.3C43.6,139,87,85,131,58.7C174.5,32,218,32,262,58.7C305.5,85,349,139,393,170.7C436.4,203,480,213,524,202.7C567.3,192,611,160,655,138.7C698.2,117,742,107,785,90.7C829.1,75,873,53,916,69.3C960,85,1004,139,1047,149.3C1090.9,160,1135,128,1178,128C1221.8,128,1265,160,1309,186.7C1352.7,213,1396,235,1418,245.3L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
          </path>
        </svg>
      <div class="container">
        <div class="row">
          <div className='text-box box-1'>
            <h1 className='welcome spartan my-skills'>My Skills</h1>
              <Pencil />
            <img className="arrow-bot" src={Arrow2} alt="an arrow"></img>
          </div>
        </div>
        <div className='skills stage'>
          <div className='skill-box' id="html" >
            <img src={Skill1} alt="a skill"></img>
          </div>
          <div className='skill-box' id="js">
            <img src={Skill2} alt="a skill"></img>
          </div>
          <div className='skill-box' id="css3">
            <img src={Skill3} alt="a skill"></img>
          </div>
          <div className='skill-box' id="node">
            <img src={Skill4} alt="a skill"></img>
          </div>
          <div className='skill-box' id="postgres">
            <img src={Skill5} alt="a skill"></img>
          </div>
          <div className='skill-box' id="rails">
            <img src={Skill6} alt="a skill"></img>
          </div>
          <div className='skill-box' id="react">
            <img src={Skill7} alt="a skill"></img>
          </div>
          <div className='skill-box' id="ruby">
            <img src={Skill8} alt="a skill"></img>
          </div>
        </div>
      </div>
      <svg className="bot-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#76a8d1" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,170.7C640,181,800,171,960,186.7C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  </div>
  <Contact />
</>
  );
}

export default App;
