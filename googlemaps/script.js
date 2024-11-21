var opdracht_antwoord;

function get_number(){
  var opdracht_nummer = document.getElementById("opdracht_nummer").value;
  //console.log(opdracht_nummer);

  document.getElementById("opdracht_uitleg").innerHTML = "Hier komt de uitleg van de opdracht te staan.";
  document.getElementById("eigen_antwoord").value = "";
  document.getElementById("controle").innerHTML = "Het ingevulde antwoord is...";

  display_text(opdracht_nummer);
}

function get_answer(){
  var eigen_antwoord = document.getElementById("eigen_antwoord").value;
  var opdracht_nummer = document.getElementById("opdracht_nummer").value;
  //console.log(opdracht_nummer, eigen_antwoord);

  var check = document.getElementById("controle");

  if (opdracht_nummer != ""){
    if (eigen_antwoord == opdracht_antwoord){
      check.innerHTML = "Correct!";
    }else{
      check.innerHTML = "Incorrect.";
    }
  }
}

function display_text(nr){
  var uitleg = document.getElementById("opdracht_uitleg");
  //hier start Amsterdam
  if (nr == 1){
    uitleg.innerHTML = "Opdracht 1 - Amsterdam - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.369072,4.8946011,3a,75y,10.86h,73.44t/data=!3m6!1e1!3m4!1siki2Iu02oiEm4UMsvdGNOg!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je bent nu in Amsterdam.<br>Wat is de maximale breedte in meters voor een vaartuig om onder de brug rechts door te kunnen varen?";
    opdracht_antwoord = "3,50";
  }
  if (nr == 2){
    uitleg.innerHTML = "Opdracht 2 - Amsterdam - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3739764,4.8841927,3a,75y,223.22h,83.71t/data=!3m6!1e1!3m4!1sIXVRTEjyWKgb8yEFq5dYlA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Voor het winkeltje genaamd Jacks Vape & Gift staat een parkeerbord.<br>Wat zijn de eerste letters van de zeven regels op het witte bord?<br>Typ ze in als hoofdletters en aan elkaar.";
    opdracht_antwoord = "BCMEMPP";
  }
  if (nr == 3){
    uitleg.innerHTML = "Opdracht 3 - Amsterdam - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3746859,4.8978269,3a,75y,241.17h,90.54t/data=!3m6!1e1!3m4!1s-xIFNpZcCLB_VWnVoGpl8w!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je begeeft je nu in de straat langs De oude Kerk.<br>Ergens aanliggend aan deze straat bevind zich een café-bar, waarbij op de ramen van het terras stickers van voetballen zitten.<br>Wat is het derde item op het bord met de titel SMOKE & DRINK?<br>Typ de woorden in hoofdletters.";
    opdracht_antwoord = "SPECIAL BEERS";
  }
  if (nr == 4){
    uitleg.innerHTML = "Opdracht 4 - Amsterdam - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3693383,4.9017949,3a,75y,221.98h,96.33t/data=!3m6!1e1!3m4!1s4vJfbz75T8sbEmn9t0bf-g!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Hier vlakbij staat de Grenspaal. Op het voetstuk staat op twee kanten wat informatie gegraveerd.<br>Als je naar de tekst kijkt, met op de achtergrond de Academie voor theater en Dans, wat is dan de letter die wordt aangewezen door het onkruid?<br>Typ één hoofdletter.";
    opdracht_antwoord = "T";
  }
  if (nr == 5){
    uitleg.innerHTML = "Opdracht 5 - Amsterdam - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3710594,4.9147379,3a,75y,7.92h,95.78t/data=!3m6!1e1!3m4!1smAJodG4lkud-6Tz9D1Ed2A!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Er is één hoofdingang bij Het Scheepvaartmuseum.<br>Hoeveel vlakken zitten er in totaal op de bijbehorende paneeldeuren wanneer deze gesloten zijn?";
    opdracht_antwoord = "8";
  }
  if (nr == 6){
    uitleg.innerHTML = "Opdracht 6 - Amsterdam - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3746785,4.9109219,3a,75y,114.95h,89.72t/data=!3m6!1e1!3m4!1sdxKaJyGLrimwLf_1KRXFkw!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je staat op een brug met een mooi uitzicht op het NEMO science museum.<br>Op welk moment moet men deze brug vrijmaken?";
    opdracht_antwoord = "bij belsignaal";
  }
  if (nr == 7){
    uitleg.innerHTML = "Opdracht 7 - Amsterdam - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.361874,4.922382,3a,47.1y,288.74h,82.54t/data=!3m8!1e1!3m6!1sAF1QipNCIyulRktTo9mr1zA4KPpYwV6NlQJ75eEvhBQ5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNCIyulRktTo9mr1zA4KPpYwV6NlQJ75eEvhBQ5%3Dw203-h100-k-no-pi0-ya227.27115-ro-0-fo100!7i8704!8i4352" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je kijkt nu naar een foto gemaakt door een 360-graden-camera.<br>In deze kamer staat een witte kast, welk jaartal is te vinden in een van de vakken?";
    opdracht_antwoord = "2017";
  }
  if (nr == 8){
    uitleg.innerHTML = "Opdracht 8 - Amsterdam - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.372974,4.8724006,3a,75y,59.05h,81.86t/data=!3m6!1e1!3m4!1sgxV9lt4pWOu0EoCafuc32g!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Tegenover Oya's Childcare ligt een donkerblauwe woonboot in het water.<br>Wat is de kleur van de gieter die op het dak staat?";
    opdracht_antwoord = "oranje";
  }
  if (nr == 9){
    uitleg.innerHTML = "Opdracht 9 - Amsterdam - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3722193,4.9225344,3a,57.6y,280.03h,83.13t/data=!3m6!1e1!3m4!1slb6qEwWoy9soVBP3xHqfkA!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Beginnend bij de doodlopende straat, hoeveel lange gele strepen zijn er nog duidelijk te zien op de vier opeenvolgende verkeersdrempels?<br>Ga met de klok mee. Een voorbeeldantwoord is 4,7,0,5";
    opdracht_antwoord = "1,4,7,0";
  }
  if (nr == 10){
    uitleg.innerHTML = "Opdracht 10 - Amsterdam - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3838857,4.9031642,3a,75y,268.35h,114.99t/data=!3m6!1e1!3m4!1sPmLCyGn4MxjPHZfRjv-ALg!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Wat is het merk van de blauwe hoogwerker?<br>Typ het woord in hoofdletters.";
    opdracht_antwoord = "GUNCO";
  }
  if (nr == 11){
    uitleg.innerHTML = "Opdracht 11 - Amsterdam - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.373699,4.9024814,3a,75y,97.46h,76.21t/data=!3m6!1e1!3m4!1snhgrwI1s2Fx69rpSvUo7YQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat bevind zich een restaurant waar je onbeperkt tapas kan eten.<br>Welke kleur heeft de container met de gele deksel die staat voor dit restaurant met de naam La Cubanita?";
    opdracht_antwoord = "groen";
  }
  if (nr == 12){
    uitleg.innerHTML = "Opdracht 12 - Amsterdam - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.35746,4.8759416,3a,75y,249.47h,79.46t/data=!3m6!1e1!3m4!1syx_9EZdsQUb0v1rlsZxR5A!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat bevindt zich op de begane grond van een huis een makelaarsbedrijf, genaamd De Graaf & Groot Makelaars V.O.F. Het heeft donkerblauwe bakstenen.<br>Aan de linkerkant van de middelste deur hangt een grijs kastje, waarschijnlijk de deurbel met luidsprekertje en microfoontje.<br>Eronder hangt een donkergrijs, rechthoekig staafje. Hierop zitten twee lichtjes.<br>Welke kleuren hebben deze lichtjes?<br>Een voorbeeldantwoord is 'groen en geel'.";
    opdracht_antwoord = "rood en blauw";
  }
  //hier stopt Amsterdam
  //tijd bij poging: 08:04
  //hier start Berlijn
  if (nr == 13){
    uitleg.innerHTML = "Opdracht 13 - Berlijn - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5182861,13.3708363,3a,75y,168.19h,81.48t/data=!3m6!1e1!3m4!1sFitwfd6g33ZXQVcjsECmyw!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je bent nu in Duitsland. Aan de andere kant van de weg rijdt een Berlin city tour bus. Hoeveel minuten krijg je met hun persoonlijke gids?";
    opdracht_antwoord = "105";
  }
  if (nr == 14){
    uitleg.innerHTML = "Opdracht 14 - Berlijn - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5162802,13.3794634,3a,90y,272.87h,99.45t/data=!3m6!1e1!3m4!1sAF1QipMLPLqRD3eMWPwg2VvW7oOdG-oq9tQ8BG4M9I1K!2e10!7i5376!8i2688" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Hoeveel paarden staan er op de Brandenburger Tor?";
    opdracht_antwoord = "4";
  }
  if (nr == 15){
    uitleg.innerHTML = "Opdracht 15 - Berlijn - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5210189,13.4069694,3a,75y,311.76h,76.77t/data=!3m6!1e1!3m4!1s3KkyYmlvgMcgL3UecMDgOw!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Hoe vaak staat de groene letter X afgebeeld boven de meubelwinkel Bambus Dreams?";
    opdracht_antwoord = "10";
  }
  if (nr == 16){
    uitleg.innerHTML = "Opdracht 16 - Berlijn - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.4585518,13.4785779,3a,75y,55.47h,74.22t/data=!3m6!1e1!3m4!1sDIQU0PB2Tvzb46HNvZ73mQ!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Aan beide kanten van deze brugen zijn driehoeken voor stevigheid aangebracht.<br>Aan de kant waar de ingang is naar Gasthaus Waldengrund, in de derde driehoek, op de verticale balk met H-profiel<br>is aan de linkerbinnenkant een aantal dikgedrukte, witte letters met graffiti geschreven.<br>Welke letters zijn dit, van boven naar beneden gelezen?<br>Typ de letters in hoofdletters.";
    opdracht_antwoord = "DSM";
  }
  if (nr == 17){
    uitleg.innerHTML = "Opdracht 17 - Berlijn - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5123077,13.4187285,3a,75y,312.92h,91.95t/data=!3m6!1e1!3m4!1sNPF_anYwNg_JzJbDgAl7oA!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat staat een beige gebouw waarbij de onderste meter rood geschilderd is.<br>Tegen de muur van dit gebouw staat een kastje met daarin een busje, een doosje en een flesje.<br>Wat is de kleur die het kastje alleen aan de voorkant heeft?";
    opdracht_antwoord = "groen";
  }
  if (nr == 18){
    uitleg.innerHTML = "Opdracht 18 - Berlijn - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5015219,13.4183891,3a,75y,323.28h,83.58t/data=!3m6!1e1!3m4!1sXdPGhzI88z4N-f2fuqauMA!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Welk product heeft veertig procent korting in de kledingwinkel met een rood met wit gestreept zonnescherm?<br>Typ het woord in hoofdletters.";
    opdracht_antwoord = "JEANS";
  }
  if (nr == 19){
    uitleg.innerHTML = "Opdracht 19 - Berlijn - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.4989798,13.3803026,3a,89.2y,239.91h,73.39t/data=!3m6!1e1!3m4!1sBGjLX9wEVXJYSqtdgSzSIA!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Door bij het kruispunt rechtsaf te slaan kom je terecht bij het Deutsches Technikmuseum Berlin.<br>Boven het dak van het gebouw hangt een vliegtuig wat beter te zien is als je dichterbij staat.<br>Vlakbij staat een verkeerspaal, met een driehoekig en een rond bord.<br>Wat is de kleur van de sticker rechtsboven op de achterkant van het driehoekige verkeersbord?";
    opdracht_antwoord = "rood";
  }
  if (nr == 20){
    uitleg.innerHTML = "Opdracht 20 - Berlijn - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5328202,13.3807978,3a,87.4y,109.28h,86.86t/data=!3m6!1e1!3m4!1sAF1QipPE7l40K9VPamdxbPWUCfARAhZUD6ou8WedcXRR!2e10!7i8192!8i4096" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Wat is de hoogste verdieping van dit gebouw?";
    opdracht_antwoord = "6";
  }
  if (nr == 21){
    uitleg.innerHTML = "Opdracht 21 - Berlijn - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5256027,13.387501,3a,75y,28.44h,78.56t/data=!3m6!1e1!3m4!1sMjP9Q-t-tkEtoxcE1LeOxw!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Hoeveel houten tonnen staan er voor de ingang van het Romeinse restaurant Trattoria Peretti?";
    opdracht_antwoord = "4";
  }
  if (nr == 22){
    uitleg.innerHTML = "Opdracht 22 - Berlijn - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5025807,13.3258718,3a,75y,112.75h,89.32t/data=!3m6!1e1!3m4!1sjMF4rxnvTIFl_64jv5Qv3Q!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan. Wat is de tijd van opname?<br>Het antwoord is afgerond per 5 minuten. Een voorbeeldantwoord is 09:45";
    opdracht_antwoord = "12:05";
  }
  if (nr == 23){
    uitleg.innerHTML = "Opdracht 23 - Berlijn - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.4971334,13.3236395,3a,75y,302.08h,102.89t/data=!3m6!1e1!3m4!1sodVAvHX3YqhhPK6mzS8o-g!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat is een wijnwinkeltje, Weinstube & Vinothek.<br>Achter het raam liggen een aantal gelijkvormige wijnflessen gepresenteerd. Hoeveel zijn dit er?<br>";
    opdracht_antwoord = "5";
  }
  if (nr == 24){
    uitleg.innerHTML = "Opdracht 24 - Berlijn - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@52.5079841,13.4092641,3a,89.1y,245.09h,85.12t/data=!3m6!1e1!3m4!1s4QkHzS4kK7wciReopnhMRw!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Naast het witte gebouw van Berolina loopt een smal, stenen wandelpad.<br>Ervoor staat een lantaarnpaal. Welk nummer heeft deze lantaarnpaal?";
    opdracht_antwoord = "10";
  }
  //hier stopt Berlijn
  //tijd bij poging: 08:07
  //hier start Parijs
  if (nr == 25){
    uitleg.innerHTML = "Opdracht 25 - Parijs - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8522573,2.3469397,3a,75y,49.95h,91.61t/data=!3m6!1e1!3m4!1sh4wC1PcNHYmq3_XSG5TgIg!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je bent nu in Parijs. Vanuit deze straat kan je de Notre-Dame zien.<br>Op nummer 10 staat er in de etalage een quote van een Amerikaanse schrijver.<br>Wat is de naam van deze schrijver?<br>Geef de voor- en achternaam. Een voorbeeldantwoord is Saul Bellow.";
    opdracht_antwoord = "James Baldwin";
  }
  if (nr == 26){
    uitleg.innerHTML = "Opdracht 26 - Parijs - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8466997,2.3449679,3a,75y,111.43h,96.16t/data=!3m6!1e1!3m4!1sEyxyelw3W3oo7rAql7UozQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Naast het Panthéon liggen een heleboel stenen op bakstenen. Één ervan is erg kleurrijk.<br>Dit komt omdat er allemaal gekleurde vakjes opstaan met het woord 'liefde' in verschillende talen.<br>Wanneer je het Panthéon op de achtergrond hebt, welke woord staat er op het oranje vakje wat vanaf linksboven drie naar rechts en drie naar beneden is?<br>Noteer je antwoord in hoofdletters.";
    opdracht_antwoord = "AMORE";
  }
  if (nr == 27){
    uitleg.innerHTML = "Opdracht 27 - Parijs - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8535887,2.3363667,3a,75y,231.96h,78.21t/data=!3m6!1e1!3m4!1s83ILndR55oGIRSbu5w1Bww!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat bevindt zich het turquoise gekleurde Hôtel Artus. Ervoor staan twee boompjes in bakken.<br>Welke letter staat er op het bordje achter het linkerboompje?<br>Noteer het antwoord in hoofdletters.";
    opdracht_antwoord = "H";
  }
  if (nr == 28){
    uitleg.innerHTML = "Opdracht 28 - Parijs - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8535735,2.3379537,3a,75y,186.83h,100.85t/data=!3m6!1e1!3m4!1spNbNwnauAwjL7Wj121_4Lw!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat staat het pizzarestaurant Pizzeria Pepone. Het restaurant heeft ook een uithangbord.<br>Een gedeeltelijke reflectie hiervan is te zien in het raam waarboven drie lantaarns hangen.<br>Welke letter(s) is/zijn te lezen?<br>Noteer het antwoord van boven naar beneden in hoofdletters.";
    opdracht_antwoord = "A";
  }
  if (nr == 29){
    uitleg.innerHTML = "Opdracht 29 - Parijs - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8615284,2.3420665,3a,88.7y,293.45h,74.96t/data=!3m6!1e1!3m4!1sMIp79cFHSs1V7ASRkOS5NQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Langs deze straat staat een donkergrijs gekleurde chocolade patisserie.<br>Op het raam zijn aan de randen allemaal blaadjes aangebracht. Hoeveel zijn dit er?";
    opdracht_antwoord = "12";
  }
  if (nr == 30){
    uitleg.innerHTML = "Opdracht 30 - Parijs - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@48.874237,2.3283998,3a,89.5y,24.73h,104.24t/data=!3m6!1e1!3m4!1sNleP6fCFsEgMOwvI56WaPA!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Op de voorgevel van twee van de vier hoekgebouwen staan twee woorden.<br>De tweede is PRINTEMPS, wat lente betekent. Wat is het eerste woord?<br>Noteer je antwoord in hoofdletters.";
    opdracht_antwoord = "AU";
  }
  if (nr == 31){
    uitleg.innerHTML = "Opdracht 31 - Parijs - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8489253,2.3770755,3a,75y,112.15h,87.08t/data=!3m6!1e1!3m4!1sZm6I4obBjpC5HE38DB5AWQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Aan dit kruispunt is een restaurant met de naam Le-Penty.<br>Buiten staan wat ronde tafeltjes met een lichtblauwe print erop. Welk woord is op de bovenkant te lezen?<br>Noteer je antwoord in hoofdletters.";
    opdracht_antwoord = "NOEL";
  }
  if (nr == 32){
    uitleg.innerHTML = "Opdracht 32 - Parijs - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8836308,2.3383782,3a,75y,322.1h,82.54t/data=!3m6!1e1!3m4!1si2_7k8M-vMJsDwTTpycCLQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In dit straatje is op een plek op de muur een aantal kleurrijke molletjes geplakt.<br>Het lijkt op de 'diglett' van Pokémon. Hoeveel zijn dit er?";
    opdracht_antwoord = "10";
  }
  if (nr == 33){
    uitleg.innerHTML = "Opdracht 33 - Parijs - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@48.877357,2.313793,3a,75y,98.16h,93.78t/data=!3m6!1e1!3m4!1sb_xUZLgHM1U75tT1v-lmqw!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Aan de ene kant van deze straat staat een gebouw met heel veel ramen. de muur is in vakken verdeeld van 4 bij 8 ramen.<br>Rechts beginnend, het eerste vak meegerekend, hoeveel ramen staan er in het 5de vak open?";
    opdracht_antwoord = "3";
  }
  if (nr == 34){
    uitleg.innerHTML = "Opdracht 34 - Parijs - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@48.860481,2.3180731,3a,75y,22.66h,86.68t/data=!3m6!1e1!3m4!1smMgMqyaVdLUMo8q3D1Attg!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Hoeveel vlaggen hangen er in totaal aan het Assemblée Nationale?";
    opdracht_antwoord = "14";
  }
  if (nr == 35){
    uitleg.innerHTML = "Opdracht 35 - Parijs - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8534181,2.2955965,3a,75y,287.16h,82.23t/data=!3m6!1e1!3m4!1slU8OcVsdR3904umoK6Jhcg!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In de etalage van het autobedrijf Volkswagen staan een aantal autootjes gepresenteerd waaronder een wit met blauw busje.<br>Hoeveel raampjes heeft dit busje aan de zijkant, de grote voorruit niet meegerekend?";
    opdracht_antwoord = "3";
  }
  if (nr == 36){
    uitleg.innerHTML = "Opdracht 36 - Parijs - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@48.8508765,2.3592572,3a,90y,91.93h,89.3t/data=!3m6!1e1!3m4!1scsEmRSws2djfmHMyoGneYw!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat zijn er twee huizen met een blauwe deur.<br>Wat is het huisnummer waarbij de blauwe deur zonder deurklopper hoort?";
    opdracht_antwoord = "4";
  }
  //hier stopt Parijs
  //tijd bij poging: 6:17
  //hier start Rome
  if (nr == 37){
    uitleg.innerHTML = "Opdracht 37 - Rome - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8995457,12.4691192,3a,75y,99.94h,80.55t/data=!3m6!1e1!3m4!1sc1Nm0CbjIPqmvbssYcHW2w!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je bent nu in Rome. In deze straat staat een winkeltje met de naam Vivo Market.<br>Voor de deur staan een aantal groene manden opgestapeld. Hoeveel zijn dit er?";
    opdracht_antwoord = "3";
  }
  if (nr == 38){
    uitleg.innerHTML = "Opdracht 38 - Rome - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@41.9038327,12.4844122,3a,75y,110.8h,91.68t/data=!3m6!1e1!3m4!1sK_QNgE1uiShIaGU-1egcvg!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>A. Annelife P. is de naam van de kledingwinkel die staat in de straat met heel veel scooters geparkeerd aan de linkerkant van de weg.<br>De voorgevel bestaat uit drie ramen met tralie ervoor en twee pilaren. welk kledingstuk is geschreven op de rechterpilaar?<br>Noteer je antwoord in hoofdletters.";
    opdracht_antwoord = "SHOES";
  }
  if (nr == 39){
    uitleg.innerHTML = "Opdracht 39 - Rome - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@41.9077001,12.4598867,3a,90y,159.33h,82.47t/data=!3m6!1e1!3m4!1sAAvqhEmIAAbRdyZ15H2ePA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Op het beige/roze gekleurde gebouw met zeven verdiepingen zit een bord met de tekst 'Oro Argento Diamanti'.<br>Aan de rechterkant op de muur van de deur die aan de linkerkant van het bord staat is een bloemvormig rooster te zien.<br>Hoeveel 'blaadjes' heeft rooster?";
    opdracht_antwoord = "8";
  }
  if (nr == 40){
    uitleg.innerHTML = "Opdracht 40 - Rome - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8982569,12.469393,3a,90y,199.35h,96.57t/data=!3m6!1e1!3m4!1sjGf3t-UfcU5Lks-0GQYfsg!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>De naam van de boog of doorgang onder het gebouw van Farmacia Langeli staat op de muur geschreven in de doorgang.<br>Wat is het derde woord van de naam? Noteer je antwoord in hoofdletters.";
    opdracht_antwoord = "CHIESA";
  }
  if (nr == 41){
    uitleg.innerHTML = "Opdracht 41 - Rome - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8905651,12.484369,3a,75y,32.37h,101.91t/data=!3m6!1e1!3m4!1sILt62h8w3mGO1S9s_dBHFQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat staan een vijftal huizen die de natuur deels heeft overwoekerd.<br>Aan de rechterkant voor de vijf huizen staat een grijs fonteintje wat lijkt op een brandkraan.<br>Op de voorkant van het fonteintje is een klein plaatje met de letters PS. Welke kleur heeft dit plaatje?";
    opdracht_antwoord = "wit";
  }
  if (nr == 42){
    uitleg.innerHTML = "Opdracht 42 - Rome - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8292446,12.4854484,3a,75y,92.11h,78.18t/data=!3m6!1e1!3m4!1s43sdy_ivgo-Zsjz4HyELKA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Bij nummer 26 staan twee verkeersborden.<br>Als je tussen de twee stopborden gaat staan zie je in de reflectie van twee kleine plassen een aantal spijlen van het hek.<br>Tel de spijlen per plas bij elkaar op. Wat is de uitkomst van de keersom van de twee plassen?";
    opdracht_antwoord = "24";
  }
  if (nr == 43){
    uitleg.innerHTML = "Opdracht 43 - Rome - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8150634,12.4910858,3a,82.3y,282.61h,69.9t/data=!3m6!1e1!3m4!1sm0k7xsmITGOeIqt8qL-Qew!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Op de hoek staat een restaurant. Welke bloem vervangt de letter o in Ristorante Girasole?";
    opdracht_antwoord = "zonnebloem";
  }
  if (nr == 44){
    uitleg.innerHTML = "Opdracht 44 - Rome - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8245465,12.5033904,3a,90y,268.16h,91.34t/data=!3m6!1e1!3m4!1s7uoBL99t_zBynB_5590yIA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Voor de bouwmarkt met de naam ferramenta elettricità staat een rek met aardewerk potten.<br>Hoeveel langwerpige objecten staan er opgestapeld op de bovenste plank?";
    opdracht_antwoord = "7";
  }
  if (nr == 45){
    uitleg.innerHTML = "Opdracht 45 - Rome - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8901475,12.4906549,3a,90y,103.99h,98.27t/data=!3m7!1e1!3m5!1sAF1QipPwSbH6KXWSs0SqZmpue0TWumzZCOfACcpNC5v1!2e10!3e11!7i8704!8i4352" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Hoeveel gaten zitten er in het plafond van de middelste boog in Arco di Costantino?";
    opdracht_antwoord = "4";
  }
  if (nr == 46){
    uitleg.innerHTML = "Opdracht 46 - Rome - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@41.9008112,12.4830846,3a,90y,63.42h,101.49t/data=!3m6!1e1!3m4!1sFifmOgo-r44xByXYgr2vaw!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Tegenover Fontana di Trevi staat een gebouw met muurankers.<br>Noteer het nummer wat er bij de rechteronderste staat achterstevoren.";
    opdracht_antwoord = "39";
  }
  if (nr == 47){
    uitleg.innerHTML = "Opdracht 47 - Rome - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@41.9576276,12.415681,3a,90y,49.51h,62.98t/data=!3m6!1e1!3m4!1sBpy95e9-U_xlOmrjz-JMcg!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Ga de doodlopende straat in totdat je niet verder kan. Aan de rechterkant bij huisnummer 44 hangen er vijf brievenbussen naast elkaar.<br>Welke vorm heeft de meest linker brievenbus? Noteer een verkleinwoord zonder hoofdletters.";
    opdracht_antwoord = "vogelhuisje";
  }
  if (nr == 48){
    uitleg.innerHTML = "Opdracht 48 - Rome - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@41.8985045,12.472938,3a,75y,7.82h,95.78t/data=!3m6!1e1!3m4!1sC-qpjaLmnTCFKu2UBCCrTg!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Welk dier staat er onder de vierstromenfontein op het plein genaamd Piazza Navona?<br>Noteer het antwoord zonder hoofdletters.";
    opdracht_antwoord = "paard";
  }
  //hier stopt Rome
  //tijd bij poging: 6:44
  //hier start Madrid
  if (nr == 49){
    uitleg.innerHTML = "Opdracht 49 - Madrid - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4315892,-3.6722626,3a,75y,97.32h,98.79t/data=!3m6!1e1!3m4!1sWPaA9l2WYaCvKwcnDOtG0Q!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je bent nu in Madrid. Op de hoek staat de bank Sabadell.<br>Wat is de uitkomst van álle sleutels die op het raam zijn geplakt bij elkaar opgeteld?";
    opdracht_antwoord = "16";
  }
  if (nr == 50){
    uitleg.innerHTML = "Opdracht 50 - Madrid - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4428424,-3.6797336,3a,75y,247.85h,100t/data=!3m6!1e1!3m4!1sz_4rPfJkeMYSvjItwdYW2w!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat staat Dackel Bar Café, een bar of café met een rode muur.<br>Onder een airco en een enorme chaotische massa van elettriciteitsdraden hangt een zwart vierkant bord aan de muur met witte letters.<br>Wat staat er op? Noteer het antwoord aan elkaar en in hoofdletters.";
    opdracht_antwoord = "LICÜIDLAB";
  }
  if (nr == 51){
    uitleg.innerHTML = "Opdracht 51 - Madrid - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@40.3769577,-3.6999091,3a,75y,245.23h,61.3t/data=!3m6!1e1!3m4!1srfvRnjuPRF4D-AoFF4uhRQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Welke reeks cijfers staat er op de deur van de achterste taxi in de rij?";
    opdracht_antwoord = "07786";
  }
  if (nr == 52){
    uitleg.innerHTML = "Opdracht 52 - Madrid - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@40.379695,-3.6760811,3a,75y,234.75h,97.36t/data=!3m6!1e1!3m4!1s6MqbubJhuk651LTeIekhwA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In het gebouw met de glazen hoek en een rood uithangbord met de letter M zit het restaurant genaamd La Parada.<br>Naast de ingang staat er een heleboel graffiti op de muur.<br>Van welk woord staat de eerste letter achter de laatse A van 'AROA?<br>Noteer het woord in hoofdletters en negeer de eerste letter.";
    opdracht_antwoord = "EGALOS";
  }
  if (nr == 53){
    uitleg.innerHTML = "Opdracht 53 - Madrid - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4196927,-3.6887077,3a,90y,47.54h,101.68t/data=!3m6!1e1!3m4!1sDUZrHOLhAuKJOFSEFmfVOg!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Op de voorkant en achterkant van de poort Puerta de Alcalá staat een Romeins getal.<br>Noteer het getal in arabische nummers. Hieronder de legenda:<br>M=1000, D=500, C=100, L=50, X=10, V=5, I=1";
    opdracht_antwoord = "1778";
  }
  if (nr == 54){
    uitleg.innerHTML = "Opdracht 54 - Madrid - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4151541,-3.7148084,3a,90y,30.92h,115.08t/data=!3m6!1e1!3m4!1suFQENsvoTTrJ_cPLbl9ljw!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Welke kleur hebben de strepen die de parkeerplaatsen aanduiden?";
    opdracht_antwoord = "groen";
  }
  if (nr == 55){
    uitleg.innerHTML = "Opdracht 55 - Madrid - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4325087,-3.7132105,3a,90y,120.13h,88.85t/data=!3m6!1e1!3m4!1slrKx692Eu4F5_oVnYyI7WQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat is een winkeltje waar je je motorfiets kunt laten repareren.<br>Het is rood-wit geschilderd. Welke naam heeft dit bedrijfje?<br>Noteer twee woorden en noteer je antwoord in hoofdletters.";
    opdracht_antwoord = "MOTO MOTOR";
  }
  if (nr == 56){
    uitleg.innerHTML = "Opdracht 56 - Madrid - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4129325,-3.68014,3a,90y,49.55h,82.47t/data=!3m6!1e1!3m4!1s0GnacCN9NMg3A4RQJHudDw!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Op de rand van dit pleintje in het park met de naam Parque del Buen Retiro staat een boom met een flink stuk van de schors er af.<br>Deze boom staat naast een van de vier paden die aansluiten op dit pleintje. Naast het pad rechts van het eerst genoemde pad staat nog een boom.<br>Met hoeveel draden wordt de tak omhoog gehouden die aan deze boom zit?";
    opdracht_antwoord = "3";
  }
  if (nr == 57){
    uitleg.innerHTML = "Opdracht 57 - Madrid - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4535651,-3.686831,3a,90y,254.47h,107.81t/data=!3m6!1e1!3m4!1sb1tglM72myywwCQwE8cTgA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Aan deze straat ligt het voetbalstadion Estadio Santiago Bernabéu. Ertegenaan staan simpel gezet een vierkante en een ronde toren.<br>Tussen deze twee torens is een ingang met daarboven een bord met felle groene tekst. Wat zijn de laatste drie uit-twee-cijfers-bestaande getallen?<br>Noteer de drie getallen met telkens een komma ertussen. Een voorbeeldantwoord is 35,28,58";
    opdracht_antwoord = "22,11,44";
  }
  if (nr == 58){
    uitleg.innerHTML = "Opdracht 58 - Madrid - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4300875,-3.6796831,3a,90y,325.95h,76.16t/data=!3m6!1e1!3m4!1sjq1a6ZrrSmO2yzT8wChlbA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Bij de vier uitgangen van deze rotonde zijn vreemde zebrapaden.<br>Aanliggend op de stoep liggen stoeptegels met noppen erop voor blinden.<br>Hoeveel noppen zijn er in totaal op één zo'n vierkante tegel aangebracht?<br>Er zijn twee soorten noppenstoeptegels, kies degene met de minste noppen.";
    opdracht_antwoord = "64";
  }
  if (nr == 59){
    uitleg.innerHTML = "Opdracht 59 - Madrid - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@40.393915,-3.6636422,3a,75y,359.55h,90.97t/data=!3m6!1e1!3m4!1smN_fArTilX9KKa_QX33Oxw!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je bent nu in een piepklein straatje. Wat is het laatste woord van de respectievelijke straatnaam?<br>Noteer je antwoord in hoofdletters.";
    opdracht_antwoord = "UNCITI";
  }
  if (nr == 60){
    uitleg.innerHTML = "Opdracht 60 - Madrid - Moeilijkheidsgraad 1:<br>Klik " + '<a href="https://www.google.nl/maps/@40.3759576,-3.763576,3a,90y,75.4h,72.58t/data=!3m6!1e1!3m4!1saygFUiEjym7Zn0UCxXyYUA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Welke kleur heeft de vierkante 'LOS GEMELOS'-afvalzak aan het einde van deze straat met een zigzag?";
    opdracht_antwoord = "roze";
  }
  //hier stopt Madrid
  //tijd bij poging: 8:41
  //hier staat de uitlegvraag, de bonusvraag en nog wat
  if (nr == 0){
    uitleg.innerHTML = "Opdracht 0 - Londen - Moeilijkheidsgraad 2:<br>Klik " + '<a href="https://www.google.nl/maps/@51.5132623,-0.1058754,3a,90y,87.82h,77.89t/data=!3m6!1e1!3m4!1sLc1w2tWa_DLNkrhg-ffhdA!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>In deze straat is aan de rechterkant een inkeping in het gebouw, een nooduitgang.<br>Hoeveel knoppen zijn er op het grijze plaatje naast het rode 'Dry Riser Inlet'-kastje?";
    opdracht_antwoord = "11";
  }
  if (nr == 61){
    uitleg.innerHTML = "Opdracht 61 - Madrid - Moeilijkheidsgraad 4:<br>Klik " + '<a href="https://www.google.nl/maps/@40.4132676,-3.7074154,3a,75y,134.37h,100.5t/data=!3m6!1e1!3m4!1sGOPMj-0Ha1jHvgZs6JVeWQ!2e0!7i16384!8i8192" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Beweeg de camera niet, dit is een zoekplaatje.<br>Wat wijst de paal van het stoplicht aan?<br>Noteer een verkleinwoord."
    opdracht_antwoord = "kruisje";
  }
  if (nr == 69 || nr == 420){
    uitleg.innerHTML = "Nice ;)";
    opdracht_antwoord = "noice";
  }

  if (nr == "pi" || nr == "π" || nr == "e"){
    uitleg.innerHTML = "Opdracht 3 - Amsterdam - Moeilijkheidsgraad 3:<br>Klik " + '<a href="https://www.google.nl/maps/@52.3746859,4.8978269,3a,75y,241.17h,90.54t/data=!3m6!1e1!3m4!1s-xIFNpZcCLB_VWnVoGpl8w!2e0!7i13312!8i6656" target="_blank">hier</a>' + " om naar de Google Maps locatie te gaan.<br>Je begeeft je nu in de straat langs De oude Kerk.<br>Ergens aanliggend aan deze straat bevind zich een café-bar, waarbij op de ramen van het terras stickers van voetballen zitten.<br>Wat is het derde item op het bord met de titel SMOKE & DRINK?<br>Typ de woorden in hoofdletters.";
    opdracht_antwoord = "SPECIAL BEERS";
  }
}

//Amsterdam, Berlijn, Parijs, Rome, Madrid
//1-12, 13-24, 25-36, 37-48, 49-60
//8:04, 8:07, 6:17, 6:44, 8:41
//60 vragen, 12 per hoofdstad, 3 moeilijkheidsgraden
//
//(
//moeilijkheidsgraad is respectievelijk 1, 2 of 3 punten waard
//laatste vraag (61) is 5 punten waard
//
//iedereen, in teams, samenwerken tot laatste vraag
//team mag maar aan 1 vraag tegelijkertijd werken
//
//je moet 1min wachten tot volgende poging qua beantwoording
//
//tabel:
//eerste kolom: alle vragen (opdrachtnummers), moeilijkheidsgraden (punten), antwoorden?
//tweede kolom: welk team het goede antwoord heeft
//laatste regel optelsom
//)
