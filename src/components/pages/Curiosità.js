import style from '../Cities.module.css';
import React, { useEffect, Fragment } from 'react';


export default function Curiosità()  {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return ( 
        <Fragment>
            <div className={style.title}>
                    <img src="/react-website/images/Akihabara2.jpg" alt="Akihabara" />
                    <h1 className={style.title}>CURIOSITÁ</h1>
            </div>
            <div className={style.text}>
                <h1 className={style.header}>Curiosità sul Giappone</h1>
                <br></br>
                <p> Il Giappone è un paese affascinante e misterioso in cui spesso sembra di trovarsi in un’altra dimensione che sia di un passato legato alle tradizioni o di un luogo ultra futuristico. 
                Le sue peculiarità e caratteristiche sono infinite tanto da dare vita ad una serie di curiosità uniche e bizzarre, tra cui alcune elencate di seguito.</p>
                <div>
                    <ol className={style.list}>
                            <li><h2>Distributori automatici</h2> 
                                <p>In Giappone li chiamano <i>Jidouhanbaiki</i> (自動販売機) e sono diffusi in modo capillare, tanto da costituire un <b>elemento inscindibile del paesaggio urbano</b> nipponico. 
                                Si stima che in media vi sia circa un distributore automatico ogni quaranta persone, un dato impressionante che dimostra quanto sia radicato questo fenomeno nella cultura giapponese. 
                                Si trovano <b>ovunque</b>: nelle metropoli, lungo le strade percorse dai pendolari, presso le stazioni e i luoghi di culto e persino nelle zone più rurali e remote del paese.
                                In Giappone si può trovare qualsiasi cosa ai distributori automatici, dagli ortaggi alle bevande, dalle tagliatelle alle camicie, persino il ramen.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/vending-machines.jpg" alt="Distributori automatici"/>
                            </li><br></br>
                            
                            <li><h2>Tombini giapponesi</h2>
                                <p>I coperchi dei tombini giapponesi vengono usati come delle tele per crearvi sopra <b>opere d’arte</b>. 
                                <b>Ognuno dei comuni</b> del Giappone, che sono migliaia in tutto il paese, adotta un <b>proprio design</b> da conferire ai tombini per rappresentare la cultura e la storia del posto. 
                                Alcuni di questi raffigurano iconici monumenti architettonici (come il Castello di Osaka), cibo, piante, animali, personaggi storici e, naturalmente, anime.
                                in Giappone sono delle vere e proprie opere d'arte. Spesso contengono elementi stagionali come foglie d'acero o ciliegi, oppure caratteristiche specifiche di una città, come castelli importanti o monumenti.
                                Era il 2018 quando il primo tombino Pokémon venne installato nella prefettura di Kagoshima, sull’isola sud-occidentale del Kyushu. 
                                Da allora altri <b>Pokétombini</b>, o Pokéfuta come li chiamano ufficialmente in giapponese, sono stati installati in 8 prefetture.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/tombino.jpg" alt="Tombini giapponesi"/>
                            </li><br></br>
        
                            <li><h2>Cibo di plastica</h2>
                                <p>Nei ristoranti ci sono <b>riproduzioni realistiche</b> dei piatti che vengono serviti. Sono realizzate a mano, talmente bene che sembrano reali. Le riproduzioni si chiamano <i>sampuru</i> e hanno una tradizione lunga circa un secolo. 
                                Anche se non sono stati inventati per aiutare i turisti stranieri nella scelta dei piatti, sicuramente lo hanno fatto dato che è difficile trovare menù scritti anche in inglese.
                                <br></br>In Giappone i sampuru sono una <b>vera e propria arte</b>: un tempo erano realizzati con la cera, oggi sono di plastica. Questi modelli sono costosi: è per questo che i ristoranti di alto livello vantano i sampuru più belli, più somiglianti ai piatti veri. 
                                La maggior parte dei ristoranti giapponesi espone queste riproduzioni. <br></br>Lo scopo è dare ai propri clienti l'<b>idea di quello che possono gustare</b> servendosi ai loro tavoli.
                                <br></br>A volte la comunicazione può essere difficoltosa, in questo splendido e magico Paese.
                                Per facilitare la scelta, nei ristoranti, anche in quelli con i menù completamente scritti in giapponese, non solo ci sono le fotografie, ma molto spesso nelle vetrine dei ristoranti, dei cafè e di qualsiasi locale in cui ci si possa rifocillare, sono presenti delle riproduzione dei piatti in plastica.
                                Sono così somiglianti agli originali che a volte ci si stupisce che non si possano mangiare.
                                A quel punto tutto quello che devi fare è indicare la pietanza che hai voglia di consumare, senza aver problema di venir frainteso.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/sampuru.jpg" alt="Cibo di plastica"/>
                            </li><br></br>

                            <li><h2>Un mondo in stile kawaii</h2>
                                <p>Il concetto di <i>kawaii</i> ha finito per estendersi a una moltitudine di sfaccettature della società giapponese. 
                                Infatti esiste questa tendenza a rendere fanciullesco e bambinesco il cibo, il vestiario, le insegne urbane, gli oggetti di uso quotidiano e perfino gli strumenti di lavoro.</p>
                                <img className={style.thumbnail} src="/react-website/images/construction-Japan.jpg" alt="Cartello Kawaii"/>
                            </li><br></br>

                            <li><h2>La frutta più costosa al mondo</h2>
                                <p>La maggior parte della frutta coltivata in Giappone è di <b>altissima qualità</b>, ma i prezzi sono spesso altissimi.
                                Questo non ferma i giapponesi nel consumarla quotidianamente anche se in piccole quantità. 
                                Infatti il <b>popolo</b> nipponico è molto <b>goloso di frutta</b>.
                                I prezzi sono talmente alti che un <b>regalo comune molto apprezzato</b> in Giappone consiste in un bel cestino di frutta confezionato con cura oppure in un unico frutto “di lusso” come un grande pompelmo avvolto in un fiocco o un costosissimo cocomero dalla forma rettangolare.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/fragola-bianca.jpg" alt="Frutta"/>
                            </li><br></br>

                            <li><h2>Kit Kat dai sapori unici</h2>
                                <p>Il Kit Kat è un <b>prodotto molto venduto</b> in Giappone. In giapponese Kit Kat si pronuncia “kitto katsu” che equivale ad un’espressione giapponese che significa “buona fortuna”. 
                                Tradotto direttamente vorrebbe dire “vincerai sicuramente”. I Kit Kat sono famosi per tutte le età in Giappone. 
                                Ci sono <b>più di 200 gusti diversi</b> e se ne vengono creati sempre di nuovi.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/kit-kat.jpg" alt="Kit Kat"/>
                            </li><br></br>
                            
                            <li><h2>Washlet musicali</h2>
                                <p>Il <b>water super tecnologico giapponese</b>  ormai non è più un segreto, molti turisti non vedono l'ora di arrivare in hotel per provarlo e fotografarlo. 
                                <br></br>Ma sapevi che in molti locali pubblici, i washlet sono dotati di <b>sensori di movimento</b> che ne automatizzano l'apertura non appena viene spalancata la porta del bagno?
                                Così non dovrai neanche toccare nulla, e di questi tempi è un'opzione da non sottovalutare.
                                Inoltre sono dotati di tasti che permettono di far cominciare vari <b>jingle</b>  oppure <b>suoni come lo scrosciare di un ruscello</b>, in modo che chi è all'esterno non senta cosa tu stai facendo dentro.
                                Assolutamente a prova di regole sulla privacy.
                                <br></br>In alcune sale giochi ci sono anche installati dei giochini interattivi con cui tenersi occupati.
                                <br></br>Le toilette sono ipertecnologiche e hanno svariati optional, anche la musica.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/Best-Japanese-Toilets.jpg" alt="Washlet musicali"/>
                            </li><br></br>

                            <li><h2>Okoshima, l'isola dei conigli</h2>
                                <p>Ōkunoshima (大久野島) è una <b>piccola isola</b> situata a breve distanza da Tadanoumi nella prefettura di Hiroshima, detta anche l'isola dei conigli (usagishima o usagijima). 
                                <b>Centinaia di conigli selvatici</b> abitano infatti l'isola e si offrono numerosi alla vista dei visitatori, fin dall'arrivo in battello.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/okunoshima.jpg" alt="Okunoshima"/>
                            </li><br></br>
        
                            <li><h2>Rifiuti</h2>
                                <p>Per le strade <b>non ci sono cestini dei rifiuti</b>, è quasi un’impresa trovarne uno. 
                                E’ una <b>scelta drastica</b> effettuata dal Governo Giapponese nella prima metà degli anni 90 a seguito di un attacco terroristico interno. 
                                <br></br>I criminali nascosero un gas tossico nei cestini di alcune stazioni della metro, gas che una volta rilasciato uccise 12 persone e ne ferì più di 5 mila. 
                                A seguito di questo incidente il Governo optò per diminuire drasticamente il numero di cestini per evitare che la tragedia si potesse ripetere.
                                </p>
                                <img className={style.thumbnail} src="/react-website/images/gion-clean-streets.jpeg" alt="Rifiuti"/>
                            </li><br></br>
                        </ol>
                </div>
            </div>



        </Fragment>
     );
};