import Box from './Box.js'

const Tapedeck = () => {
    return (
        <Box projectClass={'tapedeck-card'} project={'Tapedeck'}>
            <div className='project-underlay'>
            </div>
            <div className={`project-overlay tapedeck-card`}>
                <div>
                    <h1 className='spartan'>
                    Tapedeck
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.</p>
                </div>
            </div>
        </Box>
    );
}


export default Tapedeck