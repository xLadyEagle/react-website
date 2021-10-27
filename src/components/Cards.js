import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
                <h1>Where do you want to go?</h1>
                <div className="cards-container">
                    <div className="cards-wrapper">
                        <ul className="cards-items">
                            <CardItem 
                            src="/react-website/images/image.jpeg"
                            text="Kyoto"
                            path="/Kyoto"/>

                            <CardItem 
                            src="/react-website/images/nara.jpg"
                            text="Nara"
                            path="/Nara"/>

                            <CardItem 
                            src="/react-website/images/Osaka.jpg"
                            text="Osaka"
                            path="/Osaka"/>
                    
                            <CardItem 
                            src="/react-website/images/Tokyo Skyline.jpg"
                            text="Tokyo"
                            path="/Tokyo"/>
                        </ul> 
                    </div>    
                </div>
        </div>
    )
}

export default Cards;
