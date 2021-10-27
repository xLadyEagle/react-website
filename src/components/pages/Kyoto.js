import style from '../Cities.module.css';
import React, { Fragment } from 'react';


export default function Kyoto()  {
    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/react-website/images/kyoto-streets.jpg" alt="Kyoto" />
                    <h1 className={style.title}>KYOTO</h1>
            </div>
            <div className={style.text}>
                <h1 className={style.header}>Cosa vedere a Kyoto</h1>
                <br></br>
                <p> Per oltre un millennio, dal 794 al 1868, Kyoto fu capitale del Giappone e residenza dell’Imperatore. 
                <br></br>Antica città immersa nella storia e nelle tradizioni, mostra ancora oggi tutti i segni del suo splendente passato ed affascina i visitatori con i suoi numerosi templi e giardini zen.
                <br></br>Per gli amanti del Giappone tradizionale Kyoto è una meta imperdibile, che si può vivere ancora meglio soggiornando in uno dei tipici <i>ryokan</i> della città, al posto di un classico hotel.
                È una delle dieci città più grandi del paese con una popolazione di 1,5 milioni di persone.
                <br></br>Per visitare al meglio Kyoto, consiglio di utilizzare gli autobus oppure noleggiare una bicicletta. 
                La metropolitana può essere comoda per raggiungere il proprio hotel/ryokan, ma difficilmente si usa per raggiungere i luoghi d’interesse.</p>
            <div>
                    <ol className={style.list}>
                            <li><h2>Fushimi Inari (伏見稲荷大社)</h2> 
                            <p>Il Fushimi Inari è un importante santuario scintoista nel parte sud di Kyoto. 
                            È famoso per le sue migliaia di torii rossi lungo i sentieri che portano al santuario. 
                            I sentieri conducono nella foresta boscosa e fino alla cima del sacro monte Inari, che raggiunge un’altezza di 233 metri sopra il livello del mare. 
                            Questa particolarità rende questo luogo davvero magico e unico nel suo genere.
                            <br></br>Fushimi Inari è anche il santuario più antico e venne costruito prima ancora della nascita di Kyoto.</p>
                                <img className={style.thumbnail} src="/react-website/images/Fushimi-Inari-Taisha-Kyoto.jpg" alt="Fushimi Inari"/>
                            </li><br></br>
                            
                            <li><h2>Arashiyama  (嵐山)</h2>
                                <p>Arashiyama è famosa soprattutto per la sua caratteristica foresta di bambù. 
                                <br></br>Si possono ammirare bellissimi paesaggi naturali e visitare alcuni dei numerosi templi della zona.
                                <br></br>Arashiyama si trova a poco più di un quarto d’ora di treno dal centro della città di Kyoto; 
                                un viaggio breve che vi farà immergere in un’atmosfera di profonda quiete.</p>
                                <img className={style.thumbnail} src="/react-website/images/bamboo.jpg" alt="Arashiyama"/>
                            </li><br></br>
        
                            <li><h2>Gion (祇園)</h2>
                                <p>Gion è uno dei più famosi ed esclusivi quartieri delle geisha dell’intero Giappone, vi sono numerose abitazioni tradizionali e sale da tè. 
                                Inoltre, è stato proclamato patrimonio culturale del Giappone.
                                La zona in cui è più facile avvistare delle geisha è la via di Hanamikoji.
                                L’attrazione più importante del quartiere Gion resta comunque il tempio di Yasaka, un santuario scintoista composto da svariati edifici.</p>
                                <img className={style.thumbnail} src="/react-website/images/gion-kyoto.jpg" alt="Gion"/>
                            </li><br></br>
                            
                            <li><h2>Kiyomizu-dera (清水寺)</h2>
                                <p>Uno dei templi più belli e imponenti del Giappone, la bellezza della struttura e la solennità che si respira tra le mura che lo sorreggono 
                                hanno fatto in modo che l’Unesco, nel 1994, dichiarasse questo luogo incantevole patrimonio dell’Unesco.
                                <br></br>Dall’ampia terrazza in legno si può ammirare uno straordinario panorama su Kyoto.
                                Il tempio Kiyomizudera è legato alla setta buddista degli Hosso e il nome affonda le sue radici nella cascata che scorre all’interno dell’imponente complesso: 
                                Kiyomizu significa acqua pura oppure acqua chiara.</p>
                                <img className={style.thumbnail} src="/react-website/images/Kiyomizu-dera.jpg" alt="Kiyomizu-dera"/>
                            </li><br></br>
        
                            <li><h2>Higashiyama (東山)</h2>
                                <p>Il quartiere di Higashiyama si trova nella parte orientale della città. 
                                <br></br>Il distretto storico circostante il tempio Kiyomizu-dera è uno dei posti più adatti per immergersi nelle atmosfere della Kyoto tradizionale, caratterizzato da casette di legno e piccole botteghe.
                                <br></br>Il suo nome rimanda subito al nome della montagna su cui il distretto si appoggia, la cosiddetta montagna dell’Est.</p>
                                <img className={style.thumbnail} src="/react-website/images/higashiyama-pagoda-kyoto.jpg" alt="Higashiyama"/>
                            </li><br></br>
                        </ol>
            </div>
            <div>
                <h1>Come raggiungere Kyoto</h1>
                <br></br>
                <p>La città di Kyoto è facilmente raggiungibile dalle principali metropoli giapponesi. 
                <br></br>Grazie agli ottimi collegamenti in treno, autobus e aereo, la si può raggiungere in breve tempo sia da Tokyo che dalle più vicine Osaka e Kobe. 
                <br></br>La maggior parte dei turisti prediligono viaggiare con i treni ad alta velocità, sfruttando al massimo alcuni pass per risparmiare come il Japan Rail Pass, ma a seconda del tempo e del budget a disposizione, si possono valutare anche altre alternative.</p>
            </div>
            </div>



        </Fragment>
     );
};