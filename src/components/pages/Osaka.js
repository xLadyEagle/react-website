import style from '../Cities.module.css';
import React, { Fragment } from 'react';


export default function Osaka()  {
    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/images/castle.jpeg" alt="Osaka" />
                    <h1 className={style.title}>OSAKA</h1>
            </div>
            <div className={style.text}>
                <h1 className={style.header}>Cosa vedere a Osaka</h1>
                <br></br>
                <p> Osaka è una città vivace e dallo spirito cosmopolita, che in passato ha ricoperto un ruolo rilevante a livello economico e politico nel paese: 
                    fu proprio qui che il noto samurai Toyotomi Hideyoshi decise di costruire il proprio castello, oggi divenuto una popolare attrattiva della città. 
                    Templi, santuari e musei punteggiano la città accanto a grattacieli futuristici che ospitano al loro interno osservatori e centri commerciali. 
                    Parchi tematici e altri divertimenti sono perfetti per una vacanza in formato famiglia, ma Osaka è anche ideale per chi ama trascorrere la serata 
                    fuori, tra piccoli vicoli carichi di fascino che pullulano di ristorantini e pub. 
                    Osaka è infatti famosa in Giappone proprio per la sua scena gastronomica e la sua vita notturna, un connubio rappresentato perfettamente dal quartiere di Namba.</p>
            <div>
                    <ol className={style.list}>
                            <li><h2>Castello di Osaka  (大阪城)</h2> 
                            <p>Tra le principali attrazioni storiche della città troviamo senza dubbio il Castello di Osaka, uno dei più importanti del paese. 
                                È un vero gioiello architettonico, con i suoi dettagli in oro che spiccano sulla facciata bianca e il suo profilo elegante.
                                Più volte distrutto e ricostruito nel corso di concitate vicende belliche, oggi ospita un museo sulla sua storia. 
                                Numerosissimi sono gli oggetti d'arte esposti tra cui armi, armature, mobili, ritratti, lettere. 
                                Dall'ultimo piano si gode di una vista panoramica sulla città e sul meraviglioso parco circostante in cui si elevano centinaia di alberi tra cui magnifici ciliegi. 
                                L'intera area è circondata da vasti fossati e poderose mura in pietra alte più di 20 metri.</p>
                                <img className={style.thumbnail} src="/images/Osaka-Castle2.jpg" alt="Castello di Osaka"/>
                            </li><br></br>
                            
                            <li><h2>Quartiere Minami (Namba - 難波)</h2>
                                <p>Namba è il famoso quartiere dell’intrattenimento e della vita notturna di Osaka, in virtù dei numerosi bar, ristoranti, discoteche, sale giochi e sale di pachinko che punteggiano le sue vie e ai quali si aggiungono centri commerciali, 
                                negozi e gallerie che rendono la zona un’apprezzata meta per lo shopping.
                                Cuore del quartiere è la via <b>Dotonbori</b>, che si sviluppa accanto all’omonimo canale, dove si concentrano bar, ristoranti e locali notturni che alla sera illuminano l’area con le loro luci al neon e le insegne colorate e stravaganti, 
                                attirando migliaia di visitatori e residenti che giungono qui per passeggiare, mangiare e godersi la vivace vita notturna. 
                                Proprio le varie insegne sono una delle maggiori attrattive di Dotonbori e dell’intera zona, tanto che una di queste, l’enorme granchio meccanizzato del ristorante Kani Doraku, ne è diventato un simbolo.</p>
                                <img className={style.thumbnail} src="/images/japanstreets-21.jpg" alt="Dotonbori"/>
                            </li><br></br>

                            <li><h2>Shinsekai (新世界) e torre Tsutenkaku (通天閣)</h2>
                                <p>Il quartiere Shinsekai è un luogo dal <b>fascino retrò</b>, dove tutto è rimasto praticamente com'era 50 anni fa. Letteralmente significa "mondo nuovo", e in effetti, al momento della sua creazione nel 1912, il quartiere prendeva spunto da luoghi lontani, nello specifico Coney Island e Parigi. 
                                <br></br>Nacque come progetto di riqualificazione per ospitare l'Esposizione Industriale Nazionale e in seguito venne sviluppato per dare nuovo impulso alla città.
                                <br></br>Il simbolo del quartiere è la <b>Torre Tsutenkaku</b>, la cui sagoma ricorda la Torre Eiffel. 
                                <br></br>Nonostante sia stata distrutta dai bombardamenti della Seconda Guerra Mondiale, la torre è stata poi ricostruita in maniera fedele all'originale, ad eccezione dell'altezza: oggi la struttura è alta 103 metri, quasi il doppio rispetto alla precedente! 
                                All'interno ci sono due osservatori posti a due diversi livelli; entrambi regalano belle viste sulla città e sul quartiere.</p>
                                <img className={style.thumbnail} src="/images/OsakaStreets.jpg" alt="Shinsekai"/>
                            </li><br></br>
                            
                            <li><h2>Tempio Shitenno-Ji (四天王寺)</h2>
                                <p>Il tempio Shitenno-Ji è un antico tempio buddhista situato nella zona meridionale di Osaka, a circa 15 minuti a piedi dalla stazione Tennoji JR. 
                                Come il famoso Horyu-Ji di Nara, fu fondato nel VI secolo d.C. dal principe Shotoku, colui che introdusse il buddhismo in Giappone.
                                Di particolare bellezza sono l'alta pagoda di cinque piani e la sala principale, il kondo, dove viene venerato lo spirito del principe Shotoku. 
                                Distrutto varie volte, è stato sempre ricostruito secondo l'architettura originale. 
                                Com'era la volontà del suo fondatore, lo Shitenno-Ji assunse una missione di civilizzazione svolgendo un ruolo centrale nello vita culturale e sociale della comunità di Osaka. Nella Sala del tesoro è custodita una collezione di opere d'arte. 
                                Da visitare anche il bel giardino ispirato alla dottrina cosmologica buddhista.</p>
                                <img className={style.thumbnail} src="/images/Shitennoji.jpg" alt="Tempio Shitenno-Ji"/>
                            </li><br></br>

                            <li><h2>Santuario Sumiyoshi Taisha (住吉大社)</h2>
                                <p>Uno dei più importanti e antichi santuari scintoisti del Giappone. Risale al III secolo d.C. ed è capofila di tutti i santuari di Sumiyoshi del paese. 
                                <br></br>E' costituito da <b>numerosi edifici</b> che esprimono uno <b>stile unico</b>, scevro da influenze straniere, divenuto paradigmatico nell'architettura scintoista come uno degli stili antichi precedenti alla diffusione del buddhismo.
                                Come tutti i santuari antichi, presenta forme architettoniche semplici che ne enfatizzano la purezza. Lo honden, il cuore del luogo di culto che custodisce i kami, è composto da quattro edifici in legno identici, rialzati, recintati, con pareti composte da assi affiancate e tetti a due falde senza curvatura delle gronde. 
                                <br></br>Molto elegante l'accoppiata cromatica bianco-cremisi dei pilastri e delle pareti e le coperture dagli svettanti chigi (i caratteristici elementi ornamentali che incrociano oltre il colmo del tetto).
                                Come da tradizione, il santuario è immerso in un bosco che lo separa dal mondo profano e riconduce il visitatore all'armonia della comunione con la Natura.</p>
                                <img className={style.thumbnail} src="/images/Sumiyoshi-Taisha-Osaka.jpg" alt="Santuario Sumiyoshi Taisha"/>
                            </li><br></br>

                            <li><h2>Umeda (梅田)</h2>
                            <p>Uno dei centri principali dei trasporti della città e quartiere finanziario e commerciale, Umeda è spesso il punto di partenza di ogni visita a Osaka: nelle sue stazioni (Osaka e Umeda) si intersecano le linee JR, Hankyu e Hanshin e alcune linee della metropolitana. 
                            Tutt’intorno si erge un’enorme quantità di complessi commerciali con negozi, ricche food court e intrattenimenti e grattacieli al cui interno si trovano uffici, banche e hotel che offrono una base strategica per i turisti. 
                            <br></br>A dominare il panorama è l’<b>Umeda Sky Building</b>, l’edificio più alto nonché <b>simbolo</b> indiscusso della città di Osaka: è composto da due torri di 40 piani, collegate tra loro mediante ponti e una scala mobile.
                            <br></br>Dallo Skywalk situato in cima all’edificio, i visitatori possono avere fantastica <b>vista panoramica a 360°</b> su Osaka, mentre alla base delle torri si trova un rigoglioso giardino con percorsi pedonali e giochi d’acqua che regala un’oasi di pace nel cuore della città.</p>
                            <img className={style.thumbnail} src="/images/umeda-sky-building.jpg" alt="Umeda"/>
                            </li><br></br>

                            <li><h2>Universal Studios Japan</h2>
                            <p>Parco a tema marchiato Universal, il <b>primo del continente asiatico</b>. L'Universal Studios Japan di Osaka è stato inaugurato nel 2001 e si trova presso la baia di <b>Osaka</b>. 
                            Con i suoi <b>39 ettari</b> è il parco di divertimenti a tema più frequentato del Giappone, appena dopo il Tokyo Disney Resort.
                            Attualmente gli Universal Studios Japan hanno 8 sezioni: Hollywood, New York, San Francisco, Jurassic Park, Waterworld, Amity Village, Universal Wonderland e The Wizarding World of Harry Potter. 
                            I visitatori possono godere di molte attrazioni: giostre a misura di bambino, adrenaliniche montagne russe e simulatori basati 
                            su film famosi come Spiderman, Ritorno al futuro, Terminator e Jurassic Park.</p>
                            <img className={style.thumbnail} src="/images/universal-studios-japan.png" alt="Universal Studios Japan"/>
                            </li><br></br>

                            <li><h2>Acquario di Osaka Kaiyukan (海遊館)</h2>
                                <p>Inaugurato nel 1990, l’Acquario di Osaka è considerato uno dei più belli del Giappone e rappresenta una delle più grandi strutture al mondo nel suo genere: 
                                attraverso 14 grandi vasche vengono ricreati gli ambienti naturali di diverse aree dell’Oceano Pacifico.
                                Non solo pesci all'acquario di Osaka, ma anche anfibi, rettili, mammiferi, uccelli e piante, per un totale di circa 620 specie e 30.000 soggetti.
                                Uno dei temi principali è quello legato alla fascia vulcanica che circonda il Pacifico; da non perdere le meduse del "Padiglione delle meduse fluttuanti" e la "Sala di progettazione", dove si svolgono varie esibizioni.</p>
                                <img className={style.thumbnail} src="/images/osaka-aquarium.jpg" alt="Acquario di Osaka"/>
                            </li><br></br>
        
                            <li><h2>Teatro delle marionette Bunraku (文楽)</h2>
                            <p>Osaka è la città natìa del Bunraku, il teatro di marionette tradizionali, forma d’arte giapponese antica di 300 anni.
                            Le grandi marionette sono solitamente manovrate da 3 burattinai che, magistralmente, riescono a dare straordinaria grazia e sembianze quasi umane a queste marionette.</p>
                            <img className={style.thumbnail} src="/images/bunraku-puppets.jpg" alt="Bunraku"/>
                        </li><br></br>   
                        </ol>
            </div>
            <div>
                <h1>Come raggiungere Osaka</h1>
                <br></br>
                <p>Osaka è la più grande metropoli della regione del Kansai ed è <b>facilmente accessibile</b> dalle maggiori città giapponesi.
                <br></br>Grazie agli <b>ottimi collegamenti in treno veloce</b>, autobus e aereo, la si può raggiungere in breve tempo sia da Tokyo che dalle più vicine Kyoto, Nara e Kobe.
                <br></br><b>Da Tokyo</b> è disponibile il servizio veloce shinkansen, il tempo di percorrenza è di poco inferiore alle 3 ore. Gli shinkansen Nozomi sono leggermente più veloci rispetto ad altri ed impiegano circa 20 minuti in meno.
                I treni shinkansen arrivano alla stazione Shin-Osaka, a nord del centro, dalla quale potete poi spostarvi verso le altre aree della città con la metro o le linee JR.
                Oltre agli shinkansen ci sono vari treni regionali che collegano Osaka alle città più vicine. Da Kyoto e Kobe potete prendere i treni della compagnia JR se avete il Japan Rail Pass oppure la più economica ma anche più lenta Hankyu Railway: entrambe arrivano alle stazioni di Osaka e Umeda.
                <br></br>Se invece partite <b>da Nara</b>, la rete JR offre un servizio di trasporto rapido arrivando alle stazioni di Tennoji, Osaka e Namba, mentre la rete Kintetsu arriva a Namba.
                <br></br>Un’ultima alternativa è l’<b>autobus</b> che offre un servizio decisamente più lento rispetto ai treni ma più economico. 
                Osaka è collegata con <b>corse diurne e notturne</b> in autobus a molte località del paese con varie compagnie che offrono prezzi e servizi diversi.
                </p>
            </div>
            </div>
        </Fragment>
     );
};