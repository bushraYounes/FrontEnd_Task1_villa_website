import Card from '../Card/Card';
import './PropertiesList.scss';
import { h6Style } from '../../tools/style';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';


const PropertiesList = ({ header, title, buttons, cards, pagination,cardsPerPage, visibleButtons, visibleTitle }) => {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = parseInt(cardsPerPage);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(cards.slice(itemOffset, endOffset));
        setPageCount( Math.ceil(cards.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, cards]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % cards.length;
        setItemOffset(newOffset);
    };


    return (
        <div className="propertiesList">
            <div className="propertiesListContainer">
                <div className="topSection">
                    {visibleTitle && (
                        <div className="titleSection">
                            <h6 style={h6Style}>{header}</h6>
                            <h2>{title}</h2>
                        </div>
                    )}
                    {visibleButtons && (
                        <div className="buttonsSection">
                            {buttons.map((button, index) => {
                                return (
                                    <div key={index} className="buttonSection">
                                        <button>{button}</button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className="bottomSection">
                    {pagination ? (
                        <ul>
                            {currentItems.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <Card
                                            image={element.image}
                                            category={element.category}
                                            price={element.price}
                                            address={element.address}
                                            details={element.details}
                                            visibleButton={true}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <ul>
                            {cards.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <Card
                                            image={element.image}
                                            category={element.category}
                                            price={element.price}
                                            address={element.address}
                                            details={element.details}
                                            visibleButton={true}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>

                {pagination ? (
                    <div className="paginationSection">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">>"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="<<"
                            renderOnZeroPageCount={null}
                            containerClassName='pagination'
                            pageLinkClassName='page-num'
                            previousLinkClassName='page-num'
                            nextLinkClassName='page-num'
                            activeLinkClassName='active'
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default PropertiesList;