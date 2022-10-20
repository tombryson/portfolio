import Box from './Box.js'

const Connectfour = () => {
    return (
        <Box projectClass={'brain-train'} project={'Brain Train'}>
            <div className='project-underlay'>
                <div className='container img-logo'>
                    {/* <img className='connect-four' onClick={(e) => _handleOnClick(e)} src={connect-four} alt='logo of a plane'></img> */}
                </div>
                <div className='img-container'>
                    <div className='box-1 square'>
                        {/* <img className='seat-map-img' src={connect-four} alt='pictures of seats'></img> */}
                    </div>
                    <div className='square'>
                        {/* <img className='connect-four-search' src={connect-four} alt='flight log on app'></img> */}
                    </div>
                </div>
            </div>
            <div className={`project-overlay connect-four-airlines-card`}>
                <div>
                    <h1 className='spartan'>
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