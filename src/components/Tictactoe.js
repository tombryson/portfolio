import Box from './Box.js'
import Tictactoe1 from '../images/Tictactoe-1.jpg';
import Tictactoe2 from '../images/Tictactoe-2.jpg';
import Tictactoe3 from '../images/Tictactoe-3.jpg';

const Tictactoe = () => {
    const _handleOnClick = (e) => {
        e.preventDefault();
        window.open('https://tombryson.github.io/TicTacToe/','_blank').focus();
    }

    const modalOnClick = (e) => {
        let img = e.target
        const modal = document.getElementById("TicTacModal");
        const modalImg = document.getElementById("img03");
        const captionText = document.getElementById("caption-tt");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        const span = document.getElementsByClassName("close")[3];
        span.onclick = () => {
            modal.style.display = "none";
        }
    }

    return (
        <Box projectClass={'tictactoe-card'} project={'tictactoe'}>
            <div className='project-underlay'>
                <div className='img-container container-ttt'>
                    <div className=''>
                        <h1 className='tictactoe-title' onClick={(e) => _handleOnClick(e)} alt='tic tac toe'>Tic Tac Toe</h1>
                    </div>
                    <div className='screenshot-container'>
                        <div className='column-ttt port-ttt'>
                            <img className='ttt-screen connectfour-img' id="myImg" onClick={(e) => modalOnClick(e)} src={Tictactoe3} alt='Screenshot of Tictactoe'></img>
                        </div>
                        <div id="TicTacModal" className='modal'>
                            <span class="close">&times;</span>
                            <img className="modal-content" id="img03"></img>
                                <div id="caption-tt"></div>
                        </div>
                        <div className='column-ttt port-ttt'>
                            <img className='ttt-screen connectfour-img' id="myImg" onClick={(e) => modalOnClick(e)} src={Tictactoe1} alt='Screenshot of Tictactoe'></img>
                        </div>
                        <div className='column-ttt land-ttt'>
                            <img className='ttt-screen connectfour-img landscape-ttt' id="myImg" onClick={(e) => modalOnClick(e)} src={Tictactoe2} alt='Screenshot of Tictactoe'></img>
                        </div>
                   </div>
                </div>
            </div>
            <div className={`project-overlay tictactoe-card`}>
                <div>
                    <h1 className='spartan'>
                    Tic Tac Toe
                    </h1>
                    </div>
                    <div className='card-text-box tictactoe-box'>
                        <ul>
                            <li>A simple 2-player tic-tac-toe game written using Javascript, CSS, HTML, complete with SFX and animations.</li>
                            <br></br>
                            <li>Users can reset the board and their scores and on winning, players are rewarded with confetti.</li>
                        </ul>
                    </div>
                </div>
            </Box>
    );
}


export default Tictactoe