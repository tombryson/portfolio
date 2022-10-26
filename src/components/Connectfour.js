import Box from './Box.js'
import Connectfourtitle from '../images/connectfour-title.png'

const Connectfour = () => {
    const _handleOnClick = () => {

    }

    return (
        <Box projectClass={'connect-four-card'} project={'Connect Four'}>
            <div className='project-underlay'>
                <div className='img-container'>
                    <div className='column-cf screenshot-connectfour'>
                        {/* <img className='seat-map-img' src={BurningairlinesSeats} alt='pictures of seats'></img> */}
                    </div>
                    <div className='column-cf screenshot-connectfour'>
                        {/* <img className='burning-search' src={BurningairlinesFlights} alt='flight log on app'></img> */}
                    </div>
                    <div className='row-1 row'>
                        <img className='connect-four-logo' onClick={(e) => _handleOnClick(e)} src={Connectfourtitle} alt='title of connect four game'></img>
                    </div>
                </div>
            </div>
            <div className={`project-overlay connect-four-card`}>
                <div>
                    <h1 className='spartan shrek-title'>
                    Connect Four
                    </h1>
                    </div>
                    <div className='card-text-box'>
                        <ul>
                            <li>A connect four game complete with character select and score tracking and reset.</li>
                            <br></br>
                            <li>Built using reactJS, users can choose one of several in-game characters and play as them in a strategic game of Connect Four. </li>
                        </ul>
                    </div>
                </div>
        </Box>
    );
}


export default Connectfour