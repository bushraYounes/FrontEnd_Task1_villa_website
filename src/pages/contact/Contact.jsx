import React from 'react'
import './Contact.scss'

import Hero from '../../components/Hero/Hero'
import propBG from '../../assets/images/page-heading-bg.jpg'
import ContactUs from '../../components/ContactUs/ContactUs'
import { infoContentPhone, infoContentMail, formFields } from '../../tools/data'

const Contact = () => {
  return (
    <div className='contactPage'>

      <div className='section hero'>
        <div className='heroSection'>
          <div className="heroImageContainer">
            <Hero
              directory="Home/Contact Us"
              title="Contact Us"
              image={propBG}
            />
          </div>

        </div>
      </div>

      <div className='section contact'>
        <div className="contactUsSection">
          <ContactUs
            header="Contact Us"
            title="Get In Touch With Our Agents"
            para="When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us."
            titleTop={false}
            paraVisible = {true}
            mapBottom={true}
            fields={formFields}
            messageVisible={true}
            contactInfoPhone={infoContentPhone}
            contactInfoMail={infoContentMail}
            mapLatitude="25.9524779"
            mapLongitude="25.9524779"
            mapZoom="11"
            mapWidth="100%"
            mapHeight="50vh"
          />
        </div>

      </div>
    </div>
  )
}

export default Contact