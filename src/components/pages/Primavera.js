import style from '../Primavera.module.css';
import React, { Fragment } from 'react';


export default function Primavera() {
    return (
       <Fragment>
            <section>
                    <aside className={style.left}>
                        <h2>La fioritura dei ciliegi</h2>
                        <p>Il <b>fiore di ciliegio</b> giapponese, detto anche <i>sakura</i>, è stato adorato a lungo da persone di tutto il mondo. 
                            È considerato un <b>simbolo di rinnovamento</b>, bellezza e vitalità. <br></br>Ogni anno, durante la stagione primaverile, 
                            migliaia di persone giungono in Giappone per ammirare il <b>meraviglioso spettacolo</b> di questi fiori bianchi o rosa, 
                            che sbocciano in massa.
                            <br></br>Il ciliegio, rappresenta quindi il Giappone, e la sua delicatezza, la brevità della sua esistenza sono per i giapponesi 
                            il <b>simbolo della fragilità</b>, ma anche della rinascita e della bellezza dell’esistenza oltre che per finire anche un segno 
                            di buon auspicio.</p>       
                    </aside>


                    <div className={style.gallery}>
                        <img className={style.gallerycard} src="/images/OsakaDay1-2.jpg" alt="Himeji Castle" />
                        <div className={style.caption}>Himeji Castle</div>
                    </div>
                    <div className={style.gallery}>
                        <img className={style.gallerycard} src="/images/train.jpg" alt="Cherry Blossoms" />
                        <div className={style.caption}>Cherry Blossoms</div>
                    </div>
            
                    <section className={style.clear}>
                        <h2>Cos'è l'hanami?</h2>   
                        <p>Letteralmente, “hanami” significa “ammirare i fiori” e in Giappone si tratta di una vera e propria tradizione. 
                        La tradizione dell’hanami ha una storia millenaria e viene vissuta intensamente da tutto il Giappone, specialmente attraverso 
                        picnic all'ombra dei ciliegi in fiore, in cui si radunano familiari, amici e colleghi di lavoro, che si tengono in parchi, 
                        giardini di templi e castelli (a volte anche cimiteri), etc. 
                        Vi sono manicaretti che i giapponesi mangiano appositamente per l’occasione dell’Hanami. Fra di questi troviamo alcuni dolcetti 
                        tipici come i <i>sakura mochi</i> avvolti nella tradizionale foglia di ciliegio e i dolci di pasta di riso chiamati <i>hanami dango</i>.</p>
                    </section>
                    
                    <section>
                        <div className={style.container}>
                            <div className={style.box}>
                                <img className={style.boximg} src="/images/hanamibento.jpg" />
                                <span className={style.boxspan}>Hanami Bento (Lunch box/picnic food)</span>
                            </div>
                            
                            <div className={style.box}>
                                <img className={style.boximg} src="/images/Hanami Dango.jpg" />
                                <span className={style.boxspan}>Hanami Dango</span>
                            </div>
                                
                            <div class={style.box}>
                                <img className={style.boximg} src="/images/sakura-mochi.jpg" />
                                <span className={style.boxspan}>Sakura Mochi</span>
                            
                            </div>
                        </div>
                    </section>

                
                    <section>
                        <p>Il vero senso della tradizione dell’Hanami non risiede nella mera osservazione della bellezza dei fiori, ma anche e soprattutto 
                        nel sentimento di malinconia e commozione nel vederli cadere dai rami, trasportati dal delicato vento primaverile. 
                        Il fiore diventa così simbolo di caducità: proprio come i sakura sbocciano e ci donano la loro bellezza per un breve tempo, 
                        allo stesso modo noi percepiamo il rapido scorrere della vita umana.</p>
                    </section>

                    <section>
                        <h2>Previsioni fioritura dei ciliegi 2022</h2>
                        <img className={style.map} src="/images/forecast2022.png" alt="Mappa fioritura 2022" /> 
                        
                        <p>Il tempo medio di fioritura dei <i>sakura</i> può variare a seconda della posizione geografica 
                            all’interno del paese. Le aree con climi invernali più miti vedono fiorire prima i ciliegi. Solitamente, nelle regioni meridionali 
                            la fioritura avviene prima, procedendo man mano verso nord. Il vento, la pioggia e la temperatura possono anticipare o posticipare 
                            la fioritura e allungare o accorciare la stagione dei fiori di ciliegio.</p>
                    </section>

            </section>





       </Fragment>
    )
}

