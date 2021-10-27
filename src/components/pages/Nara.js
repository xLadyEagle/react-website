import style from '../Cities.module.css';
import React, { Fragment } from 'react';


export default function Nara()  {
    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/react-website/images/nara.jpg" alt="Nara" />
                    <h1 className={style.title}>NARA</h1>
            </div>
            <div className={style.text}>
                <h1 className={style.header}>Cosa vedere a Nara</h1>
                <p> Nara si trova a sud-est di Kyoto, un antico poeta giapponese la definì <b>“un fiore profumato in piena fioritura”</b>.
                    L’antica prefettura di Yamato, oggi prefettura di Nara, è <b>una delle culle della civiltà giapponese</b>.
                    Qui si trovano importanti templi ed un enorme parco al cui interno girano indisturbati migliaia di cervi.
                    In una <b>città ricca di storia</b> come Nara, ci sono diversi luoghi ed edifici tradizionali da visitare, di seguito ve ne elenchiamo alcuni.</p>
            <div>
                    <ol className={style.list}>
                            <li><h2>Todai–Ji</h2> 
                            <p>Il Todaiji è uno dei templi più famosi e storicamente importanti del Giappone e un punto di riferimento di Nara.  
                                Il punto focale dell’intera struttura è il Daibutsu – Den (o Hall of Great Buddha), una grossa costruzione in legno
                                che ospita il Buddha Daibutsu (il più grande al mondo, alto 15 metri). Sul retro del Daibutsu – Den è situato un pilastro con un foro al centro: 
                                si dice che le persone che riescono ad attraversarlo ricevano una sorta di “illuminazione”, 
                                ma essendo uno spazio stretto, solo i bambini generalmente riescono a passare attraverso.</p>
                                <img className={style.thumbnail} src="/react-website/images/todaiji-nara.jpg" alt="Todai–Ji"/>
                            </li><br></br>
                            
                            <li><h2>Tempio Horyuji</h2>
                                <p>Il tempio Horyu – Ji si trova ad Ikaruga, a circa 15 km a sud di Nara ed ospita alcuni degli edifici in legno più antichi del mondo 
                                e contiene alcune delle raffigurazioni buddiste più importanti del Paese.
                                Il tempio è patrimonio dell’umanità UNESCO.</p>
                                <img className={style.thumbnail} src="/react-website/images/TempioHoryuji.jpg" alt="Tempio Horyuji"/>
                            </li><br></br>
        
                            <li><h2>Giardino Isuien</h2>
                                <p>Il giardino Isuien, situato non lontano dal tempio TodaiJi è uno dei fiori all’occhiello della città di Nara, un’oasi verde progettata utilizzando la tecnica dello shakkei. 
                                Il nome Isui – en significa “giardino costruito sull’acqua”, perché al suo interno è ricco di laghi grandi e piccoli. Il lago più grande si trova poco lontano dal cancello d’ingresso. 
                                Oltre ai suoi laghi e viali il giardino ospita un museo ed una sala da tè.</p>
                                <img className={style.thumbnail} src="/react-website/images/Isuien-Garden.jpg" alt="Giardino Isuien"/>
                            </li><br></br>
                            
                            <li><h2>Nara koen, Parco di Nara</h2>
                                <p>Il Parco di Nara (koen in giapponese significa parco), è un’enorme riserva naturale che si estende dalla parte bassa di Nara e Naramachi fino ai piedi delle colline.
                                Questo parco comprende le aree del TodaiJi, del Giardino Isuien e il Santuario Kasuga Taisha. 
                                La sua caratteristica più interessante è l’alto numero di cervi che lo popolano e che frequentemente si avvicinano ai passanti per essere nutriti.</p>
                                <img className={style.thumbnail} src="/react-website/images/Parco-di-Nara.jpg" alt="Parco di Nara"/>
                            </li><br></br>
        
                            <li><h2>Kasuga Taisha</h2>
                            <p>Il santuario Kasuga Taisha è uno dei maggiori santuari shintoisti della città di Nara.
                            È stato costruito quando è stata spostata la capitale a Nara, ed è dedicato alla divinità responsabile per la protezione della città. 
                            Il santuario, con le sue colonne color vermiglio, i muri bianchi e i tetti in legno emana un’aura di spiritualità ed è perfettamente incastonato nel parco 
                            che lo circonda, anch’esso un’opera d’arte grazie ai 300 tipi diversi di alberi e piante presenti, al complesso intreccio di viali e in particolare alle lanterne di pietra che lo caratterizzano.</p>
                            <img className={style.thumbnail} src="/react-website/images/Kasuga-taisha.jpg" alt="Kasuga Taisha"/>
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