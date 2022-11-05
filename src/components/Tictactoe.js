import Box from './Box.js'
import Tictac from '../images/tictactoe.png';
import Tictactoe1 from '../images/Tictactoe-1.jpg';
import Tictactoe2 from '../images/Tictactoe-2.jpg';
import Tictactoe3 from '../images/Tictactoe-3.jpg';

const Tictactoe = () => {

    const _handleOnClick = (e) => {
        e.preventDefault();
        window.open('https://tombryson.github.io/TicTacToe/','_blank').focus();
    }

    return (
        <Box projectClass={'tictactoe-card'} project={'tictactoe'}>
            <div className='project-underlay'>
                <div className='img-container container-ttt'>
                    <div className=''>
                        <h1 className='tictactoe-title' onClick={(e) => _handleOnClick(e)} alt='logo of a plane'>Tic Tac Toe</h1>
                    </div>
                    <div className='screenshot-container'>
                        <div className='column-ttt port-ttt'>
                            <img className='ttt-screen connectfour-img' src={Tictactoe1} alt='Screenshot of Tictactoe'></img>
                        </div>
                        <div className='column-ttt port-ttt'>
                            <img className='ttt-screen connectfour-img' src={Tictactoe3} alt='Screenshot of Tictactoe'></img>
                        </div>
                        <div className='column-ttt land-ttt'>
                            <img className='ttt-screen connectfour-img landscape-ttt' src={Tictactoe2} alt='Screenshot of Tictactoe'></img>
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