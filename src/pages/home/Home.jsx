import React from 'react'
import Slider from '../../components/Slider/Slider'
import Featured from '../../components/Featured/Featured'
import { slides, accordionItems, infoContent, facts, infoContent2, propertiesList,longPropertiesList, infoContentPhone, infoContentMail, formFields } from '../../tools/data'
import feature1 from '../../assets/images/feature1.jpg'
import videoFrame from '../../assets/images/video-frame.jpg'
import deal1 from '../../assets/images/deal-01.jpg'
import featureIcon from '../../assets/icons/featured-icon.png'
import "./Home.scss"
import Video from '../../components/Video/Video'
import Counter from '../../components/Counter/Counter'
import InfoTable from '../../components/InfoTable/InfoTable'
import DetailsInfoTable from '../../components/DetailsInfoTable/DetailsInfoTable'
import BestDeal from '../../components/BestDeal/BestDeal'
import PropertiesList from '../../components/PropertiesList/PropertiesList'
import ContactUs from '../../components/ContactUs/ContactUs'

const Home = () => {

  return (
    <div className='home'>
      <div className='sliderSection'>
        <Slider slides={slides} />
      </div>
      <div className='section'>
        <div className='featuredSection'>
          <Featured
            image={feature1}
            sticker={featureIcon}
            header="Featured"
            title="Best Appartment & Sea View"
            accordion={accordionItems}
            infoTabel={infoContent}
          />
        </div>
      </div>
      <div className='section'>
        <div className="videoSection">
          <div className="backgroundContainer">
            <div className="backgroundImage"></div>
          </div>
          <Video
            header="Video View"
            title="Get Closer View & Different Feeling"
            frame={videoFrame}
            video="https://youtube.com"
          />
        </div>
      </div>
      <div className='section'>
        <div className="factsSection">
          <div className='factsSectionContainer'>
            {facts.map((item, index) => {
              return (
                <div className='fact' key={index}>
                  <Counter
                    count={item.count}
                    type={item.type}
                    text={item.text}
                  />
                </div>
              )
            })}
          </div>
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

      <div className='section properties'>
        <div className='propertiesSection'>
          <PropertiesList
            header="Properties"
            title="We Provide The Best Property You Like"
            buttons={["Show All", "Apartment", "Villa House", "Penthouse"]}
            cards={propertiesList}
            pagenation={false}
            cardsPerPage="0"
            visibleButtons={false}
            visibleTitle={true}
          />
        </div>
      </div>

      <div className="section">
        <div className="contactUsHomePageSection">
          <div className="backgroundContainer">
            <div className="backgroundImage"></div>
          </div>
          <div className="ContactUsHPCContainer">
            <ContactUs
              header="Contact Us"
              title="Get In Touch With Our Agents"
              para=""
              titleTop={true}
              paraVisible={false}
              mapBottom={false}
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
    </div>


  )
}

export default Home