import { useState } from "react";
import "./Slider.scss"

const slideStyles = {};

const Slider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].image})`
    };


    return (
        <div className='slider' >
            <div className="sliderContainer" >
                <div className="arrows">
                    <div className="leftArrow" onClick={goToPrevious} >
                        {'<'}
                    </div>
                    <div className="rightArrow" onClick={goToNext} >
                        {'>'}
                    </div>
                </div>
                <div className="slides" style={slideStylesWidthBackground}>
                    <div className="dotsContainer" >
                        {slides.map((slide, slideIndex) => (
                            <div
                                className={`dot ${slideIndex === currentIndex ? "selected" : ""}`}
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                            >
                                ●
                            </div>
                        ))}
                    </div>
                    <div className="slidesContent">
                        <div className="category">
                            <span className="city">
                                {slides[currentIndex].city} ,
                                <em className="country">
                                    {slides[currentIndex].country}
                                </em>
                            </span>
                        </div>
                        <h2 className="title">
                            {slides[currentIndex].title}
                        </h2>
                        <h3 className="text">
                            {slides[currentIndex].text}
                        </h3>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider