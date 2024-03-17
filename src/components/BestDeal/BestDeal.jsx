import "./BestDeal.scss"
import DetailsInfoTable from '../DetailsInfoTable/DetailsInfoTable'
import { h6Style } from '../../tools/style'
import VisitButton from '../VisitButton/VisitButton';
import { FaCalendar } from "react-icons/fa";

const BestDeal = ({ header, title, buttons, infoTable, image, detailsTitle, detailsContent1, detailsContent2 }) => {
    return (
        <div className="bestDeal">
            <div className="bestDealContainer">
                <div className="topSection">
                    <div className="headerSection">
                        <h6 style={h6Style}>
                            {header}
                        </h6>
                        <h2>
                            {title}
                        </h2>
                    </div>
                    <div className="buttonsSection">
                        {buttons.map((button, index) => {
                            return (
                                <div key={index} className="buttonSection">
                                    <button > {button} </button>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className="bottomSection">
                    <div className="infoTableContainer">
                        <DetailsInfoTable items={infoTable} />
                    </div>
                    <div className="imageContainer">
                        <img src={image} alt="" />
                    </div>
                    <div className="detailesContainer">
                        <h4>
                            {detailsTitle}
                        </h4>
                        <p>
                            {detailsContent1}
                        </p>
                        <p>
                            {detailsContent2}
                        </p>
                        <div className="buttonSection">
                            <VisitButton
                                icon={(<FaCalendar />)}
                                text="Schedule a visit" 
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BestDeal