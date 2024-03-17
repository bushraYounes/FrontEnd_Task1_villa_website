import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="accordion">
            <div className='accordionContainer'>
                {items.map((item, index) => { return (
                    <div key={index} className="accordion-item">

                        <button
                            className={`accordion-button${activeIndex === index ? ' notCollapsed' : ' collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                        </button>

                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse${activeIndex === index ? ' show' : ''}`}
                        >
                            <div className="accordion-body">{item.content}</div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    );
};

export default Accordion;