/* Pilzkarten – Speisepilze und Warnkarten für die Region Stuttgart / Böblingen (Schönbuch, Gäu, Glemswald)
   Stand: 26.10.2026 (Claudi). Quelle der Inhalte: mykologisches Standardwissen (Bestimmungsliteratur, DGfM),
   in eigenen Worten zusammengefasst. Wetter-Schwellen sind FAUSTREGELN für die Prognose, keine Messwerte.

   Felder
   - monate / haupt: Monate 1–12 (Saison / Hauptsaison)
   - baeume: Partnerbäume (Mykorrhiza) oder Substrat; lebensraum: Revier-Typen, die passen
   - boden: 'kalk' | 'sauer' | 'egal'
   - wetter.regen14: mm Niederschlag in den 14 Tagen vor dem Fund, ab dem es gut aussieht
   - wetter.tMin / tMax: passende Tagesmitteltemperatur (°C, Mittel der letzten 7 Tage)
   - wetter.frost: true = Kältereiz/erste Fröste fördern das Wachstum
   - essbar: 'gut' | 'bedingt' (nur gegart / mit Einschränkung) | 'unge' (ungenießbar) | 'giftig' | 'toedlich'
   - stufe: 1 = einsteigerfreundlich, 2 = mit Erfahrung, 3 = nur für Erfahrene
   - schutz: true = besonders geschützt nach Bundesartenschutzverordnung (nur kleine Mengen für den Eigenbedarf)
*/
const PILZKARTEN = [
  {
    id: 'steinpilz', name: 'Steinpilz (Fichten-Steinpilz)', latin: 'Boletus edulis', gruppe: 'Röhrling',
    essbar: 'gut', stufe: 1, schutz: true,
    monate: [6, 7, 8, 9, 10, 11], haupt: [8, 9, 10],
    baeume: ['Fichte', 'Buche', 'Kiefer', 'Eiche', 'Tanne'], lebensraum: ['Nadelwald', 'Mischwald', 'Laubwald'], boden: 'sauer',
    merkmale: {
      hut: '5–25 cm, hell- bis dunkelbraun, wie gebacken; Rand oft heller, feucht leicht schmierig',
      unterseite: 'Röhren jung weiß, dann gelb, alt olivgrün – verfärben sich nicht blau',
      stiel: 'dick, bauchig bis keulig, weißlich bis hellbraun, oben mit feinem WEISSEM Netz',
      fleisch: 'weiß, fest, unveränderlich; mild, nussig'
    },
    standort: 'Lichte Altbestände, Wegränder, Moos und Heidelbeere. Im Schönbuch unter Fichte und Buche auf Sandstein.',
    zeiger: ['Fliegenpilz (gleiche Partnerbäume, gleiche Zeit)', 'Heidelbeere', 'Moospolster', 'Fichtenränder an Wegen'],
    wetter: { regen14: 25, tMin: 10, tMax: 20, frost: false,
      text: 'Erscheint ca. 7–14 Tage nach ergiebigem Regen (20–40 mm), wenn es danach warm bleibt (Boden 12–18 °C). Ein Temperatursturz nach einer warmen, feuchten Phase löst oft Schübe aus.' },
    verwechslung: [
      { name: 'Gallenröhrling', gefahr: 'unge', unterschied: 'Poren rosa, Stiel mit DUNKELBRAUNEM grobem Netz, extrem bitter (Zungenprobe, ausspucken). Ein Exemplar verdirbt das ganze Gericht.' },
      { name: 'Satansröhrling', gefahr: 'giftig', unterschied: 'Poren rot, Stiel mit rotem Netz, Fleisch blaut, Hut weißgrau. Auf Kalk (Gäu), unter Eiche/Buche.' }
    ],
    hinweise: 'Madige Exemplare stehen lassen (Sporen). Gut zum Trocknen.'
  },
  {
    id: 'sommersteinpilz', name: 'Sommer-Steinpilz', latin: 'Boletus reticulatus', gruppe: 'Röhrling',
    essbar: 'gut', stufe: 1, schutz: true,
    monate: [5, 6, 7, 8, 9], haupt: [6, 7, 8],
    baeume: ['Eiche', 'Buche', 'Hainbuche', 'Linde'], lebensraum: ['Laubwald', 'Mischwald', 'Park/Wiese'], boden: 'egal',
    merkmale: {
      hut: 'hell- bis haselnussbraun, matt, samtig, oft felderig-rissig',
      unterseite: 'Röhren weiß, später gelb-oliv, nicht blauend',
      stiel: 'hellbraun mit deutlichem Netz bis zur Basis',
      fleisch: 'weiß, unveränderlich, oft früh madig'
    },
    standort: 'Wärmeliebend: lichte Eichen-/Buchenwälder, Parks, Alleen, Waldränder.',
    zeiger: ['Alte Eichen', 'Sommergewitter-Phasen'],
    wetter: { regen14: 20, tMin: 15, tMax: 24, frost: false,
      text: 'Nach warmen Gewitterregen im Frühsommer, ca. 7–10 Tage Verzug. Bei Hitze ohne Regen kein Wachstum.' },
    verwechslung: [
      { name: 'Gallenröhrling', gefahr: 'unge', unterschied: 'rosa Poren, dunkles Netz, bitter.' }
    ],
    hinweise: 'Früh sammeln, wird schnell von Maden befallen.'
  },
  {
    id: 'marone', name: 'Maronen-Röhrling', latin: 'Imleria badia', gruppe: 'Röhrling',
    essbar: 'gut', stufe: 1, schutz: false,
    monate: [7, 8, 9, 10, 11], haupt: [9, 10],
    baeume: ['Fichte', 'Kiefer', 'Tanne'], lebensraum: ['Nadelwald', 'Mischwald'], boden: 'sauer',
    merkmale: {
      hut: 'kastanienbraun, feucht schmierig, trocken samtig',
      unterseite: 'Poren gelblich bis olivgelb, BLAUEN auf Druck',
      stiel: 'bräunlich, längsfaserig, OHNE Netz',
      fleisch: 'weißlich-gelb, blaut leicht im Anschnitt'
    },
    standort: 'Saure Nadelwälder, Moos, Nadelstreu, auch an Baumstümpfen. Im Schönbuch häufig.',
    zeiger: ['Fichtenforst mit Moos', 'Heidelbeere', 'Kiefer auf Sand'],
    wetter: { regen14: 25, tMin: 6, tMax: 16, frost: false,
      text: 'Klassischer Herbstpilz: nach feuchten, kühler werdenden Wochen. Verträgt kühle Nächte.' },
    verwechslung: [
      { name: 'Gallenröhrling', gefahr: 'unge', unterschied: 'rosa Poren, Netz am Stiel, blaut nicht, bitter.' },
      { name: 'Filziger Röhrling / Rotfußröhrling', gefahr: 'gut', unterschied: 'harmlos, aber weniger schmackhaft.' }
    ],
    hinweise: 'Speichert gern Schwermetalle und Radiocäsium – maßvoll essen.'
  },
  {
    id: 'hexenroehrling', name: 'Flockenstieliger Hexen-Röhrling', latin: 'Neoboletus erythropus', gruppe: 'Röhrling',
    essbar: 'bedingt', stufe: 3, schutz: false,
    monate: [5, 6, 7, 8, 9, 10], haupt: [7, 8, 9],
    baeume: ['Fichte', 'Buche', 'Tanne', 'Eiche'], lebensraum: ['Nadelwald', 'Mischwald', 'Laubwald'], boden: 'sauer',
    merkmale: {
      hut: 'dunkelbraun, samtig',
      unterseite: 'Poren orangerot bis blutrot',
      stiel: 'gelb mit dichten ROTEN FLOCKEN (punktiert), KEIN Netz',
      fleisch: 'gelb, blaut sofort intensiv tiefblau'
    },
    standort: 'Saure Böden, oft zusammen mit Steinpilz und Marone.',
    zeiger: ['Heidelbeere', 'Fichte'],
    wetter: { regen14: 20, tMin: 10, tMax: 20, frost: false,
      text: 'Ähnlich wie Steinpilz, erscheint oft schon früher im Jahr.' },
    verwechslung: [
      { name: 'Satansröhrling', gefahr: 'giftig', unterschied: 'weißgrauer Hut, Stiel mit rotem NETZ (statt Flocken), auf Kalk, alt Aasgeruch.' },
      { name: 'Netzstieliger Hexen-Röhrling', gefahr: 'bedingt', unterschied: 'Stiel mit Netz, Kalk – ebenfalls nur gut gegart.' }
    ],
    hinweise: 'ROH GIFTIG – mindestens 15–20 Minuten durchgaren. Nur für Erfahrene: rote Poren + Netz = Finger weg.'
  },
  {
    id: 'raufuss', name: 'Birkenpilz und Rotkappen', latin: 'Leccinum spp.', gruppe: 'Röhrling',
    essbar: 'bedingt', stufe: 1, schutz: true,
    monate: [6, 7, 8, 9, 10], haupt: [8, 9],
    baeume: ['Birke', 'Pappel', 'Eiche', 'Kiefer'], lebensraum: ['Laubwald', 'Mischwald', 'Waldrand', 'Park/Wiese'], boden: 'egal',
    merkmale: {
      hut: 'Birkenpilz grau- bis braun; Rotkappen orange bis rotbraun',
      unterseite: 'Poren weißlich bis grau, fein',
      stiel: 'schlank, weißlich mit SCHWARZEN oder braunen Schüppchen (Raufuß)',
      fleisch: 'Birkenpilz weiß, kaum verfärbend; Rotkappen schwärzen im Anschnitt'
    },
    standort: 'Strikt an den Partnerbaum gebunden – Birkenpilz immer bei Birken (auch Einzelbäume, Parks, Heiden).',
    zeiger: ['Birken am Waldrand', 'Grasige Ränder'],
    wetter: { regen14: 20, tMin: 10, tMax: 20, frost: false,
      text: 'Recht anspruchslos, kommt schon nach mäßigem Regen. Ca. 5–10 Tage Verzug.' },
    verwechslung: [
      { name: 'Gallenröhrling', gefahr: 'unge', unterschied: 'Netz statt Schüppchen am Stiel, rosa Poren, bitter.' }
    ],
    hinweise: 'Rotkappen roh giftig – gründlich garen. Alte Birkenpilze werden wässrig, nur junge nehmen.'
  },
  {
    id: 'pfifferling', name: 'Pfifferling (Eierschwammerl)', latin: 'Cantharellus cibarius', gruppe: 'Leistling',
    essbar: 'gut', stufe: 1, schutz: true,
    monate: [6, 7, 8, 9, 10], haupt: [7, 8, 9],
    baeume: ['Fichte', 'Buche', 'Eiche', 'Kiefer', 'Tanne'], lebensraum: ['Nadelwald', 'Mischwald', 'Laubwald'], boden: 'sauer',
    merkmale: {
      hut: 'eigelb, jung gewölbt, dann trichterig, Rand wellig',
      unterseite: 'LEISTEN (keine Lamellen): dick, gegabelt, weit am Stiel herablaufend',
      stiel: 'gleichfarben, fest, voll',
      fleisch: 'weißlich-gelb, faserig, fest; Geruch leicht nach Aprikose'
    },
    standort: 'Saure, moosige Böden, gern an Wegböschungen, unter Fichte und Buche. Wächst langsam, oft jedes Jahr an derselben Stelle.',
    zeiger: ['Heidelbeere', 'Moos', 'Fichtenränder', 'Böschungen an Waldwegen'],
    wetter: { regen14: 30, tMin: 12, tMax: 22, frost: false,
      text: 'Braucht anhaltende Feuchtigkeit über mehrere Wochen; erste Exemplare ca. 2–3 Wochen nach einer feuchten Phase. Trockenheit stoppt das Wachstum sofort.' },
    verwechslung: [
      { name: 'Falscher Pfifferling', gefahr: 'unge', unterschied: 'orange, dünne echte LAMELLEN, weich, auf Nadelholzresten.' },
      { name: 'Ölbaum-Trichterling', gefahr: 'giftig', unterschied: 'büschelig an Holz (v. a. Eiche), echte Lamellen, orange.' },
      { name: 'Spitzgebuckelter Raukopf', gefahr: 'toedlich', unterschied: 'orangebraun, LAMELLEN, spitzer Buckel, rostbraunes Sporenpulver.' }
    ],
    hinweise: 'Kleine „Knöpfe“ stehen lassen. Nicht zum Trocknen geeignet (wird zäh) – besser braten oder einfrieren.'
  },
  {
    id: 'trompetenpfifferling', name: 'Trompeten-Pfifferling', latin: 'Craterellus tubaeformis', gruppe: 'Leistling',
    essbar: 'gut', stufe: 2, schutz: false,
    monate: [8, 9, 10, 11, 12], haupt: [10, 11],
    baeume: ['Fichte', 'Tanne', 'Kiefer'], lebensraum: ['Nadelwald', 'Mischwald'], boden: 'sauer',
    merkmale: {
      hut: 'graubraun, trichterförmig, Mitte oft durchbohrt',
      unterseite: 'gelblich-graue, gegabelte LEISTEN',
      stiel: 'gelb bis orange, hohl, oft zusammengedrückt',
      fleisch: 'dünn, elastisch'
    },
    standort: 'Feuchte, saure Nadelwälder, Moos, morsches Holz. Oft massenhaft.',
    zeiger: ['Torfmoos / nasse Moospolster', 'Fichten an Bachläufen'],
    wetter: { regen14: 25, tMin: 2, tMax: 12, frost: true,
      text: 'Spätherbstpilz, verträgt leichten Frost. Kommt, wenn es kühl und dauerhaft feucht ist.' },
    verwechslung: [
      { name: 'Spitzgebuckelter Raukopf', gefahr: 'toedlich', unterschied: 'LAMELLEN statt Leisten, spitzer Buckel, Stiel mit gelben Gürteln, wächst am selben Standort! Vergiftung zeigt sich erst nach Tagen (Nieren).' }
    ],
    hinweise: 'Jeden Pilz einzeln auf Leisten prüfen – nie „abmähen“. Gut zum Trocknen.'
  },
  {
    id: 'herbsttrompete', name: 'Herbsttrompete (Totentrompete)', latin: 'Craterellus cornucopioides', gruppe: 'Leistling',
    essbar: 'gut', stufe: 1, schutz: false,
    monate: [8, 9, 10, 11], haupt: [9, 10],
    baeume: ['Buche', 'Eiche', 'Hainbuche'], lebensraum: ['Laubwald', 'Mischwald'], boden: 'kalk',
    merkmale: {
      hut: 'schwarzgrau, tiefe Trompete, Rand wellig-umgebogen',
      unterseite: 'aschgrau, glatt bis leicht runzelig (keine Lamellen)',
      stiel: 'geht in den hohlen Trichter über',
      fleisch: 'dünn, ledrig-elastisch, aromatisch'
    },
    standort: 'Buchenwälder auf Kalk oder Lehm, gesellig in der Laubstreu – schwer zu sehen. Im Heckengäu gut möglich.',
    zeiger: ['Buchenlaub auf lehmigem Boden', 'Feuchte Mulden'],
    wetter: { regen14: 30, tMin: 6, tMax: 15, frost: false,
      text: 'Braucht viel Feuchtigkeit; nach regenreichen Wochen im Spätsommer/Herbst.' },
    verwechslung: [
      { name: 'praktisch keine gefährliche', gefahr: 'gut', unterschied: 'Graue Kraterelle (Pseudocraterellus) ebenfalls essbar.' }
    ],
    hinweise: 'Hervorragender Trocknungs- und Würzpilz.'
  },
  {
    id: 'semmelstoppel', name: 'Semmel-Stoppelpilz', latin: 'Hydnum repandum', gruppe: 'Stachelpilz',
    essbar: 'gut', stufe: 1, schutz: false,
    monate: [8, 9, 10, 11], haupt: [9, 10],
    baeume: ['Buche', 'Fichte', 'Eiche', 'Tanne'], lebensraum: ['Laubwald', 'Mischwald', 'Nadelwald'], boden: 'kalk',
    merkmale: {
      hut: 'semmelfarben bis orangeocker, unregelmäßig, fleischig',
      unterseite: 'STACHELN (brüchig), cremefarben',
      stiel: 'kurz, weißlich, oft exzentrisch',
      fleisch: 'weiß, fest, alt bitter'
    },
    standort: 'Laub- und Nadelwald, bevorzugt Kalk, oft in Reihen oder Hexenringen.',
    zeiger: ['Moos auf Kalkboden', 'Buchen-Tannen-Wald'],
    wetter: { regen14: 25, tMin: 6, tMax: 16, frost: false,
      text: 'Herbstpilz, robust gegen Kälte, kommt nach anhaltend feuchtem Wetter.' },
    verwechslung: [
      { name: 'keine giftigen Doppelgänger', gefahr: 'gut', unterschied: 'Rotgelber Stoppelpilz ebenfalls essbar. Stacheln sind eindeutig.' }
    ],
    hinweise: 'Junge Exemplare nehmen, ältere ggf. Stacheln abstreifen und kurz abkochen (Bitterkeit).'
  },
  {
    id: 'parasol', name: 'Parasol (Riesenschirmling)', latin: 'Macrolepiota procera', gruppe: 'Lamellenpilz',
    essbar: 'gut', stufe: 2, schutz: false,
    monate: [7, 8, 9, 10, 11], haupt: [8, 9, 10],
    baeume: [], lebensraum: ['Waldrand', 'Park/Wiese', 'Mischwald', 'Laubwald'], boden: 'egal',
    merkmale: {
      hut: '10–30 cm, jung „Paukenschlägel“, dann flach mit Buckel; braune Schuppen auf hellem Grund',
      unterseite: 'weiße Lamellen, frei (berühren den Stiel nicht)',
      stiel: 'hoch, schlank, braun GENATTERT (Schlangenhaut-Muster), Ring doppelt und VERSCHIEBBAR, Basis knollig verdickt (keine Scheide)',
      fleisch: 'weiß, Hut weich, Stiel holzig-faserig'
    },
    standort: 'Lichtungen, Waldränder, Wegränder, Wiesen am Wald.',
    zeiger: ['Sonnige Waldränder', 'Brombeer- und Farnfluren'],
    wetter: { regen14: 20, tMin: 12, tMax: 22, frost: false,
      text: 'Nach warmen Regenphasen im Spätsommer, ca. 7–10 Tage Verzug.' },
    verwechslung: [
      { name: 'Kleine Schirmlinge (Lepiota)', gefahr: 'toedlich', unterschied: 'Hut UNTER 10 cm, Stiel nicht genattert. Regel: nur Hüte über 10 cm sammeln.' },
      { name: 'Pantherpilz', gefahr: 'giftig', unterschied: 'weiße Flocken auf braunem Hut, Knolle mit Rand, Ring nicht verschiebbar.' },
      { name: 'Gift-Riesenschirmling', gefahr: 'giftig', unterschied: 'Stiel glatt (nicht genattert), Fleisch rötet stark, eher in Gärten/Kompost.' }
    ],
    hinweise: 'Nur die Hüte verwenden (paniert wie Schnitzel). Stiele sind zäh.'
  },
  {
    id: 'glucke', name: 'Krause Glucke', latin: 'Sparassis crispa', gruppe: 'Porling',
    essbar: 'gut', stufe: 1, schutz: false,
    monate: [8, 9, 10, 11], haupt: [9, 10],
    baeume: ['Kiefer'], lebensraum: ['Nadelwald', 'Mischwald'], boden: 'sauer',
    merkmale: {
      hut: 'blumenkohl- bis badeschwammartig, krause, flache Lappen, cremegelb, 10–40 cm',
      unterseite: 'keine – Lappen tragen die Sporen',
      stiel: 'dicker, tief wurzelnder Strunk',
      fleisch: 'weiß, elastisch, würziger Geruch'
    },
    standort: 'Am Stammgrund lebender oder toter Kiefern. Erscheint oft jahrelang am selben Baum – ideal für dein Revier-Log!',
    zeiger: ['Alte Kiefern'],
    wetter: { regen14: 20, tMin: 10, tMax: 20, frost: false,
      text: 'Spätsommer bis Herbst nach Regen; am bekannten Baum etwa alle 1–2 Wochen nachschauen.' },
    verwechslung: [
      { name: 'Breitblättrige Glucke', gefahr: 'gut', unterschied: 'an Eiche, ebenfalls essbar. Kaum gefährliche Verwechslung.' }
    ],
    hinweise: 'Strunk im Boden lassen (wächst wieder). Gründlich von Sand und Nadeln befreien.'
  },
  {
    id: 'frauentaeubling', name: 'Frauen-Täubling', latin: 'Russula cyanoxantha', gruppe: 'Lamellenpilz',
    essbar: 'gut', stufe: 2, schutz: false,
    monate: [6, 7, 8, 9, 10], haupt: [7, 8, 9],
    baeume: ['Buche', 'Eiche', 'Fichte'], lebensraum: ['Laubwald', 'Mischwald'], boden: 'egal',
    merkmale: {
      hut: 'violett, blau, grünlich – oft mehrfarbig gemischt',
      unterseite: 'weiße Lamellen, BIEGSAM (bei Täublingen sonst splitternd)',
      stiel: 'weiß, fest, ohne Ring, ohne Knolle',
      fleisch: 'weiß, bricht wie ein Apfel, mild'
    },
    standort: 'Buchen- und Eichenwälder, häufig.',
    zeiger: ['Buchenhallenwald'],
    wetter: { regen14: 20, tMin: 12, tMax: 22, frost: false,
      text: 'Sommer bis Herbst nach Regen, ca. 5–10 Tage Verzug.' },
    verwechslung: [
      { name: 'Grüner Knollenblätterpilz', gefahr: 'toedlich', unterschied: 'Stiel mit RING und KNOLLE mit Scheide (ausgraben!), Fleisch faserig statt brüchig.' }
    ],
    hinweise: 'Täublings-Regel: Täublinge (brüchiges Fleisch, kein Ring, keine Knolle) mit mildem Geschmack sind essbar – Probe nur, wenn die Gattung sicher ist, ausspucken.'
  },
  {
    id: 'schopftintling', name: 'Schopf-Tintling (Spargelpilz)', latin: 'Coprinus comatus', gruppe: 'Lamellenpilz',
    essbar: 'gut', stufe: 1, schutz: false,
    monate: [5, 6, 7, 8, 9, 10, 11], haupt: [9, 10],
    baeume: [], lebensraum: ['Park/Wiese', 'Waldrand'], boden: 'egal',
    merkmale: {
      hut: 'walzenförmig, weiß mit abstehenden, braun gespitzten Schuppen',
      unterseite: 'Lamellen weiß → rosa → schwarz, zerfließen zu Tinte',
      stiel: 'weiß, hohl, beweglicher dünner Ring',
      fleisch: 'weiß, zart'
    },
    standort: 'Wiesen, Wegränder, frisch aufgeschüttete Erde, Grünanlagen – auch mitten in Böblingen.',
    zeiger: ['Nährstoffreiche, gestörte Böden'],
    wetter: { regen14: 15, tMin: 8, tMax: 18, frost: false,
      text: 'Schießt sehr schnell, schon 3–7 Tage nach Regen.' },
    verwechslung: [
      { name: 'Falten-Tintling', gefahr: 'giftig', unterschied: 'grauer, glatter Hut ohne Schuppen, büschelig. Giftig zusammen mit Alkohol (auch Tage danach).' }
    ],
    hinweise: 'Nur ganz junge Exemplare mit weißen Lamellen; noch am selben Tag zubereiten. Nicht an Straßenrändern sammeln (Schadstoffe).'
  },
  {
    id: 'wiesenchampignon', name: 'Wiesen-Champignon', latin: 'Agaricus campestris', gruppe: 'Lamellenpilz',
    essbar: 'gut', stufe: 2, schutz: false,
    monate: [6, 7, 8, 9, 10], haupt: [8, 9],
    baeume: [], lebensraum: ['Park/Wiese'], boden: 'egal',
    merkmale: {
      hut: 'weiß, seidig, 4–10 cm',
      unterseite: 'Lamellen jung ROSA, dann schokoladenbraun – NIE weiß',
      stiel: 'kurz, weiß, mit dünnem Ring, OHNE Knolle',
      fleisch: 'weiß, rötet leicht; angenehmer Pilzgeruch'
    },
    standort: 'Gedüngte Weiden (Pferde-/Kuhkoppeln), außerhalb des Waldes.',
    zeiger: ['Pferdeweiden', 'Hexenringe im Gras'],
    wetter: { regen14: 20, tMin: 12, tMax: 22, frost: false,
      text: 'Nach warmem Regen im Spätsommer, besonders bei schwülem Wetter. Ca. 5–7 Tage Verzug.' },
    verwechslung: [
      { name: 'Knollenblätterpilze (grün/weiß)', gefahr: 'toedlich', unterschied: 'Lamellen IMMER WEISS, Knolle mit Scheide. Pilz immer ganz herausdrehen!' },
      { name: 'Karbol-Champignon', gefahr: 'giftig', unterschied: 'Stielbasis gilbt beim Kratzen sofort chromgelb, Geruch nach Tinte/Karbol.' }
    ],
    hinweise: 'Champignons mit noch weißen Lamellen (ganz jung) besser stehen lassen.'
  },
  {
    id: 'hallimasch', name: 'Hallimasch', latin: 'Armillaria spp.', gruppe: 'Lamellenpilz',
    essbar: 'bedingt', stufe: 2, schutz: false,
    monate: [9, 10, 11], haupt: [10],
    baeume: ['Fichte', 'Buche', 'Eiche', 'Holz/Stumpf'], lebensraum: ['Nadelwald', 'Mischwald', 'Laubwald'], boden: 'egal',
    merkmale: {
      hut: 'honiggelb bis braun, Mitte mit dunklen Schüppchen, büschelig',
      unterseite: 'Lamellen weißlich bis creme, später fleckig; WEISSES Sporenpulver (weißer Staub auf unteren Hüten)',
      stiel: 'faserig, mit wattigem Ring',
      fleisch: 'weißlich, Stiel zäh'
    },
    standort: 'Büschelig an Stümpfen, Wurzeln und geschwächten Bäumen. Oft massenhaft.',
    zeiger: ['Frische Fichtenstümpfe', 'Sturm- und Käferflächen'],
    wetter: { regen14: 25, tMin: 6, tMax: 14, frost: false,
      text: 'Kommt in Schüben nach dem ersten deutlichen Kälteeinbruch mit Regen.' },
    verwechslung: [
      { name: 'Gift-Häubling', gefahr: 'toedlich', unterschied: 'kleiner, Sporenpulver ROSTBRAUN, Stiel unter dem Ring silbrig gerieft. Amatoxine wie Knollenblätterpilz!' },
      { name: 'Grünblättriger Schwefelkopf', gefahr: 'giftig', unterschied: 'schwefelgelb, Lamellen grünlich, sehr bitter.' }
    ],
    hinweise: 'ROH GIFTIG und nicht für jeden verträglich: 5 Min. abkochen, Wasser wegschütten, dann 15–20 Min. garen. Nur junge Hüte, keine Stiele.'
  },
  {
    id: 'roetelritterling', name: 'Violetter Rötel-Ritterling', latin: 'Lepista nuda', gruppe: 'Lamellenpilz',
    essbar: 'bedingt', stufe: 2, schutz: false,
    monate: [9, 10, 11, 12], haupt: [10, 11],
    baeume: ['Buche', 'Fichte', 'Eiche'], lebensraum: ['Laubwald', 'Mischwald', 'Nadelwald', 'Waldrand', 'Park/Wiese'], boden: 'egal',
    merkmale: {
      hut: 'violett bis braunviolett, glatt, später ausblassend',
      unterseite: 'Lamellen violett, eng',
      stiel: 'violett, faserig, ohne Ring und ohne Schleier',
      fleisch: 'violettlich; Geruch süßlich-parfümiert; Sporenpulver blass rosa'
    },
    standort: 'Laub- und Nadelstreu, Komposthaufen, Waldränder, oft in Reihen.',
    zeiger: ['Dicke Laubschicht', 'Laub- oder Grasschnitthaufen'],
    wetter: { regen14: 20, tMin: 2, tMax: 12, frost: true,
      text: 'Spätherbstpilz, kommt nach den ersten Nachtfrösten.' },
    verwechslung: [
      { name: 'Violette Schleierlinge (Cortinarius)', gefahr: 'giftig', unterschied: 'spinnwebartiger Schleier zwischen Hutrand und Stiel, Sporenpulver ROSTBRAUN (Sporenabdruck machen).' }
    ],
    hinweise: 'Roh giftig – gut durchgaren.'
  },
  {
    id: 'austernseitling', name: 'Austern-Seitling', latin: 'Pleurotus ostreatus', gruppe: 'Lamellenpilz',
    essbar: 'gut', stufe: 1, schutz: false,
    monate: [11, 12, 1, 2, 3], haupt: [12, 1],
    baeume: ['Buche', 'Pappel', 'Holz/Stumpf'], lebensraum: ['Laubwald', 'Mischwald', 'Waldrand'], boden: 'egal',
    merkmale: {
      hut: 'muschelförmig, dachziegelig übereinander, grau-blau bis braun',
      unterseite: 'weiße Lamellen, weit herablaufend',
      stiel: 'kurz, seitlich, oft fehlend',
      fleisch: 'weiß, zart'
    },
    standort: 'An liegendem oder stehendem Laubholz (Buche, Pappel, Weide).',
    zeiger: ['Frisch gefällte Buchen', 'Holzpolter'],
    wetter: { regen14: 15, tMin: -2, tMax: 10, frost: true,
      text: 'Winterpilz: Fruchtkörper nach Frostnächten (Kältereiz) bei Tauwetter.' },
    verwechslung: [
      { name: 'keine gefährlichen', gefahr: 'gut', unterschied: 'Muschelseitlinge sind harmlos. Im Winter ist die Auswahl klein – gut für Einsteiger.' }
    ],
    hinweise: 'Alte, zähe Ränder wegschneiden.'
  },
  {
    id: 'morchel', name: 'Speise-Morchel', latin: 'Morchella esculenta', gruppe: 'Schlauchpilz',
    essbar: 'bedingt', stufe: 2, schutz: true,
    monate: [3, 4, 5], haupt: [4],
    baeume: ['Esche', 'Ulme', 'Obstbaum', 'Pappel'], lebensraum: ['Auwald', 'Laubwald', 'Waldrand', 'Park/Wiese'], boden: 'kalk',
    merkmale: {
      hut: 'wabenartig mit unregelmäßigen Gruben, ocker- bis graubraun',
      unterseite: '–',
      stiel: 'weiß, körnig; Hut und Stiel bilden EINEN durchgehenden Hohlraum (Längsschnitt!)',
      fleisch: 'wachsartig, dünn'
    },
    standort: 'Auwälder, unter Eschen und alten Obstbäumen, Bärlauchflächen, kalkhaltige Böden, Rindenmulch.',
    zeiger: ['Bärlauch', 'Esche', 'Blühende Schlehe / Löwenzahn = Startsignal'],
    wetter: { regen14: 20, tMin: 8, tMax: 16, frost: false,
      text: 'Frühjahr: nach warmem Regen, wenn der Boden auf 8–12 °C kommt (Kirschblüte als Zeiger).' },
    verwechslung: [
      { name: 'Frühjahrs-Lorchel', gefahr: 'toedlich', unterschied: 'hirnartig gewunden (keine Waben), rotbraun, innen gekammert, unter Kiefern auf Sand.' }
    ],
    hinweise: 'Roh giftig – gut garen. Keine großen Mengen auf einmal (neurologische Beschwerden möglich).'
  },
  {
    id: 'mairitterling', name: 'Mai-Ritterling (Georgsritterling)', latin: 'Calocybe gambosa', gruppe: 'Lamellenpilz',
    essbar: 'gut', stufe: 2, schutz: false,
    monate: [4, 5, 6], haupt: [5],
    baeume: [], lebensraum: ['Park/Wiese', 'Waldrand'], boden: 'kalk',
    merkmale: {
      hut: 'weiß bis cremefarben, dickfleischig, Rand lange eingerollt',
      unterseite: 'Lamellen sehr eng, weißlich',
      stiel: 'kurz, kräftig, weiß',
      fleisch: 'weiß, fest; starker MEHL- bzw. Gurkengeruch'
    },
    standort: 'Wiesen, Hecken, Waldränder, Obstwiesen auf Kalk – oft in Hexenringen. Im Gäu gut möglich.',
    zeiger: ['Schlehen- und Weißdornhecken', 'Kalkmagerwiesen', 'ab Georgstag (23.04.)'],
    wetter: { regen14: 15, tMin: 8, tMax: 16, frost: false,
      text: 'Nach Frühlingsregen bei mildem Wetter.' },
    verwechslung: [
      { name: 'Ziegelroter Risspilz', gefahr: 'toedlich', unterschied: 'Hut kegelig, radial faserig-rissig, rötet bei Berührung, kein Mehlgeruch.' },
      { name: 'Weiße Trichterlinge', gefahr: 'giftig', unterschied: 'dünnfleischig, herablaufende Lamellen, gleiche Wiesen.' }
    ],
    hinweise: 'Geruchsprobe ist Pflicht.'
  }
];

