import './Counter.scss'

const Counter = ({ count, type, text }) => {
    return (
        <div className='counter'>
            <div className="counterContainer">
                <div className="number">
                    <h2>
                        {count}
                    </h2>
                </div>
                <div className="text">
                    <p>
                        {type}
                    </p>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Counter