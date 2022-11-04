import Box from './Box.js'
import Tape from '../images/tapedeck.png';
import Tapedecklogo from '../images/tapedeck-logo.jpg';

const Tapedeck = () => {

    const _handleOnClick = () => {
        window.open('https://tapedeck-app.herokuapp.com/','_blank').focus();
    }

    return (
        <Box projectClass={'tapedeck-card'} project={'Tapedeck'}>
            <img className='tape' src={Tape} alt='picture of an analogue tape'></img>
            <div className='project-underlay'>
                <div className='img-container'>
                    <div className='column-cf screenshot-tapedeck'>
                        {/* <img className='seat-map-img' src={BurningairlinesSeats} alt='pictures of seats'></img> */}
                    </div>
                    <div className='column-cf screenshot-tapedeck'>
                        {/* <img className='burning-search' src={BurningairlinesFlights} alt='flight log on app'></img> */}
                    </div>
                    <div className='row-1 row'>
                        <img className='tapedeck-logo' onClick={() => _handleOnClick()} src={Tapedecklogo} alt='tapedeck four'></img>
                    </div>
                </div>
            </div>
            <div className='project-overlay tapedeck-card'>
                <h1 className='spartan tapedeck-title'>
                    Tapedeck
                </h1>
                <div className='tapedeck-box'>
                    <ul>
                        <li>An online space created to provide a community of music listeners the ability to create and share albums that hold particular significance together.</li>
                        <br></br>
                        <li>Built using Ruby on Rails, users can create, edit and delete Tapedecks, which are compilations of albums which hold significance to them.</li>
                    </ul>
                </div>
            </div>
        </Box>
    );
}


export default Tapedeck