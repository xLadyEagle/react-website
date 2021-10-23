import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <Fragment>
            <li className="cards-item">
                <Link to={props.path} className="cards-item-link">
                    <figure className="cards-item-pic-wrap">
                        <img className="cards-item-img" src={props.src} alt="Japan image" />
                    </figure> 
                    <div className="cards-item-text">
                        <h5>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </Fragment>
    )
}


export default CardItem;
