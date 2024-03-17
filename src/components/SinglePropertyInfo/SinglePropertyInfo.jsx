import React from 'react'
import Accordion from '../Accordion/Accordion'
import InfoTable from '../InfoTable/InfoTable'
import './SinglePropertyInfo.scss'
const SinglePropertyInfo = ({ image, category, address, para, accordion, infoTable }) => {
    return (
        <div className='singlePropertyInfo'>

            <div className="singlePropertyInfoContainer">
                <div className="contentSection">
                    <div className="imageContainer">
                        <img src={image} alt="" />
                    </div>
                    <div className="categoryContainer">
                        <div className="category">
                            {category}
                        </div>
                    </div>
                    <div className="addressContainer">
                        <h4>{address}
                        </h4>
                    </div>
                    <div className="paragraphContainer">
                        <p>

                            {para.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                    </div>
                    <div className="accordionSectionContainer">
                        <Accordion items={accordion} />
                    </div>

                </div>
                <div className="infoTabelSection">
                    <InfoTable items={infoTable} />
                </div>
            </div>
        </div>
    )
}

export default SinglePropertyInfo