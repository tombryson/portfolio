import Box from './Box.js'
import Burningairlines from '../images/burning-airlines.jpg';
import BurningairlinesSeats from '../images/burning-airlines-seat-map.png'
import BurningairlinesFlights from '../images/burning-airlines-flights.png';

const Burning = () => {
    const _handleOnClick = (e) => {
        e.preventDefault();
        window.open('https://burning-airlines-177.herokuapp.com/','_blank').focus();
    }

    const modalOnClick = (e) => {
        let img = e.target
        const modal = document.getElementById("burningModal");
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        modal.onclick = () => {
            modal.style.display = "none";
        }
    }

    return (
        <Box projectClass={'burning-airlines-card'} project={'Burning Airlines'}>
            <div className='project-underlay'>
                <div className='img-container'>
                    <div className='column-2 column screenshot screenshot-burning'>
                        <img className='seat-map-img' id="myImg" 
                            onClick={(e) => modalOnClick(e)} 
                            src={BurningairlinesSeats} 
                            alt='Choosing a seat'>
                        </img>
                    </div>
                    <div id="burningModal" className='modal'>
                        <span class="close">&times;</span>
                        <img className="modal-content" id="img01" alt="modal content"></img>
                         <div id="caption"></div>
                    </div>
                    <div className='column-1 column screenshot screenshot-burning'>
                        <img className='burning-search' id="myImg" onClick={(e) => modalOnClick(e)} src={BurningairlinesFlights} alt='Searching for a flight'></img>
                    </div>
                    <div className='column-3 img-logo column'>
                        <img className='burning' onClick={(e) => _handleOnClick(e)} src={Burningairlines} alt='logo of a plane'></img>
                    </div>
                </div>
            </div>
            <div className={`project-overlay burning-airlines-card`}>
                <div>
                    <h2 className='spartan'>
                        Burning Airlines
                    </h2>
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