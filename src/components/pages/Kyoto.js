import style from '../Cities.module.css';
import React, { useEffect, Fragment } from 'react';


export default function Kyoto()  {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/react-website/images/kyoto-streets.jpg" alt="Kyoto" />
                    <h1 className={style.title}>KYOTO</h1>
            </div>
            <div className={style.text}>
                <h1 className={style.header}>Cosa vedere a Kyoto</h1>
                <br></br>
                <p> Per oltre un millennio, dal 794 al 1868, Kyoto <b>fu capitale del Giappone</b> e residenza dell’Imperatore. 
                <br></br><b>Antica città</b> immersa nella <b>storia</b> e nelle <b>tradizioni</b>, mostra ancora oggi tutti i segni del suo splendente passato ed affascina i visitatori con i suoi <b>numerosi templi e giardini zen</b>.
                <br></br>Per gli amanti del Giappone tradizionale Kyoto è una <b>meta imperdibile</b>, che si può vivere ancora meglio soggiornando in uno dei tipici <i>ryokan</i> della città, al posto di un classico hotel.
                È una delle dieci città più grandi del paese con una popolazione di 1,5 milioni di persone.
                <br></br>Per visitare al meglio Kyoto, consiglio di <b>utilizzare gli autobus</b> oppure <b>noleggiare una bicicletta</b>. 
                La metropolitana può essere comoda per raggiungere il proprio hotel/ryokan, ma difficilmente si usa per raggiungere i luoghi d’interesse.</p>
            <div>
                    <ol className={style.list}>
                            <li><h2>Fushimi Inari (伏見稲荷大社)</h2> 
                            <p>Il Fushimi Inari è un <b>importante santuario scintoista</b> nel parte sud di Kyoto. 
                            È famoso per le sue <b>migliaia di torii rossi</b> lungo i sentieri che portano al santuario. 
                            I sentieri conducono nella foresta boscosa e <b>fino alla cima del sacro monte Inari</b>, che raggiunge un’altezza di 233 metri sopra il livello del mare. 
                            Questa particolarità rende questo <b>luogo</b> davvero <b>magico</b> e <b>unico</b> nel suo genere.
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
                                <p>Gion è uno dei più famosi ed esclusivi <b>quartieri delle geisha</b> dell’intero Giappone, vi sono numerose abitazioni tradizionali e sale da tè. 
                                Inoltre, è stato proclamato <b>patrimonio culturale del Giappone</b>.
                                La zona in cui è più facile avvistare delle geisha è la via di Hanamikoji.
                                L’attrazione più importante del quartiere Gion resta comunque il <b>tempio di Yasaka</b>, un santuario scintoista composto da svariati edifici.</p>
                                <img className={style.thumbnail} src="/react-website/images/gion-kyoto.jpg" alt="Gion"/>
                            </li><br></br>
                            
                            <li><h2>Kiyomizu-dera (清水寺)</h2>
                                <p>Uno dei <b>templi più belli e imponenti</b> del Giappone, la bellezza della struttura e la solennità che si respira tra le mura che lo sorreggono 
                                hanno fatto in modo che l’Unesco, nel 1994, dichiarasse questo luogo incantevole patrimonio dell’Unesco.
                                <br></br>Dall’ampia terrazza in legno si può ammirare uno <b>straordinario panorama su Kyoto</b>.
                                Il tempio Kiyomizudera è legato alla setta buddista degli Hosso e il nome affonda le sue radici nella <b>cascata che scorre all’interno</b> dell’imponente complesso: 
                                Kiyomizu significa acqua pura oppure acqua chiara.</p>
                                <img className={style.thumbnail} src="/react-website/images/Kiyomizu-dera.jpg" alt="Kiyomizu-dera"/>
                            </li><br></br>
        
                            <li><h2>Higashiyama (東山)</h2>
                                <p>Il quartiere di Higashiyama si trova nella parte orientale della città. 
                                <br></br>Il distretto storico circostante il tempio Kiyomizu-dera è uno dei posti più adatti per immergersi nelle atmosfere della <b>Kyoto tradizionale</b>, caratterizzato da <b>casette di legno</b> e <b>piccole botteghe</b>.
                                <br></br>Il suo nome rimanda subito al nome della montagna su cui il distretto si appoggia, la cosiddetta montagna dell’Est.</p>
                                <img className={style.thumbnail} src="/react-website/images/higashiyama-pagoda-kyoto.jpg" alt="Higashiyama"/>
                            </li><br></br>
                        </ol>
            </div>
            <div>
                <h1>Come raggiungere Kyoto</h1>
                <br></br>
                <p>La città di Kyoto è <b>facilmente raggiungibile</b> dalle principali metropoli giapponesi. 
                <br></br>Grazie agli <b>ottimi collegamenti in treno, autobus e aereo</b>, la si può raggiungere in breve tempo sia da Tokyo che dalle più vicine Osaka e Kobe. 
                <br></br>La maggior parte dei turisti prediligono viaggiare con i <b>treni ad alta velocità</b>, sfruttando al massimo alcuni pass per risparmiare come il Japan Rail Pass, ma a seconda del tempo e del budget a disposizione, si possono valutare anche altre alternative.</p>
            </div>
            </div>



        </Fragment>
     );
};