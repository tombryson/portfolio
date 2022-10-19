import Box from './Box.js'
import Burningairlines from '../images/burning-airlines.jpg';
import BurningairlinesSeats from '../images/burning-airlines-seat-map.png'
import BurningairlinesFlights from '../images/burning-airlines-flights.png';

const Burning = () => {
    const _handleOnClick = (e) => {
        e.preventDefault();
        window.open('http://www.google.com','_blank').focus();
    }

    return (
        <Box projectClass={'burning-airlines-card'} project={'Burning Airlines'}>
            <div className='project-underlay'>
                <div className='container img-logo'>
                    <img className='burning' onClick={(e) => _handleOnClick(e)} src={Burningairlines} alt='logo of a plane'></img>
                </div>
                <div className='img-container'>
                    <div className='box-1 square'>
                        <img className='seat-map-img' src={BurningairlinesSeats} alt='pictures of seats'></img>
                    </div>
                    <div className='square'>
                        <img className='burning-search' src={BurningairlinesFlights} alt='flight log on app'></img>
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
                            <li>A mobile-first flight booking app using Ruby on Rails and ReactJS.</li>
                            <br></br>
                            <li>Users can navigate through a pre-seeded list of flights and choose their seats, which are unique to each user and flight.</li>
                        </ul>
                    </div>
                </div>
            </Box>
    );
}


export default Burning