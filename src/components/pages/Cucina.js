import '../Cucina.css';
import React, { Fragment } from 'react';


export default function Cucina() {
    return ( 

    <Fragment>
        <div className="row">
            <div className="leftcolumn">
                    <div className="card">
                    <h1>Mangiare in Giappone</h1>
                    <h3>Una grande varietà di piatti</h3>
                    <img className="fullsize" src="images/Specialità regionali.jpg" />
                    <p>La <b>cucina giapponese</b>, famosa nel mondo per le sue tradizioni culinarie antiche e ancora oggi ben radicate, è considerata <b>una delle più sane</b>, 
                        complete ed equilibrate, sia in Oriente sia in Occidente. Gran parte delle ricette giapponesi vengono preparate utilizzando <b>due ingredienti</b>
                        fondamentali: il <b>riso</b> e il <b>pesce</b>, impiegato principalmente crudo, sempre di prima scelta e rigorosamente freschissimo.</p>
                    </div>
                <div className="card">
                    <h1>Guida ai piatti tipici</h1>
                    <h3>10 piatti da provare assolutamente</h3>
                    <ol>
                    <li><a href="#Takoyaki">Takoyaki</a></li><br></br>
                    <li><a href="#Okonomiyaki">Okonomiyaki</a></li><br></br>
                    <li><a href="#Yakitori">Yakitori</a></li><br></br>
                    <li><a href="#Tonkatsu">Tonkatsu</a></li><br></br>
                    <li><a href="#Tempura">Tempura</a></li><br></br>
                    <li><a href="#Tonkotsu Ramen">Tonkotsu Ramen</a></li><br></br>
                    <li><a href="#Gyoza">Gyoza</a></li><br></br>
                    <li><a href="#Soba">Soba</a></li><br></br>
                    <li><a href="#Tamagoyaki">Tamagoyaki</a></li><br></br>
                    <li><a href="#Melon Pan">Melon Pan</a></li><br></br>
                    </ol>
                </div>
                <div className="card">
                    <h3><a id="Takoyaki"></a>Takoyaki</h3>
                    <p>I <i>Takoyaki</i> sono polpette di pastella con all'interno pezzetti di polpo, zenzero marinato e cipolla verde.
                    Vengono guarniti con salsa di okonomiyaki, alga verde, maionese, e katsuobushi. E' una delle specialità tipiche di Osaka.</p>
                    <img className="aligncenter" src="images/Takoyaki.jpg" />
                </div>
                <div className="card">
                    <h3><a id="Okonomiyaki"></a>Okonomiyaki</h3>
                    <p>L'<i>Okonomiyaki</i> è un piatto a base di foglia di cavolo e impasto (acqua e farina e uova) avvolto attorno a un qualsiasi tipo di cibo, 
                    solitamente carne e vegetali. Viene completato con l’apposita salsa ed il katsuobushi, ovvero soffici 
                    scaglie di tonno fermentato e affumicato. </p>
                    <img className="aligncenter" src="images/Okonomiyaki.jpg" />
                </div>
                <div className="card">
                    <h3><a id="Yakitori"></a>Yakitori</h3>
                    <p>Gli <i>Yakitori</i> sono spiedini di pollo (non si usa solo il petto ma tutte le parti dell’animale) grigliati: saporiti, croccanti e aromatici. 
                    La caratteristica principale è la marinatura della carne in una salsa di soia dolce (<i>teriyaki</i>).</p>
                    <img className="aligncenter" src="images/Yakitori.jpg" />
                </div>
                <div className="card">
                    <h3><a id="Tonkatsu"></a>Tonkatsu</h3>
                    <p>Il <i>Tonkatsu</i> è una portata giapponese che consiste in cotoletta di maiale impanata e fritta. 
                    La differenza principale rispetto alla classica cotoletta occidentale, è che la carne viene impanata nel <i>panko</i>, 
                    il croccante pan grattato giapponese, il quale dona ai piatti una consistenza più leggera e delicata.</p>
                    <img className="aligncenter" src="/images/Tonkatsu.jpg" />
                </div>
                <div class="card">
                    <h3><a id="Tempura"></a>Tempura</h3>
                    <p>Si tratta di una frittura di verdure e gamberi passati nella tradizionale pastella giapponese e fritti a 
                    temperatura molto alta in modo da conferire al fritto una incredibile asciuttezza, un aspetto caratteristico ed una grande leggerezza.</p>
                    <img className="aligncenter" src="/images/tempura.jpg" />
                </div>
                <div className="card">
                    <h3><a id="Tonkotsu Ramen"></a>Tonkotsu Ramen</h3>
                    <p>Il <i>ramen</i> è un piatto estremamente diffuso in Giappone, nonchè molto economico.
                    La sua caratteristica principale è il brodo di maiale, bianco, denso ed estremamente saporito. 
                    I ramen vengono serviti con uovo marinato, carne e verdure.
                    </p>
                    <img className="aligncenter" src="/images/tonkotsuramen.jpg" />
                </div>
                <div className="card">
                    <h3><a id="Gyoza"></a>Gyoza</h3>
                    <p>I <i>gyoza</i> sono ravioli ripieni di carne e verdure che vengono scottati nella piastra.
                    Sono caratterizzati da un ripieno di carne macinata (di solito maiale o pollo) con l’aggiunta di cipollotti, 
                    zenzero e aglio, il tutto avvolto in una sottile pasta a base di farina e acqua.</p>
                    <img className="aligncenter" src="/images/Gyoza.jpg" />
                </div>
                <div className="card">
                    <h3><a id="Soba"></a>Soba</h3>
                    <p>Spaghetti di grano saraceno.
                    Il colore più scuro e il sapore deciso di questi pizzoccheri nipponici li rendono ideali per accompagnarsi a salse dal gusto più intensto, 
                    con la presenza di cipollotto e wasabi. La soba si può mangiare in un brodo caldo o fredda a parte. 
                    Quando è servita fredda viene inzuppata in un saporito brodo (anch’esso freddo) e poi mangiata.</p>
                    <img className="aligncenter" src="/images/soba.jpg" />
                </div>
                <div className="card">
                    <h3><a id="Tamagoyaki"></a>Tamagoyaki</h3>
                    <p>Il <i>tamagoyaki</i> non è altro che una frittata giapponese ottenuta dalla cottura di diversi strati di uovo sbattuto arrotolati. 
                    Si può mangiare appena cotta o servita come contorno di altri piatti. E’ salata o dolce a seconda dell’uso di salsa di soia o zucchero. 
                    Non tutti sanno che tra i pezzi di sushi quello con la frittata viene solitamente consumato per ultimo. 
                    Non essendoci dessert nel ristorante di sushi questo pezzo dolce ne fa in qualche modo le veci. </p>
                    <img className="aligncenter" src="/images/tamagoyaki.jpg" />
                </div>    
                <div className="card">
                    <h3><a id="Melon Pan"></a>Melon Pan</h3>
                    <p>Il <i>melon pan</i> è uno dei dolci giapponesi più amato dagli italiani, probabilmente perché ricorda in qualche modo una brioche. 
                    Il melon pan non ha davvero il gusto di melone e prende il nome dalla forma che ricorda vagamente il melone retato. 
                    E’ leggero e morbido all’interno con una crosta leggermente più dura. Ottimo da assaggiare appena sfornato in un negozio di Asakusa. </p>
                    <img className="aligncenter" src="/images/melonpan.jpg" />
                </div>     
            </div>
        </div>
    </Fragment>
     );
}
 

