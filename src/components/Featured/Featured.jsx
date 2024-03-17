import './Featured.scss'
import Accordion from "../Accordion/Accordion"
import InfoTable from '../InfoTable/InfoTable'
import { h6Style } from '../../tools/style'

const Featured = ({ image, sticker, header, title, accordion, infoTabel }) => {
    return (
        <div className="featured">
            <div className="featuredContainer">
                <div className="imageSection">
                    <div className="image">
                        <img src={image}>
                        </img>
                        <div className="sticker">
                            <img src={sticker}>
                            </img>
                        </div>
                    </div>

                </div>
                <div className="contentSection">
                    <div className="header">
                        <h6 style={h6Style}>{header}</h6>
                    </div>
                    <div className="title">
                        <h2>
                            {title}
                        </h2>

                    </div>
                    <div className="accordionSection">
                        <Accordion items={accordion} />
                    </div>
                </div>
                <div className="infoTabelSection">
                    <InfoTable items={infoTabel}/>
                </div>
            </div>

        </div>
    )
}

export default Featured