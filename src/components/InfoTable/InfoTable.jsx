import "./InfoTable.scss"

const InfoTable = ({ items }) => {
    return (
        <div className='infoTable'>
            <div className="infoTableContainer">
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className='image'>
                                    <img src={item.image}>
                                    </img>
                                </div>
                                <div className='info'>
                                    <h4>
                                        {item.title}
                                    </h4>
                                    <span>
                                        {item.text}
                                    </span>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default InfoTable