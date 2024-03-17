import './DetailsInfoTable.scss'
const DetailsInfoTable = ({ items }) => {
    return (
        <div className='detailsInfoTable'>
            <div className="detailsInfoTableContainer">
                <ul>    
                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className='info'>
                                    <span>
                                        {item.title}
                                    </span>
                                    <h4>
                                        {item.value}
                                    </h4>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default DetailsInfoTable