const WARNKARTEN = [
  { id: 'gruenerknolli', name: 'Grüner Knollenblätterpilz', latin: 'Amanita phalloides', gefahr: 'toedlich',
    monate: [7, 8, 9, 10], erkennen: 'Hut olivgrün bis gelblich, Lamellen WEISS, Ring am Stiel, Knolle mit häutiger Scheide – oft im Boden versteckt (ausgraben!).',
    wo: 'Unter Eiche und Buche, Laub- und Mischwald.',
    warum: 'Verursacht die meisten tödlichen Pilzvergiftungen. Symptome erst 6–24 Std. später, dann trügerische Besserung, Leberversagen.',
    gegen: 'Champignon, Täublinge, Grünling' },
  { id: 'pantherpilz', name: 'Pantherpilz', latin: 'Amanita pantherina', gefahr: 'giftig',
    monate: [7, 8, 9, 10], erkennen: 'Brauner Hut mit reinweißen Flocken, Hutrand gerieft, Knolle mit scharfem Rand („Bergsteigersöckchen“), Ring ungerieft.',
    wo: 'Laub- und Nadelwald.', warum: 'Starkes Nervengift (Rausch, Krämpfe).', gegen: 'Perlpilz, Parasol' },
  { id: 'fliegenpilz', name: 'Fliegenpilz (Zeigerpilz)', latin: 'Amanita muscaria', gefahr: 'giftig',
    monate: [7, 8, 9, 10, 11], erkennen: 'Roter Hut mit weißen Flocken, weiße Lamellen, Ring, Knolle mit Warzengürteln.',
    wo: 'Unter Fichte und Birke.', warum: 'Giftig – aber ein guter Zeiger: gleiche Partnerbäume und Saison wie der Steinpilz.', gegen: 'Kaiserling (im Süden)' },
  { id: 'gifthaeubling', name: 'Gift-Häubling', latin: 'Galerina marginata', gefahr: 'toedlich',
    monate: [5, 6, 7, 8, 9, 10, 11], erkennen: 'Klein, honigbraun, büschelig an Holz, Sporenpulver rostbraun, Stiel unter dem Ring silbrig gerieft.',
    wo: 'Nadelholzstümpfe – oft direkt neben Hallimasch und Stockschwamm.', warum: 'Amatoxine wie der Knollenblätterpilz.', gegen: 'Hallimasch, Stockschwamm' },
  { id: 'raukopf', name: 'Spitzgebuckelter Raukopf', latin: 'Cortinarius rubellus', gefahr: 'toedlich',
    monate: [8, 9, 10, 11], erkennen: 'Orange- bis rotbraun, spitzer Buckel, Lamellen (keine Leisten!), Stiel mit gelben Gürteln, rostbraunes Sporenpulver.',
    wo: 'Feuchte, saure Nadelwälder – am Standort des Trompeten-Pfifferlings.',
    warum: 'Orellanin zerstört die Nieren; Symptome erst nach 2–20 Tagen.', gegen: 'Trompeten-Pfifferling, Pfifferling' },
  { id: 'lorchel', name: 'Frühjahrs-Lorchel', latin: 'Gyromitra esculenta', gefahr: 'toedlich',
    monate: [3, 4, 5], erkennen: 'Hut hirnartig gewunden, rotbraun, innen gekammert (nicht ein Hohlraum).',
    wo: 'Kiefernwälder auf Sand, Kahlschläge.', warum: 'Gyromitrin – schwere Leberschäden, schon Kochdämpfe sind gefährlich.', gegen: 'Morcheln' },
  { id: 'krempling', name: 'Kahler Krempling', latin: 'Paxillus involutus', gefahr: 'toedlich',
    monate: [6, 7, 8, 9, 10, 11], erkennen: 'Braun, Rand lange eingerollt und filzig, Lamellen herablaufend, bräunen bei Druck.',
    wo: 'Sehr häufig, v. a. bei Birke und Fichte.', warum: 'Früher als essbar geführt; kann nach wiederholtem Essen eine tödliche Immunreaktion auslösen.', gegen: 'Röhrlinge (von oben), Ritterlinge' },
  { id: 'satan', name: 'Satans-Röhrling', latin: 'Rubroboletus satanas', gefahr: 'giftig',
    monate: [7, 8, 9], erkennen: 'Hut weißgrau, Poren rot, Stiel bauchig mit rotem Netz, Fleisch blaut, alt Aasgeruch.',
    wo: 'Selten; warme Kalkböden unter Eiche/Buche (Gäu).', warum: 'Heftige Magen-Darm-Vergiftung.', gegen: 'Hexen-Röhrlinge, Steinpilz' },
  { id: 'gallen', name: 'Gallen-Röhrling', latin: 'Tylopilus felleus', gefahr: 'unge',
    monate: [6, 7, 8, 9, 10], erkennen: 'Sieht aus wie ein Steinpilz, aber Poren rosa, Stiel mit dunkelbraunem Netz, gallenbitter.',
    wo: 'Saure Nadelwälder – am Steinpilz-Standort.', warum: 'Nicht giftig, aber ein Exemplar macht das ganze Essen ungenießbar.', gegen: 'Steinpilz, Marone, Birkenpilz' },
  { id: 'risspilz', name: 'Ziegelroter Risspilz', latin: 'Inosperma erubescens', gefahr: 'toedlich',
    monate: [5, 6, 7], erkennen: 'Weißlich, Hut kegelig und radial eingerissen, rötet bei Berührung und im Alter.',
    wo: 'Parks, Laubwald auf Kalk – zur Zeit des Mai-Ritterlings.', warum: 'Hoher Muskaringehalt (Schweiß, Herz-Kreislauf).', gegen: 'Mai-Ritterling' }
];

