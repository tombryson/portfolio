import Box from './Box.js'
import Burningairlines from '../images/burning-airlines.jpg';

const Burning = () => {
    return (
        <Box projectClass={'burning-airlines-card'} project={'Burning Airlines'}>
            <div className='project-underlay'>
                <div className='container img-logo'>
                    <img className='burning' src={Burningairlines} alt='logo of a plane'></img>
                </div>
                <div className='box-1 square'>
                <div className='box-2 square'>
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