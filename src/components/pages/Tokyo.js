import style from '../Cities.module.css';
import React, { Fragment } from 'react';


export default function Tokyo()  {
    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/images/Tokyo Skyline.jpg" alt="Tokyo" />
                    <h1 className={style.title}>TOKYO</h1>
            </div>
            <div className={style.text}>
                <h1 className={style.header}>Cosa vedere a Tokyo</h1>
                <br></br>
                <p>La città Tokyo è divisa in 23 quartieri e ognuno di esso offre varie attrazioni. 
                Di seguito trovate una lista di cosa vedere e fare nei quartieri principali.</p>
            <div>
                    <ol className={style.list}>

                            <li><h2>Shibuya (渋谷区)</h2>
                                <p>Shibuya è una delle <b>zone più dinamiche</b> e conosciute della città. 
                                Il <b>quartiere è illuminato</b> da <b>megaschermi</b>, presenti su tutti i palazzi della zona, 
                                e vi si trova una grande varietà di negozi (soprattutto d'abbigliamento e musica), ristoranti e love hotel.
                                <br></br>Qui si trova la famosa <b>statua di Hachiko</b>. Secondo un famoso racconto, il cane aspettava il suo padrone ogni giorno di fronte alla stazione di Shibuya,
                                e ha continuato a farlo per anni, anche dopo che il suo padrone era morto.</p>
                                <img className={style.thumbnail} src="/images/shibuya.jpg" alt="Shibuya"/>
                            </li><br></br>

                            <li><h2>Shinjuku (新宿)</h2> 
                            <p>Shinjuku è il cuore della metropoli di Tokyo, qui si trovano tanti luoghi di interesse turistico e molti divertimenti per tutti i gusti.
                            <br></br>La stazione dei treni di Shinjuku è una delle <b>più trafficate al mondo</b>, con il passaggio di 2 milioni di persone ogni giorno.
                            Shinjuku è il <b>luogo dello shopping</b> preferito dai tokyoti: ci sono boutique, grandi magazzini, negozi e centri commerciali sotterranei. </p>
                                <img className={style.thumbnail} src="/images/shinjuku.jpg" alt="Shinjuku"/>
                            </li><br></br>
                            
                            
        
                            <li><h2>Akihabara (秋葉原)</h2>
                                <p>Akihabara è la <b>capitale</b> giapponese dell’<b>elettronica</b>.
                                Consigliato un megastore a est di Akihabara Station, che offre 9 piani di computer, fotocamere, attrezzature elettroniche varie e che si chiama Yodobashi Akiba.
                                Inoltre Akihabara, o Akiba, è il quartiere famoso in tutto il mondo per i suoi grandissimi <b>negozi</b> pieni di <b>manga</b>, 
                                <b>anime</b> e un'infinità di gadget ed è tappa obbligata per chi ama o vuole conoscere la cultura che affascina gli '<i>otaku</i>'.
                                Nel cuore di Tokyo, ad Akihabara si arriva con la linea JR Yamanote.</p>
                                <img className={style.thumbnail} src="/images/akihabara.jpg" alt="Akihabara"/>
                            </li><br></br>
                            
                            <li><h2>Asakusa (浅草) </h2>
                                <p>Asakusa (pronunciato <i>Asaksa</i>), si trova nella zona nord-est di Tokyo sul fiume Sumida. 
                                È il <b>quartiere più “antico” della città</b>, dove troverete templi e negozi tipici.
                                Moltitudini di persone sono attratte dal Tempio Senso-ji (o Tempio di Kannon – Dea della Misericordia -), 
                                dalla Pagoda a 5 piani e dalla tradizionale via dello shopping “Nakamise”.</p>
                                <img className={style.thumbnail} src="/images/asakusa.jpg" alt="Asakusa"/>
                            </li><br></br>
        
                            <li><h2>Odaiba (お台場)</h2>
                            <p>Odaiba è uno dei maggiori centri per lo shopping e il divertimento di Tokyo. Situato sul waterfront, nella Baia di Tokyo, 
                                il quartiere di Odaiba sorge su <b>due grandi isole artificiali</b> ed è attrezzato con tutto quello che serve per divertirsi: 
                                centri sportivi, negozi, musei, hotel, centri commerciali e parchi divertimento.
                                <br></br>Odaiba si collega a Tokyo tramite il <i>Rainbow Bridge</i>. Il ponte a due piani è un simbolo della baia ed è particolarmente bella la sua <b>illuminazione notturna</b>.</p>
                            <img className={style.thumbnail} src="/images/gundam.jpg" alt="Odaiba"/>
                        </li><br></br>

                        <li><h2>Narita (成田市)</h2>
                            <p>Narita è una città giapponese della prefettura di Chiba situata a circa 60 chilometri ad est di Tokyo, ed è molto famosa anche per 
                            l’<b>Aeroporto Internazionale</b> di Narita, uno degli hub più importanti del Paese, considerato come la <b>porta d’accesso al Giappone</b>.
                            <br></br>Sono molti i motivi per i quali è consigliato visitare questa la città: templi, sorgenti termali, ottimo cibo e incredibili musei sono solo alcune delle attrazioni che la città ed i suoi dintorni sono in grado offrire ai visitatori.
                            <br></br>L’attrazione più interessante è senza dubbio il Naritasan Shinshoji, un famoso tempio buddista con una storia di oltre 1000 anni.</p>
                            <img className={style.thumbnail} src="/images/narita.jpg" alt="Narita"/>
                        </li><br></br>

                        <li><h2>Parco di Ueno (上野公園) </h2>
                            <p>Il Parco di Ueno è uno <b>storico parco</b> di Tokyo, tra i più antichi e famosi del Giappone. 
                            E’ situato nell’omonima area di Ueno, a nord di Tokyo e sono presenti numerosi musei e templi, oltre allo <b>Zoo</b>. 
                            Inoltre questo parco è molto <b>famoso per l’Hanami</b>, ovvero la fioritura dei ciliegi. <br></br>Al suo interno sono presenti <b>più di 8000 alberi di vario tipo</b> 
                            (tra cui Ginko biloba, Zelkova, Prugno e più di 1000 alberi di Ciliegio giapponese) e lo stagno Shinobazu, un <b>lago</b> di circa 16 ettari ricoperto in maggioranza da fiori di Loto; 
                            al centro del lago è presente un piccolo tempio ottagonale, il Bentendo, dedicato a Benten (dea della fortuna, della ricchezza e della conoscenza).</p>
                            <img className={style.thumbnail} src="/images/ueno1.jpg" alt="Parco di Ueno"/>
                        </li><br></br>
                        </ol>
            </div>
            <div>
                <h1>Come raggiungere Tokyo</h1>
                <br></br>
                <p>La città è servita da due aeroporti internazionali, quello di Narita e quello più centrale di Haneda.
                Muoversi a Tokyo è molto comodo poiché esistono <b>13 linee della metropolitana</b>, la famosissima linea circolare JR Yamanote Line e innumerevoli linee JR e di compagnie private.
                </p>
            </div>
            </div>



        </Fragment>
     );
};