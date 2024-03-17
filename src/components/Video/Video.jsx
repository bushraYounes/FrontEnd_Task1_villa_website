import { h6Style } from '../../tools/style'
import { RiArrowRightSFill } from "react-icons/ri";
import "./Video.scss"

const Video = ({ header, title, frame, video }) => {
    return (
        <div className='video'>
            <div className="videoContainer">
                <div className='headerContainer'>
                    <h6 style={h6Style}>
                        {header}
                    </h6>
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className='videoContainer'>
                    <div className="frame">
                        <img src={frame} alt="" />
                        <a href={video} target="_blank">
                            <i> <RiArrowRightSFill /></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Video