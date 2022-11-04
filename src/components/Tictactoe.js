import Box from './Box.js'
import Tictac from '../images/tictactoe.png';

const Tictactoe = () => {

    const _handleOnClick = (e) => {
        e.preventDefault();
        window.open('https://burning-airlines-177.herokuapp.com/','_blank').focus();
    }

    return (
        <Box projectClass={'tictactoe-card'} project={'tictactoe'}>
            <div className='project-underlay'>
                <div className='img-container'>
                    <div className='column-2 column screenshot-tictactoe'>
                        {/* <img className='seat-map-img' src={BurningairlinesSeats} alt='pictures of seats'></img> */}
                    </div>
                    <div className='column-1 column screenshot-tictactoe'>
                        {/* <img className='burning-search' src={BurningairlinesFlights} alt='flight log on app'></img> */}
                    </div>
                    <div className='column-3 img-logo column'>
                        <div className='tictactoe' onClick={(e) => _handleOnClick(e)} alt='logo of a plane'></div>
                    </div>
                </div>
            </div>
            <div className={`project-overlay tictactoe-card`}>
                <div>
                    <h1 className='spartan'>
                    Tic Tac Toe
                    </h1>
                    </div>
                    <div className='card-text-box'>
                        <ul>
                            <li>A mobile-first flight booking app using Ruby on Rails and ReactJS.</li>
                            <br></br>
                            <li>Users can navigate through a pre-seeded list of flights and choose their seats, which are unique to each user and flight.</li>
                        </ul>
                    </div>
                </div>
            </Box>
    );
}


export default Tictactoe