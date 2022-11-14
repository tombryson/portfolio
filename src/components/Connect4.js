import Box from './Box.js'
import Connect4title from '../images/connectfour-title.png'
import Screenshot1 from '../images/connectfour-1.jpg'
import Screenshot2 from '../images/connectfour-2.jpg'

const Connect4 = () => {
    const _handleOnClick = () => {
        window.open('https://shrenekt-four.netlify.app/','_blank').focus();
    }

    return (
        <Box projectClass={'connect-four-card'} project={'Connect Four'}>
            <div className='project-underlay'>
                <div className='cf-container'>
                    <div className='row-1 row'>
                        <img className='connect-four-logo' onClick={() => _handleOnClick()} src={Connect4title} alt='shrenekt four'></img>
                    </div>
                    <div className='screenshot-container'>
                        <div className='screen cf-column screenshot-connectfour'>
                            <img className='connectfour-img' src={Screenshot1} alt='Screenshot of connectfour'></img>
                        </div>
                        <div className='screen cf-column screenshot-connectfour'>
                            <img className='connectfour-img landscape' src={Screenshot2} alt='Screenshot of connectfour'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`project-overlay connect-four-card`}>
                <div>
                    <h1 className='spartan shrek-title'>
                    Connect Four
                    </h1>
                    </div>
                    <div className='connect4-box'>
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


export default Connect4