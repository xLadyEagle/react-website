import style from '../Cities.module.css';
import React, { useEffect, Fragment } from 'react';


export default function Nara()  {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/react-website/images/nara.jpg" alt="Nara" />
                    <h1 className={style.title}>NARA</h1>
            </div>
            <div className={style.text}>
                <h1 className={style.header}>Cosa vedere a Nara</h1>
                <p> Nara si trova a sud-est di Kyoto, un antico poeta giapponese la definì <b>“un fiore profumato in piena fioritura”</b>.
                <br></br>L’antica prefettura di Yamato, oggi prefettura di Nara, è <b>una delle culle della civiltà giapponese</b>.
                <br></br>Qui si trovano importanti templi ed un enorme parco al cui interno girano indisturbati migliaia di cervi.
                    In una <b>città ricca di storia</b> come Nara, ci sono diversi luoghi ed edifici tradizionali da visitare, di seguito ve ne elenchiamo alcuni.</p>
            <div>
                    <ol className={style.list}>
                            <li><h2>Todai–Ji</h2> 
                            <p>Il Todaiji è <b>uno dei templi più famosi e storicamente importanti</b> del Giappone e un punto di riferimento di Nara.  
                            <br></br>Il punto focale dell’intera struttura è il Daibutsu – Den (o Hall of Great Buddha), una grossa costruzione in legno
                                che ospita il <b>Buddha Daibutsu</b> (il più grande al mondo, alto 15 metri). <br></br>Sul retro del Daibutsu – Den è situato un pilastro con un foro al centro: 
                                si dice che le persone che riescono ad attraversarlo ricevano una sorta di <b>“illuminazione”</b>, 
                                ma essendo uno spazio stretto, solo i bambini generalmente riescono a passare attraverso.</p>
                                <img className={style.thumbnail} src="/react-website/images/todaiji-nara.jpg" alt="Todai–Ji"/>
                            </li><br></br>
                            
                            <li><h2>Tempio Horyuji</h2>
                                <p>Il tempio Horyu–Ji si trova ad Ikaruga, a circa 15 km a sud di Nara ed ospita alcuni degli edifici in legno più antichi del mondo 
                                e contiene alcune delle raffigurazioni buddiste più importanti del Paese.
                                <br></br>Il tempio è <b>patrimonio dell’umanità UNESCO</b>.</p>
                                <img className={style.thumbnail} src="/react-website/images/TempioHoryuji.jpg" alt="Tempio Horyuji"/>
                            </li><br></br>
        
                            <li><h2>Giardino Isuien</h2>
                                <p>Il giardino Isuien, situato non lontano dal tempio TodaiJi è uno dei fiori all’occhiello della città di Nara, un’<b>oasi verde</b> progettata utilizzando la tecnica dello <i>shakkei</i>. 
                                Il nome Isui – en significa <b>“giardino costruito sull’acqua”</b>, perché al suo interno è ricco di laghi grandi e piccoli. Il lago più grande si trova poco lontano dal cancello d’ingresso. 
                                <br></br>Oltre ai suoi laghi e viali il giardino ospita un museo ed una sala da tè.</p>
                                <img className={style.thumbnail} src="/react-website/images/Isuien-Garden.jpg" alt="Giardino Isuien"/>
                            </li><br></br>
                            
                            <li><h2>Nara koen, Parco di Nara</h2>
                                <p>Il Parco di Nara (koen in giapponese significa parco), è un’<b>enorme riserva naturale</b> che si estende dalla parte bassa di Nara e Naramachi fino ai piedi delle colline.
                                <br></br>Questo parco comprende le aree del TodaiJi, del Giardino Isuien e il Santuario Kasuga Taisha. 
                                La sua caratteristica più interessante è l’<b>alto numero di cervi</b> che lo popolano e che frequentemente si avvicinano ai passanti per essere nutriti.</p>
                                <img className={style.thumbnail} src="/react-website/images/Parco-di-Nara.jpg" alt="Parco di Nara"/>
                            </li><br></br>
        
                            <li><h2>Kasuga Taisha</h2>
                            <p>Il santuario Kasuga Taisha è <b>uno dei maggiori santuari shintoisti</b> della città di Nara.
                            È stato costruito quando è stata spostata la capitale a Nara, ed è dedicato alla divinità responsabile per la <b>protezione della città</b>. 
                            Il santuario, con le sue colonne color vermiglio, i muri bianchi e i tetti in legno emana un’aura di spiritualità ed è perfettamente incastonato nel parco 
                            che lo circonda, anch’esso un’opera d’arte grazie ai <b>300 tipi diversi di alberi e piante</b> presenti, al complesso intreccio di viali e in particolare alle lanterne di pietra che lo caratterizzano.</p>
                            <img className={style.thumbnail} src="/react-website/images/Kasuga-taisha.jpg" alt="Kasuga Taisha"/>
                        </li><br></br>
                        </ol>
            </div>
            <div>
                <h1>Come raggiungere Nara</h1>
                <p>Per raggiungere Nara, uno dei punti di partenza migliori è sicuramente la città di Kyoto e si consiglia un’escursione in giornata. 
                <br></br>Ovviamente il mezzo di trasporto da <b>preferire</b> è il <b>treno</b>.
                <br></br>Se si è in possesso del Japan Rail Pass conviene prendere dalla Stazione JR di Kyoto la linea JR Nara e scendere alla stazione Nara (circa 44 minuti); 
                se non si è muniti del JR Pass, potete ugualmente prendere la linea JR Nara (il biglietto costa 710 yen solo andata), oppure prendere la linea privata Kintetsu. 
                Il treno espresso, che impiega circa 35 minuti per arrivare a destinazione, 
                parte dalla Stazione Kintetsu di Kyoto (situata nella parte sud della Stazione JR di Kyoto) e arriva alla Stazione Kintetsu di Nara.</p>
            </div>
            </div>
        </Fragment>
     );
};