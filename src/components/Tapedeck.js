import Box from './Box.js'
import Tape from '../images/tapedeck.png';
import Tapedecklogo from '../images/tapedeck-logo.jpg';
import Screenshot1 from '../images/tapedeck-1.jpg'
import Screenshot2 from '../images/tapedeck-2.jpg'

const Tapedeck = () => {

    const _handleOnClick = () => {
        window.open('https://tapedeck-app.herokuapp.com/','_blank').focus();
    }

    const modalOnClick = (e) => {
        let img = e.target
        const modal = document.getElementById("TapedeckModal");
        const modalImg = document.getElementById("img03");
        const captionText = document.getElementById("caption-td");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        const span = document.getElementsByClassName("close")[2];
        span.onclick = () => {
            modal.style.display = "none";
        }
    }

    return (
        <Box projectClass={'tapedeck-card'} project={'Tapedeck'}>
            <img className='tape' src={Tape} alt='an analogue tape'></img>
            <div className='project-underlay see-through'>
                <div className='td-container'>
                    <div className='screen td-screen screenshot-connectfour row'>
                        <img className='tapedeck-logo' onClick={() => _handleOnClick()} src={Tapedecklogo} alt='tapedeck four'></img>
                    </div>
                </div>
                <div className='screenshot-container td-screencontainer'>
                    <div className='screen td-screen screenshot-connectfour'>
                        <img className='connectfour-img' id="myImg" onClick={(e) => modalOnClick(e)} src={Screenshot1} alt='Screenshot of Tapedeck'></img>
                    </div>
                    <div id="TapedeckModal" className='modal'>
                        <span class="close">&times;</span>
                        <img className="modal-content" id="img03" alt="modal content"></img>
                         <div id="caption-td"></div>
                    </div>
                    <div className='screen td-screen screenshot-connectfour'>
                        <img className='connectfour-img' id="myImg" onClick={(e) => modalOnClick(e)} src={Screenshot2} alt='Screenshot of Tapedeck'></img>
                    </div>
                </div>
            </div>
            <div className='project-overlay tapedeck-card'>
                <h1 className='spartan tapedeck-title'>
                    Tapedeck
                </h1>
                <div className='tapedeck-box'>
                    <ul>
                        <li>An online space created to provide music listeners the ability to create and share albums that hold particular significance together.</li>
                        <br></br>
                        <li>Built using Rails, users can create, edit and delete Tapedecks, which are compilations of albums which hold significance to them.</li>
                    </ul>
                </div>
            </div>
        </Box>
    );
}


export default Tapedeck