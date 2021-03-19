import React from "react"
import mainPhoto from "./img/banner sito.jpg"

function Main() {
  return (
    <div className="main" id="main">
      <img className="main-photo" alt="Beppe on his MT-10" src={mainPhoto} />
      <h1>
        Graphics<span id="four">4</span>Riders
      </h1>
      <p className="about-p">
        Avete mai pensato ad avere un <strong>logo personalizzato</strong>{" "}
        creato proprio per voi?
        <br />
        <br />
        Noi motociclisti amiamo <strong>sentirci unici</strong>. Esprimiamo la
        nostra individualità con modifiche tecniche ed estetiche per la nostra
        moto. Nella maggior parte dei casi però, i pezzi e gli accessori che
        usiamo sono stati prodotti su larga scala. Un logo fatto <em>ad hoc</em>{" "}
        invece riesce a racchiudere la nostra personalità e ciò che più ci
        rappresenta.
        <br />
        <br />
        <strong>LogoPilota</strong> nasce proprio dall'idea di aiutare i
        motociclisti a creare il proprio logo personalizzato. Non importa che tu
        sia uno smanettone da pista o un globetrotter incallito. Il tuo logo
        verrà <strong>progettato proprio per te</strong> e per l'utilizzo che
        vorrai farne. Può essere il tuo nome sulla tuta come quello dei piloti
        in MotoGP, un adesivo da attaccare su tutti i cartelli dei passi che
        farai, il disegno di una maglietta o semplicemente la tua immagine di
        profilo sui social.
        <br />
        <br />
        Qualcuno diceva <em>"Il Diavolo è nei dettagli."</em> e saranno proprio
        i dettagli che faranno la differenza nell'effetto WOW che avrà il tuo
        logo. Non mi limiterò a fare il compitino, ma studierò ogni linea per
        fare in modo che sia assolutamente perfetta.
        <br />
        <br />
        All'approvazione del tuo logo riceverai una cartella con{" "}
        <strong>tutti i files</strong>
        sia in formato raster da usare sul web, sia in formato vettoriale per
        poterlo stampare alla massima qualità e rimarrò a disposizione anche
        dopo la vendita per qualsiasi tipo di esigenza. <br />
        <br />I loghi non sono, però, l'unico servizio. Si eseguono anche altri
        lavori di graphic design tra cui <strong>photo editing</strong>,{" "}
        <strong>locandine</strong> ed <strong>impaginazione cataloghi</strong>.
      </p>
    </div>
  )
}

export default Main
