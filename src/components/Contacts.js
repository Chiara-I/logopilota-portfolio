import React from "react"
import instagramLogo from "./img/instagram-square.svg"
import facebookLogo from "./img/facebook.svg"
import mail from "./img/envelope.svg"
import shop from "./img/shopping-cart.svg"

function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <h2>Let's keep in touch</h2>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/logopilota/">
        <img className="insta-logo" alt="instragam logo" src={instagramLogo} />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/LogoPilota/">
        <img className="facebook-logo" alt="facebook logo" src={facebookLogo} />
      </a>

      <a href="mailto: logopilota@gmail.com">
        <img className="mail" alt="mail" src={mail} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://my-store-11567740.creator-spring.com/">
        <img className="mail" alt="shop" src={shop} />
      </a>
      <p id="footer">
        © 2021 LogoPilota Graphics4Riders - logopilota@gmail.com
        <div className="privacy">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  id="privacy-btn"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne">
                  Privacy & Cookie Policy
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" className="privacy-body">
                  <h2>Privacy Policy</h2>
                  <p>
                    Informativa ai sensi dell'art. 13 del Codice della Privacy
                    Ai sensi dell'articolo 13 del codice della D.Lgs. 196/2003,
                    vi rendiamo le seguenti informazioni. Noi di LogoPilota
                    riteniamo che la privacy dei nostri visitatori sia
                    estremamente importante. Questo documento descrive
                    dettagliatamente i tipi di informazioni personali raccolti e
                    registrati dal nostro sito e come essi vengano utilizzati.
                  </p>
                  <h2>File di Registrazione (Log Files)</h2>
                  <p>
                    Come molti altri siti web, il nostro utilizza file di log.
                    Questi file registrano semplicemente i visitatori del sito -
                    di solito una procedura standard delle aziende di hosting e
                    dei servizi di analisi degli hosting. Le informazioni
                    contenute nei file di registro comprendono indirizzi di
                    protocollo Internet (IP), il tipo di browser, Internet
                    Service Provider (ISP), informazioni come data e ora, pagine
                    referral, pagine d'uscita ed entrata o il numero di clic.
                    Queste informazioni vengono utilizzate per analizzare le
                    tendenze, amministrare il sito, monitorare il movimento
                    degli utenti sul sito e raccogliere informazioni
                    demografiche. Gli indirizzi IP e le altre informazioni non
                    sono collegate a informazioni personali che possono essere
                    identificate, dunque tutti i dati sono raccolti in forma
                    assolutamente anonima.
                  </p>
                  <h2>Questo sito web utilizza i Cookies</h2>
                  <p>
                    I cookies sono piccoli file di testo che vengono
                    automaticamente posizionati sul PC del navigatore
                    all’interno del browser. Essi contengono informazioni di
                    base sulla navigazione in Internet e grazie al browser
                    vengono riconosciuti ogni volta che l’utente visita il sito.
                  </p>
                  <h2>Cookie Policy</h2>
                  <p>
                    Questo sito utilizza cookies, anche di terze parti, per
                    migliorarne l’esperienza di navigazione, consentire a chi
                    naviga di usufruire di eventuali servizi online e monitorare
                    la navigazione nel sito.
                  </p>
                  <h2>Come disabilitare i Cookies</h2>
                  <p>
                    E’ possibile disabilitare i cookies direttamente dal browser
                    utilizzato, accedendo alle impostazioni (preferenze oppure
                    opzioni): questa scelta potrebbe limitare alcune
                    funzionalità di navigazione del sito.
                  </p>
                  <h2>Gestione dei Cookies</h2>
                  <p>
                    I cookies utilizzati in questo sito possono rientrare nelle
                    categorie descritte di seguito.
                  </p>
                  <ul>
                    <li>Attività strettamente necessarie al funzionamento</li>
                    <li>
                      Questi cookies hanno natura tecnica e permettono al sito
                      di funzionare correttamente. Ad esempio, mantengono
                      l’utente collegato durante la navigazione evitando che il
                      sito richieda di collegarsi più volte per accedere alle
                      pagine successive.
                    </li>
                    <li>Attività di salvataggio delle preferenze</li>
                    <li>
                      Questi cookie permettono di ricordare le preferenze
                      selezionate dall’utente durante la navigazione, ad
                      esempio, consentono di impostare la lingua.
                    </li>
                    <li>
                      Attività Statistiche e di Misurazione dell’audience (es:
                      Google Analytics)
                    </li>
                    <li>
                      Questi cookie ci aiutano a capire, attraverso dati
                      raccolti in forma anonima e aggregata, come gli utenti
                      interagiscono con i siti internet fornendo informazioni
                      relative alle sezioni visitate, il tempo trascorso sul
                      sito, eventuali malfunzionamenti. Questo aiuta a
                      migliorare la resa dei siti internet.
                    </li>
                    <li>Cookie di social media (es: Facebook)</li>
                    <li>
                      Questi cookie di terza parte vengono utilizzati per
                      integrare alcune diffuse funzionalità dei principali
                      social media e fornirle all’interno del sito. In
                      particolare permettono la registrazione e l’autenticazione
                      sul sito tramite facebook e google connect, la
                      condivisione e i commenti di pagine del sito sui social,
                      abilitano le funzionalità del “mi piace” su Facebook e del
                      “+1″ su G+.
                    </li>
                  </ul>
                  <h2>Fornitori di terze parti</h2>
                  <p>
                    I fornitori di terze parti, tra cui Google, utilizzano
                    cookie per pubblicare annunci in base alle precedenti visite
                    di un utente su questo sito. L'utilizzo dei cookie per la
                    pubblicità consente a Google e ai suoi partner di pubblicare
                    annunci per gli utenti di questo sito (e su altri siti) in
                    base ai dati statistici raccolti su questo sito e sui siti
                    web dei partner Google. Gli utenti possono scegliere di
                    disattivare la pubblicità personalizzata, visitando la
                    pagina Impostazioni annunci. Visitando la pagina
                    www.aboutads.info potrai disattivare i cookies dei fornitori
                    di terze parti.
                  </p>
                  <h2>Finalità del trattamento</h2>
                  <p>
                    I dati possono essere raccolti per una o più delle seguenti
                    finalità: fornire l'accesso ad aree riservate del Portale e
                    di Portali/siti collegati con il presente e all'invio di
                    comunicazioni anche di carattere commerciale, notizie,
                    aggiornamenti sulle iniziative di questo sito e delle
                    società da essa controllate e/o collegate e/o Sponsor.
                    eventuale cessione a terzi dei suddetti dati, sempre
                    finalizzata alla realizzazione di campagne di email
                    marketing ed all'invio di comunicazioni di carattere
                    commerciale. eseguire gli obblighi previsti da leggi o
                    regolamenti; gestione contatti;
                  </p>
                  <h2>Modalità del trattamento</h2>
                  <p>
                    I dati verranno trattati con le seguenti modalità: raccolta
                    dati con modalità single-opt, in apposito database;
                    registrazione ed elaborazione su supporto cartaceo e/o
                    magnetico; organizzazione degli archivi in forma
                    prevalentemente automatizzata, ai sensi del Disciplinare
                    Tecnico in materia di misure minime di sicurezza, Allegato B
                    del Codice della Privacy.
                  </p>
                  <h2>Natura obbligatoria</h2>
                  <p>Tutti i dati richiesti sono obbligatori.</p>
                  <h2>
                    Soggetti a cui dati potranno essere comunicati i dati
                    personali
                  </h2>
                  <p>
                    I dati raccolti potranno essere comunicati a: società e
                    imprese per usi di direct mailing o attività analoghe;
                    associazioni e fondazioni intenzionate ad acquistare spazi
                    pubblicitari sulle liste o sul sito e/o collegate alla
                    fornitura di un particolare servizio. soggetti che debbano
                    avere accesso ai dati, come da norme di legge o di normative
                    secondarie e/o comunitarie.
                  </p>
                  <h2>Diritti dell'interessato</h2>
                  <p>
                    Ai sensi ai sensi dell'art. 7 (Diritto di accesso ai dati
                    personali ed altri diritti) del Codice della Privacy, vi
                    segnaliamo che i vostri diritti in ordine al trattamento dei
                    dati sono: conoscere, mediante accesso gratuito l'esistenza
                    di trattamenti di dati che possano riguardarvi; essere
                    informati sulla natura e sulle finalità del trattamento
                    ottenere a cura del titolare, senza ritardo: la conferma
                    dell'esistenza o meno di dati personali che vi riguardano,
                    anche se non ancora registrati, e la comunicazione in forma
                    intellegibile dei medesimi dati e della loro origine, nonché
                    della logica e delle finalità su cui si basa il trattamento;
                    la richiesta può essere rinnovata, salva l'esistenza di
                    giustificati motivi, con intervallo non minore di novanta
                    giorni; la cancellazione, la trasformazione in forma anonima
                    o il blocco dei dati trattati in violazione di legge,
                    compresi quelli di cui non è necessaria la conservazione in
                    relazione agli scopi per i quali i dati sono stati raccolti
                    o successivamente trattati; l'aggiornamento, la rettifica
                    ovvero, qualora vi abbia interesse, l'integrazione dei dati
                    esistenti; opporvi in tutto o in parte per motivi legittimi
                    al trattamento dei dati personali che vi riguardano ancorché
                    pertinenti allo scopo della raccolta; Vi segnaliamo che il
                    titolare del trattamento ad ogni effetto di legge è:
                    LogoPilota E-mail: beppealbo@gmail.com Per esercitare i
                    diritti previsti all'art. 7 del Codice della Privacy ovvero
                    per la cancellazione dei vostri dati dall'archivio, è
                    sufficiente contattarci attraverso uno dei canali messi a
                    disposizione. Tutti i dati sono protetti attraverso l'uso di
                    antivirus, firewall e protezione attraverso password.
                  </p>
                  <h2>Informazioni per i bambini</h2>
                  <p>
                    Riteniamo importante assicurare una protezione aggiunta ai
                    bambini online. Noi incoraggiamo i genitori e i tutori a
                    trascorrere del tempo online con i loro figli per osservare,
                    partecipare e/o monitorare e guidare la loro attività
                    online. Noi non raccogliamo dati personali di minori. Se un
                    genitore o un tutore crede che il nostro sito abbia nel suo
                    database le informazioni personali di un bambino, vi
                    preghiamo di contattarci immediatamente (utilizzando la mail
                    fornita) e faremo di tutto per rimuovere tali informazioni
                    il più presto possibile. Questa politica sulla privacy si
                    applica solo alle nostre attività online ed è valida per i
                    visitatori del nostro sito web e per quanto riguarda le
                    informazioni condivise e/o raccolte. Questa politica non si
                    applica a qualsiasi informazione raccolta in modalità
                    offline o tramite canali diversi da questo sito web.
                  </p>
                  <h2>Consenso</h2>
                  <p>
                    Usando il nostro sito web, acconsenti alla nostra politica
                    sulla privacy e accetti i suoi termini. Se desideri
                    ulteriori informazioni o hai domande sulla nostra politica
                    sulla privacy non esitare a contattarci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </p>
    </div>
  )
}

export default Contacts
