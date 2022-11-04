import Box from './Box.js'
import Burningairlines from '../images/burning-airlines.jpg';
import BurningairlinesSeats from '../images/burning-airlines-seat-map.png'
import BurningairlinesFlights from '../images/burning-airlines-flights.png';
import FireIcon from '../images/fire-icon-png.png';

const Burning = () => {
    const _handleOnClick = (e) => {
        e.preventDefault();
        window.open('https://burning-airlines-177.herokuapp.com/','_blank').focus();
    }

    return (
        <Box projectClass={'burning-airlines-card'} project={'Burning Airlines'}>
            <div className='project-underlay'>
                <div className='img-container'>
                    <div className='column-2 column screenshot screenshot-burning'>
                        <img className='seat-map-img' src={BurningairlinesSeats} alt='pictures of seats'></img>
                    </div>
                    <div className='column-1 column screenshot screenshot-burning'>
                        <img className='burning-search' src={BurningairlinesFlights} alt='flight log on app'></img>
                    </div>
                    <div className='column-3 img-logo column'>
                        <img className='burning' onClick={(e) => _handleOnClick(e)} src={Burningairlines} alt='logo of a plane'></img>
                    </div>
                </div>
            </div>
            <div className={`project-overlay burning-airlines-card`}>
                <div>
                    <h1 className='spartan'>
                    Burning Airlines
                    </h1>
                    </div>
                    <div className='card-text-box'>
                        <ul>
                            <li className='fire-dot'>A mobile-first flight booking app using Ruby on Rails and ReactJS.</li>
                            <br></br>
                            <li className='fire-dot'>Users can navigate through a pre-seeded list of flights and choose their seats, which are unique to each user and flight.</li>
                        </ul>
                    </div>
                </div>
            </Box>
    );
}


export default Burning