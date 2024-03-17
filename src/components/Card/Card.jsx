
import './Card.scss'
const Card = ({ image, category, price, address, details, visibleButton }) => {
  return (
    <div className='card'>
      <div className="cardContainer">
        <div className="imageSection">
          <img src={image} alt="" />
        </div>
        <div className="catSection">
          <div className="category">
            {category}
          </div>
          <div className="price">
            {price}
          </div>
        </div>
        <div className="addressSection">
          <h4>{address}
          </h4>
        </div>
        <div className="detailsSection">
          <ul className='detailsSectionContainer'>
            {Object.entries(details).map(([key, value]) => (
              <li key={key} className='detailsItem'>
                {key}: <b>{value}</b>
              </li>
            ))}

          </ul>
        </div>
        {visibleButton && (
          <div className="buttonSection">
            <button>Schedule a visit</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Card