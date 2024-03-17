import React from 'react'
import {propertiesList, longPropertiesList } from '../../tools/data'
import './Properties.scss'
import PropertiesList from '../../components/PropertiesList/PropertiesList'
import Hero from '../../components/Hero/Hero'
import propBG from '../../assets/images/page-heading-bg.jpg'

const Properties = () => {
  return (
    <div className='propertiesPage'>
      <div className='section hero'>
        <div className='heroSection'>
          <div className="heroImageContainer">
            <Hero
              directory="Home/Properties"
              title="Properties"
              image={propBG}
            />

          </div>

        </div>
      </div>
      <div className='section properties'>
        <div className='propertiesListSection'>
          <PropertiesList
            header=""
            title=""
            buttons={["Show All", "Apartment", "Villa House", "Penthouse"]}
            cards={longPropertiesList}
            pagination={true}
            cardsPerPage= "6"
            visibleButtons={true}
            visibleTitle={false}
          />


        </div>
      </div>
    </div>
  )
}

export default Properties