const PILZ_REGELN = [
  'Nur essen, was zu 100 % sicher bestimmt ist. Diese App, Fotos und KI ersetzen keine Bestimmung.',
  'Im Zweifel zur Pilzberatung: Pilzsachverständige der DGfM (Liste auf dgfm-ev.de) prüfen kostenlos oder gegen kleine Spende.',
  'Vergiftungsverdacht: Giftnotruf Baden-Württemberg (Freiburg) 0761 19240, bei schweren Symptomen 112. Pilzreste und Putzabfälle aufbewahren.',
  'Ganze Pilze herausdrehen (Knolle!), nicht abschneiden, solange die Art nicht sicher ist. In Korb oder luftigem Beutel tragen, keine Plastiktüte.',
  'Sammeln nur für den eigenen Bedarf in kleinen Mengen (Faustregel ca. 1 kg pro Person und Tag). Geschützte Arten (Steinpilz, Pfifferling, Birkenpilz, Rotkappe, Morchel) ausdrücklich nur in geringer Menge.',
  'In Naturschutzgebieten (z. B. Teile des Schönbuchs) ist Sammeln oft verboten oder nur auf Wegen erlaubt – Schilder beachten.',
  'Schönbuch: meist saure Sandsteinböden (gut für Steinpilz, Marone, Pfifferling). Heckengäu westlich von Böblingen: Muschelkalk (Herbsttrompete, Semmel-Stoppelpilz, Mai-Ritterling, Satans-Röhrling).'
];

if (typeof module !== 'undefined') module.exports = { PILZKARTEN, WARNKARTEN, PILZ_REGELN };
