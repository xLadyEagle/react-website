import style from '../Kyoto.module.css';
import React, { Fragment } from 'react';


export default function Nara()  {
    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/images/kyoto-streets.jpg" alt="Kyoto" />
                    <h1 className={style.title}>KYOTO</h1>
            </div>
            <div className={style.text}>
                <h1>Cosa vedere a Kyoto</h1>
                <p> Per oltre un millennio, dal 794 al 1868, Kyoto fu capitale del Giappone e residenza dell’Imperatore. 
                Antica città immersa nella storia e nelle tradizioni, mostra ancora oggi tutti i segni del suo splendente passato ed affascina i visitatori con i suoi numerosi templi e giardini zen.
                Per gli amanti del Giappone tradizionale Kyoto è una meta imperdibile, che si può vivere ancora meglio soggiornando in uno dei tipici <i>ryokan</i> della città, al posto di un classico hotel.
                È una delle dieci città più grandi del paese con una popolazione di 1,5 milioni di persone.
                Per visitare al meglio Kyoto, consiglio di utilizzare gli autobus oppure noleggiare una bicicletta. 
                La metropolitana può essere comoda per raggiungere il proprio hotel/ryokan, ma difficilmente si usa per raggiungere i luoghi d’interesse.</p>
            <div>
                    <ol className={style.list}>
                            <li><h2>Fushimi Inari</h2> 
                            <p>Il Fushimi Inari è un importante santuario scintoista nel parte sud di Kyoto. 
                            È famoso per le sue migliaia di torii rossi lungo i sentieri che portano al santuario. 
                            I sentieri conducono nella foresta boscosa del sacro monte Inari, che si trova a 233 metri di altitudine.</p>
                                <img className={style.thumbnail} src="/images/fujimiinari.jpg" alt="Fushimi Inari"/>
                            </li><br></br>
                            
                            <li><h2>Arashiyama</h2>
                                <p>Arashiyama è famosa soprattutto per la sua caratteristica foresta di bambù. 
                                Si possono ammirare bellissimi paesaggi naturali e visitare alcuni dei numerosi templi della zona.
                                Arashiyama si trova a poco più di un quarto d’ora di treno dal centro della città di Kyoto; 
                                un viaggio breve che vi farà immergere in un’atmosfera di profonda quiete.</p>
                                <img className={style.thumbnail} src="/images/bamboo.jpg" alt="Arashiyama"/>
                            </li><br></br>
        
                            <li><h2>Gion</h2>
                                <p>Gion è uno dei più famosi ed esclusivi quartieri delle geisha dell’intero Giappone, vi sono numerose abitazioni tradizionali e sale da tè. 
                                Inoltre, è stato proclamato patrimonio culturale del Giappone.
                                La zona in cui è più facile avvistare delle geisha è la via di Hanamikoji.
                                L’attrazione più importante del quartiere Gion resta comunque il tempio di Yasaka, un santuario scintoista composto da svariati edifici.</p>
                                <img className={style.thumbnail} src="/images/gion-kyoto.jpg" alt="Gion"/>
                            </li><br></br>
                            
                            <li><h2>Kiyomizu-dera</h2>
                                <p>Uno dei templi più belli e imponenti del Giappone, la bellezza della struttura e la solennità che si respira tra le mura che lo sorreggono 
                                hanno fatto in modo che l’Unesco, nel 1994, dichiarasse questo luogo incantevole patrimonio dell’Unesco..
                                Dall’ampia terrazza in legno si può ammirare uno straordinario panorama su Kyoto.
                                Il tempio Kiyomizudera è legato alla setta buddista degli Hosso e il nome affonda le sue radici nella cascata che scorre all’interno dell’imponente complesso: 
                                Kiyomizu significa acqua pura oppure acqua chiara.</p>
                                <img className={style.thumbnail} src="/images/Kiyomizu-dera.jpg" alt="Kiyomizu-dera"/>
                            </li><br></br>
        
                            <li><h2>Higashiyama</h2>
                                <p>Il quartiere di Higashiyama si trova nella parte orientale della città. 
                                Il distretto storico circostante il tempio Kiyomizu-dera è uno dei posti più adatti per immergersi nelle atmosfere della Kyoto tradizionale, caratterizzato da casette di legno e piccole botteghe.
                                Il suo nome rimanda subito al nome della montagna su cui il distretto si appoggia, la cosiddetta montagna dell’Est.</p>
                                <img className={style.thumbnail} src="/images/higashiyama-pagoda-kyoto.jpg" alt="Higashiyama"/>
                            </li><br></br>
                        </ol>
            </div>
            <div>
                <h1>Come raggiungere Nara</h1>
                <p>Per raggiungere Nara, uno dei punti di partenza migliori è sicuramente la città di Kyoto e consiglio un’escursione in giornata. 
                Ovviamente il mezzo di trasporto da preferire è il treno.
                Se si è in possesso del Japan Rail Pass conviene prendere dalla Stazione JR di Kyoto la linea JR Nara e scendere alla stazione Nara (circa 44 minuti); 
                se non si è muniti del JR Pass, potete ugualmente prendere la linea JR Nara (il biglietto costa 710 yen solo andata), oppure prendere la linea privata Kintetsu. 
                Il treno espresso, che impiega circa 35 minuti per arrivare a destinazione, 
                parte dalla Stazione Kintetsu di Kyoto (situata nella parte sud della Stazione JR di Kyoto) e arriva alla Stazione Kintetsu di Nara.</p>
            </div>
            </div>



        </Fragment>
     );
};