import React, { useRef, useEffect } from 'react';
import Section from './components/section/section';
import Button from '../../components/shared/button/button';
import {DefaultProps} from '../../interfaces';
import './homePage.scss';

const imageRootFolder = '/assets/images/';

const sections = [
  {
    headline: `245MHz Echzeitbandbreite`,
    image: `top_picture1_full.jpg`,
    text: `Der SPECTRAN® V6 erreicht mit 245MHz die mit Abstand höchste 24/7 Streaming Echtzeit-Bandbreite in seiner Klasse. Bisher waren lediglich 27MHz bzw. 40MHz an lückenloser Datenübertragung auf dem Markt verfügbar. Der V6 setzt hier mit seinen 245MHz vollkommen neue Maßstäbe. Der Screenshot demonstriert eindrucksvoll den Vorteil einer hohen Echtzeitbandbreite: Wären mit 40MHz lediglich ein kleiner Bereich des WiFi sichtbar, können mit 245MHz das komplette WiFi Band und LTE gleichzeitig in Echtzeit überwacht werden. Dies ist auch für extrem breitbandige Signale wie WiFi 6 unabdingbar.`,
    forumLink: `https://v6-forum.aaronia.de/forum/topic/spectran-v6-rtbws/`,
    videoLink: `https://www.youtube.com/watch?v=svEsdghPxcQ&feature=youtu.be`,
    anchor: 'bandbreite',
    label: 'Echtzeitbandbreite'
  },
  {
    headline: `1THz/s Sweep-Geschwindigkeit`,
    image: 'top_picture2_full.jpg',
    text: `Der SPECTRAN® V6 benötigt lediglich 5ms, um den gesamten Frequenzbereich von 6GHz zu erfassen. Er sweept daher sogar schneller als das menschliche Auge es erfassen könnte. Dies stellt ein absolutes Novum in der USB-Kompaktklasse dar und ermöglicht vollkommen neue Messmöglichkeiten. Der Screenshot demonstriert dies eindrucksvoll: Selbst kurze Signale wie Bluetooth, DECT etc. werden durch die POI von lediglich 5ms problemlos wiedergegeben und ermöglichen so eine quasi Echtzeitdarstellung des gesamten Frequenzspektrums von TETRA über GSM, LTE, 5G, bis zum 5GHz WiFi in bisher nicht gekannter Detailtreue.`,
    forumLink: `https://v6-forum.aaronia.de/forum/topic/spectran-v6-sweep-speed-ghz-s-poi-and-fft-rate/`,
    videoLink: `https://www.youtube.com/watch?v=svEsdghPxcQ&feature=youtu.be`,
    anchor: 'geschwindigkeit',
    label: 'Geschwindigkeit'
  },
  {
    headline: `10ns POI`,
    image: 'top_picture3_full.jpg',
    text: `Der extrem niedrige POI von 10ns (97ns via FFT) ermöglicht vollkommen neue Messmöglichkeiten, die für einen USB Spektrum Analysator bisher unerreichbar schienen. Selbst extrem kurze Radarbursts im Nanosekundenbereich können nun im Detail analysiert werden: Der Screenshot stellt einen lediglich 7µs kurzen phasenmodulierten Radarburst dar, der dennoch mit einer zeitlichen Auflösung von 100ns dargestellt werden kann. Erst dies ermöglicht jetzt eine detailierte Analyse: Es handelt sich um einen Barker-Code der Länge 13.`,
    forumLink: `https://v6-forum.aaronia.de/forum/topic/what-is-the-lowest-100-poi-the-spetran-v6-can-offer/`,
    videoLink: `https://www.youtube.com/watch?v=GA6LPC_Zd9k`,
    anchor: 'poi',
    label: 'POI'
  },
  {
    headline: `IQ Recording mit voller Bandbreite`,
    image: 'picture22_full.jpg',
    text: `Die mächtige Record & Replay Funktion des SPECTRAN® V6, zusammen mit der RTSA-Suite PRO, ermöglicht eine Aufzeichnung und Wiedergabe der VOLLEN IQ-Bandbreite von bis zu 245MHz. Dies war bisher nur extrem teuren Benchtopgeräten vorbehalten. Das Besondere: Es besteht keinerlei Limitierung der Aufzeichnungsdauer. Diese wird lediglich von der Größe des Speichermediums begrenzt und somit ist sogar eine 24/7-Aufzeichnung möglich. Optional können mit Hilfe des "Smartbufferings" alte Daten automatisch wieder überschrieben werden (FIFO Funktion). So werden stets nur die aktuellen Daten vorgehalten, sollte der Speicherplatz begrenzt sein.`,
    forumLink: `https://v6-forum.aaronia.de/forum/forum/in-out/`,
    videoLink: ``,
    anchor: 'recordnreplay',
    label: 'IQ Recording'
  },
{
  headline: '-170dBm/Hz DANL',
  image:'top_picture4_full.jpeg',
  text: 'Die außergewöhnlich hohe Empfindlichkeit des SPECTRAN® V6 ermöglicht die Messung selbst extrem schwacher Signale, die bisher nur der Benchtop-Klasse vorbehalten war. Signale, die bisher verborgen waren, können durch den erstklassigen DANL problemlos erfasst werden. Der Screenshot demonstriert eindrucksvoll den Unterschied: Selbst Signale um die -170dBm können mit einem RBW von 1Hz noch erfasst werden.',
  forumLink:'https://v6-forum.aaronia.de/forum/topic/preamplifier-offers-addition-20db-of-gain/',
  videoLink:'',
  anchor:'danl',
  label:'DANL'
},
{
  headline: 'Echtzeit EMV Messung',
  image:'top_picture7_full.jpeg',
  text: 'Die enorme Echtzeitbandbreite von bis zu 245MHz, sowie die ultraschnelle Sweep-Geschwindigkeit des SPECTRAN® V6 ermöglichen EMV-Messungen in Echtzeit. So kann der Erfolg von Änderungen, wie beispielsweise das Ergreifen von Entstör- und Abschirm-Maßnahmen, sofort ermittelt und bewertet werden. Die gleichzeitige Anzeige von mehreren Grenzwerten erhöht die Geschwindigkeit der Messung erheblich, da diese nicht mehr einzeln durchgeführt werden müssen. Der Screenshot zeigt eine gleichzeitige Live-Messung nach EN55015 und EN61800-3 Norm mit visueller Rückmeldung bei Nicht-Einhaltung der Grenzwerte (Marker in rot)',
  forumLink:'https://v6-forum.aaronia.de/forum/topic/emc-emi-limit-line-measurement/',
  videoLink:'',
  anchor:'emv',
  label:'EMV'
}
]


const HomePage: React.FC<DefaultProps> = ({history}) => {

  const handleOnClick = () => {
    history.push('/configurator');
  }

  return (
    <div className="p-home container container__spacer">
      <div className={"p-home__panel"}>
        {sections.map((section, index) => {
          return <a key={index} href={'#' + section.anchor}>{section.label}</a>
        })}
      </div>
      <div className={"p-home__inner"}>
        <h1>RTSA-Suite PRO Spektrumanalyse-Software</h1>
        {sections.map((section, index) => {
          return <Section
            id={section.anchor}
            key={index}
            image={imageRootFolder + section.image}
            headline={section.headline}
            text={section.text}
            forumLink={section.forumLink}
            videoLink={section.videoLink}
            flip={index % 2 ? true : false}
          />
        })}
        <Button label={'Jetzt individuelle Lösung konfigurieren'}
                onClick={handleOnClick}
        />
      </div>
    </div>
  );
}

export default HomePage;