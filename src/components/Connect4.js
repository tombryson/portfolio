import Box from './Box.js'
import Connect4title from '../images/connectfour-title.png'
import Screenshot1 from '../images/connectfour-1.jpg'
import Screenshot2 from '../images/connectfour-2.jpg'

const Connect4 = () => {
    const _handleOnClick = () => {
        window.open('https://shrenekt-four.netlify.app/','_blank').focus();
    }

    const modalOnClick = (e) => {
        let img = e.target
        const modal = document.getElementById("modal");
        const modalContent = document.getElementsByClassName("modal-content")[1];
        console.log(modalContent)
        const modalImg = document.getElementById("img02");
        const captionText = document.getElementById("caption-c4");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        modalContent.onclick = () => {
            modal.style.display = "none";
        }
    }

    return (
        <Box projectClass={'connect-four-card'} project={'Connect Four'}>
            <div className='project-underlay'>
                <div className='cf-container'>
                    <div className='row-1 row'>
                        <img className='connect-four-logo' onClick={() => _handleOnClick()} src={Connect4title} alt='Shrenekt Four Logo'></img>
                    </div>
                    <div className='screenshot-container'>
                        <div className='screen cf-column screenshot-connectfour'>
                            <img className='connectfour-img' id="myImg" src={Screenshot1} onClick={(e) => modalOnClick(e)} alt='Shrenekt Four for Mobile'></img>
                        </div>
                        <div className='screen cf-column screenshot-connectfour'>
                            <img className='connectfour-img landscape' id="myImg" src={Screenshot2} onClick={(e) => modalOnClick(e)} alt='Shrenekt Four Landscape'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`project-overlay connect-four-card`}>
                <div>
                    <h2 className='spartan shrek-title'>
                    Connect Four
                    </h2>
                    </div>
                    <div className='connect4-box'>
                        <ul>
                            <li>A connect four game complete with character select and score tracking and reset.</li>
                            <br></br>
                            <li>Built using reactJS, users can choose one of several in-game characters and play as them in a strategic game of Connect Four. </li>
                        </ul>
                    </div>
                </div>
                <div id="modal" className='modal'>
                    <span class="close">&times;</span>
                    <img className="modal-content" id="img02" alt="modal content"></img>
                    <div id="caption-c4"></div>
                </div>
        </Box>
    );
}


export default Connect4