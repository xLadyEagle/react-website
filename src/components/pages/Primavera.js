import style from '../Primavera.module.css';
import React, { useEffect, Fragment } from 'react';


export default function Primavera() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
       <Fragment>
            <div className={style.title}>
                    <img src="/react-website/images/primavera2.jpg" alt="Cherry blossoms" />
                    <h1 className={style.title}>PRIMAVERA</h1>
            </div>
            <section className={style.text}>
                    <aside className={style.left}>
                        <h2>La fioritura dei ciliegi</h2>
                        <br></br>
                        <p>Il <b>fiore di ciliegio</b> giapponese, detto anche <i>sakura</i>, è stato adorato a lungo da persone di tutto il mondo. 
                            È considerato un <b>simbolo di rinnovamento</b>, bellezza e vitalità. <br></br>Ogni anno, durante la stagione primaverile, 
                            migliaia di persone giungono in Giappone per ammirare il <b>meraviglioso spettacolo</b> di questi fiori bianchi o rosa, 
                            che sbocciano in massa.
                            <br></br>Il ciliegio, rappresenta quindi il Giappone, e la sua delicatezza, la brevità della sua esistenza sono per i giapponesi 
                            il <b>simbolo della fragilità</b>, ma anche della rinascita e della bellezza dell’esistenza oltre che per finire anche un segno 
                            di buon auspicio.</p>       
                    </aside>


                    <div className={style.gallery}>
                        <img className={style.gallerycard} src="/react-website/images/OsakaDay1-2.jpg" alt="Himeji Castle" />
                        <div className={style.caption}>Himeji Castle</div>
                    </div>
                    <div className={style.gallery}>
                        <img className={style.gallerycard} src="/react-website/images/train.jpg" alt="Cherry Blossoms" />
                        <div className={style.caption}>Cherry Blossoms</div>
                    </div>
            
                    <section className={style.clear}>
                        <h2>Cos'è l'hanami?</h2>
                        <br></br>   
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
                                <img className={style.boximg} src="/react-website/images/hanamibento.jpg" />
                                <span className={style.boxspan}>Hanami Bento (Lunch box/picnic food)</span>
                            </div>
                            
                            <div className={style.box}>
                                <img className={style.boximg} src="/react-website/images/Hanami Dango.jpg" />
                                <span className={style.boxspan}>Hanami Dango</span>
                            </div>
                                
                            <div className={style.box}>
                                <img className={style.boximg} src="/react-website/images/sakura-mochi.jpg" />
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
                        <br></br>
                        <img className={style.map} src="/react-website/images/forecast2022.png" alt="Mappa fioritura 2022" /> 
                        
                        <p>Il tempo medio di fioritura dei <i>sakura</i> può variare a seconda della posizione geografica 
                            all’interno del paese. Le aree con climi invernali più miti vedono fiorire prima i ciliegi. Solitamente, nelle regioni meridionali 
                            la fioritura avviene prima, procedendo man mano verso nord. Il vento, la pioggia e la temperatura possono anticipare o posticipare 
                            la fioritura e allungare o accorciare la stagione dei fiori di ciliegio.</p><br></br>
                    </section>

                    <section>
                        <h2>La fioritura dei ciliegi a Tokyo</h2>
                        <br></br>
                        <div className={style.clear}>
                        <p>Nonostante si tratti di una grande città, anche a Tokyo ci sono tantissimi posti da cui ammirare i ciliegi in fiore.<br></br>
                            Di seguito elenchiamo i <b>5 posti migliori</b> per ammirare la bellezza effimera dei fiori.
                        </p>

                        <div className={style.gallery}>
                            <img className={style.gallerycard} src="/react-website/images/meguro-river.jpg" alt="Meguro River" />
                            <div className={style.caption}>Meguro River</div>
                        </div>
                        <div className={style.gallery}>
                            <img className={style.gallerycard} src="/react-website/images/shinjuku-gyoen.jpg" alt="Shinjuku Gyoen" />
                            <div className={style.caption}>Shinjuku Gyoen</div>
                        </div>
                        <div className={style.gallery}>
                            <img className={style.gallerycard} src="/react-website/images/chidorigafuchi.jpg" alt="Chidorigafuchi" />
                            <div className={style.caption}>Chidorigafuchi</div>
                        </div>
                        <div className={style.gallery}>
                            <img className={style.gallerycard} src="/react-website/images/ueno.jpg" alt="Ueno Onshi Park" />
                            <div className={style.caption}>Ueno Onshi Park</div>
                        </div>
                        <div className={style.gallery}>
                            <img className={style.gallerycard} src="/react-website/images/midtown.jpg" alt="Tokyo Mid Town" />
                            <div className={style.caption}>Tokyo Mid Town</div>
                        </div>

                        
                        <ol className={style.clear}>
                        <br></br>
                            <li><b>Meguro River (目黒川)</b> 
                            <p>Uno dei luoghi più famosi per ammirare i ciliegi in fiore a Tokyo è il fiume Meguro, oltre 800 ciliegi formano una galleria rosa per 3,8 chilometri lungo il fiume in un panorama mozzafiato perfetto da fotografare.</p></li>
                            
                            <li><b>Shinjuku Gyoen (新宿御苑)</b>
                            <p>Uno dei più grandi parchi nazionali della città, il giardino ospita circa 1.000 alberi di ciliegio.</p></li>
        
                            <li><b>Chidorigafuchi (千鳥ヶ淵)</b>
                            <p>Il punto più pittoresco di Tokyo per ammirare i ciliegi in fiore.</p></li>
                            
                            <li><b>Ueno Onshi Park (上野恩賜公園)</b>
                                <p>Il luogo più affollato per vedere fiori di ciliegio a Tokyo, in quanto molto visitatori vi si recano per l'Hanami.</p></li>
        
                            <li><b>Tokyo Mid Town（東京ミッドタウン）</b>
                            <p>Tokyo MidTown è estremamente popolare per vedere i fiori di ciliegio (Sakura) di notte.</p></li>
                        </ol>
                        </div>
                    </section>

            </section>





       </Fragment>
    )
}

