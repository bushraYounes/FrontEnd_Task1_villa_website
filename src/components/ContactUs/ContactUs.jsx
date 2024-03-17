
import './ContactUs.scss'
import { h6Style } from '../../tools/style'
import InfoTable from '../InfoTable/InfoTable'
import ContactForm from '../ContactForm/ContactForm'
import GoogleMap from '../GoogleMap/GoogleMap'

const ContactUs = ({ header, title, para, paraVisible, titleTop, mapBottom, fields, messageVisible, contactInfoPhone, contactInfoMail, mapLatitude, mapLongitude, mapZoom, mapWidth, mapHeight }) => {
    return (
        <div className='contactUsComponent'>
            <div className="contactUsComponentContainer">
                {titleTop && (
                    <div className="topSection">
                        <div className="headerSection">
                            <h6 style={h6Style}>
                                {header}
                            </h6>
                        </div>
                        <div className="titleSection">
                            <h2>
                                {title}
                            </h2>
                        </div>
                    </div>
                )}

                <div className="middelSection">
                    <div className="leftSection">
                        {titleTop && !mapBottom && (
                            <div className="topLeftSectionMap">
                                <div className="mapSection">
                                    <GoogleMap
                                        lat="25.9524779"
                                        lon="-80.1187812"
                                        zoom="11"
                                        width="100%"
                                        height="50vh"
                                    />
                                </div>
                            </div>
                        )}
                        {!titleTop && mapBottom && (
                            <div className="topLeftSection">
                                <div className="headerSection">
                                    <h6 style={h6Style}>
                                        {header}
                                    </h6>
                                </div>
                                <div className="titleSection">
                                    <h2>
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        )}

                        {paraVisible && (
                            <div className="middleLeftSection">
                                <p>{para}</p>
                            </div>
                        )}

                        <div className="bottomLeftSection">
                            <div className="bottomLeftSectionInfoTables">
                                <div className="infoTableContactSection">
                                    <InfoTable items={contactInfoPhone} />
                                </div>
                                <div className="infoTableContactSection">
                                    <InfoTable items={contactInfoMail} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="rightSection">
                        <div className="formContactUsContainer">
                            <ContactForm
                                fields={fields}
                                messageVisible={messageVisible}
                            />
                        </div>


                    </div>

                </div>
                {mapBottom && (
                    <div className="bottomSection">
                        <div className="mapSection">

                            <GoogleMap
                                lat="25.9524779"
                                lon="-80.1187812"
                                zoom="11"
                                width="100%"
                                height="50vh"
                            />
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactUs