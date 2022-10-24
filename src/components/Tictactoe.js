import Box from './Box.js'
import Tictac from '../images/tictactoe.png';

const Tictactoe = () => {
    return (
        <Box projectClass={'tictactoe-card'} project={'Tic-Tac-Toe'}>
            <div className='project-underlay'>
            {/* <img src={Tictac} className='tictac-underlay' alt='Screenshot of Tictactoe'></img> */}
            </div>
            <div className={`project-overlay tictactoe-card`}>
                <div>
                    <h1 className='spartan'>
                    Tick Tac Toe
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                    </p>
                </div>
            </div>
        </Box>
    );
}


export default Tictactoe