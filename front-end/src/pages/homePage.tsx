import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/section/section';
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
]


const HomePage: React.FC = () => {

  return (
    <div className="p-homepage container">
      <div className={"p-homepage__panel"}>
        {sections.map((section, index) => {
          return <a key={index} href={'#' + section.anchor}>{section.label}</a>
        })}
      </div>
      <div className={"p-homepage__inner"}>
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
        <Link to={"/configurator"}>Konfigurator</Link>

      </div>
    </div>
  );
}

export default HomePage;