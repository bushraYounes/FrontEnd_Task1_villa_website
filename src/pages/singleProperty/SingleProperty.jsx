import React from 'react'
import './SingleProperty.scss'

import Hero from '../../components/Hero/Hero'
import propBG from '../../assets/images/page-heading-bg.jpg'
import singleProperty from '../../assets/images/single-property.jpg'
import SinglePropertyInfo from '../../components/SinglePropertyInfo/SinglePropertyInfo'
import { singlePropertyPara1, accordionItems, infoContent, infoContent2 } from '../../tools/data'
import deal1 from '../../assets/images/deal-01.jpg'
import BestDeal from '../../components/BestDeal/BestDeal'


const SingleProperty = () => {
  return (
    <div className='singleProperty'>
      <div className='section hero'>
        <div className='heroSection'>
          <div className="heroImageContainer">
            <Hero
              directory="Home/Single Property"
              title="Single Property"
              image={propBG}
            />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="singlePropertySection">
          <SinglePropertyInfo
            image={singleProperty}
            category="Apartment"
            address="24 New Street Miami, OR 24560"
            para={singlePropertyPara1}
            accordion={accordionItems}
            infoTable={infoContent}
          />
        </div>
      </div>

      <div className='section bestDeal'>
        <div className='bestDealSection'>
          <BestDeal
            header="Best Deal"
            title="Find Your Best Deal Right Now!"
            buttons={["Appartment", "Villa House", "Penthouse"]}
            infoTable={infoContent2}
            image={deal1}
            detailsTitle="Extra Info About Penthouse"
            detailsContent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse."
            detailsContent2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse."
          />

        </div>
      </div>

    </div>
  )
}

export default SingleProperty