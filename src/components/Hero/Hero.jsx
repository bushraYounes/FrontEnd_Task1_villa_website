import './Hero.scss'
const Hero = ({ directory, title, image }) => {
    return (
        <div className='hero'>
            <div className="heroContainer">
                <div className="backgroundImageContainer">
                    <img src={image} alt="" />
                </div>
                <div className="contentContainer">
                    <div className="directory">
                        {directory}
                    </div>
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero