import Box from './Box.js'

const Braintrain = () => {
    return (
        <Box projectClass={'brain-train'} project={'Brain Train'}>
            <div className='project-underlay'>
            </div>
            <div className={`project-overlay brain-train`}>
                <div>
                    <h1 className='spartan'>
                    Brain Train
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.</p>
                </div>
            </div>
        </Box>
    );
}


export default Braintrain