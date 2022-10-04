import Box from './Box.js'

const Tictactoe = () => {
    return (
        <Box projectClass={'burning-airlines-card'} project={'Burning Airlines'}>
            <div className='project-underlay'>
            </div>
            <div className={`project-overlay burning-airlines-card`}>
                <div>
                    <h1>
                    Burning Airlines
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.</p>
                </div>
            </div>
        </Box>
    );
}


export default Tictactoe