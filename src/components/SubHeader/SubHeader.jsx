import './SubHeader.scss'

const SubHeader = ({ infoItems, icons }) => {
  return (
    <nav className='subHeader'>
      <div className='subHeaderContainer'>
        <div className="info">
          <ul>
            {infoItems.map((element, index) => {
              return (
                <li key={index}><i>{element.icon}</i> {element.label} </li>
              )
            })}
          </ul>
        </div>
        <div className="icons">
          <ul>
            {icons.map((element, index) => {
              return (
                <li key={index}>{element}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SubHeader