# CV-portfoliosivun laadunvarmistuksen testisuunnitelma

| Kenttä | Arvo |
|--------|------|
| **Projekti** | CV-portfolio (QA-painotteinen) |
| **Versio** | 0.1.0 |
| **Laatija** | _Nimesi_ |
| **Päivämäärä** | _VVVV-KK-PP_ |
| **Tila** | Luonnos / aktiivinen |
| **Viite** | `docs/test-cases.md`, `docs/test-summary-report.md` |

---

## 1. Projektin tavoite

Tämän projektin tavoitteena on varmistaa, että henkilökohtainen CV-portfoliosivusto toimii luotettavasti, saavutettavasti ja laadukkaasti ohjelmistotestaajan / QA-asiantuntijan työnhakua varten. Sivusto ei ole pelkkä esittelysivu — se on **testattava tuote**, jonka laadunvarmistus on dokumentoitu ja toistettavissa.

Testauksen päätavoitteet:

- Varmistaa keskeisten käyttäjäpolkujen toimivuus (navigointi, sisällön esittäminen, yhteydenotto, CV-lataus).
- Todentaa yhteydenottolomakkeen validointi sekä käyttöliittymässä että API-tasolla.
- Rakentaa ja ylläpitää automaatiotestejä (UI, API) sekä CI-putkea.
- Suorittaa saavutettavuus- ja kevyen kuormitustestauksen perustason arviointi.
- Tuottaa ammattimaiset QA-artefaktit (testisuunnitelma, testitapaukset, virheraportit, yhteenvetoraportti), jotka voidaan esitellä työnhaussa.

---

## 2. Testattava kohde

**Tuote:** Yhden sivun CV-portfolio (Next.js 14, TypeScript)  
**Arkkitehtuuri:** Frontend + API-reitti yhteydenottolomakkeelle  
**Sijainti repossa:** `src/`, `public/`, `tests/`, `docs/`

### Pääosat

| Osa | Kuvaus | Sijainti |
|-----|--------|----------|
| Etusivu / Hero | Johdanto, CTA-linkit | `#home` |
| Tietoa minusta | Esittelyteksti | `#about` |
| Taidot | QA-painotteiset osaamisryhmät | `#skills` |
| QA-portfolio | Testausartefaktien esittely | `#qa-testing` |
| Projektit | Projektikortit | `#projects` |
| CV | PDF-lataus, LinkedIn-linkki | `#cv` |
| Yhteystiedot | Lomake (nimi, sähköposti, viesti) | `#contact` |
| API | `POST /api/contact` | `src/app/api/contact/route.ts` |

### Lisätoiminnot

- Tumma / vaalea teema (`localStorage`)
- Kielivalinta FI/EN (käyttöliittymäpaikkamerkki, sisältö ei vielä käännetty)
- Responsiivinen ulkoasu (mobiili, tabletti, desktop)

---

## 3. Testauksen laajuus

### Mukana laajuudessa

| Alue | Testausfokus |
|------|--------------|
| **Toiminnallisuus** | Navigointi, ankkurilinkit, osioiden näkyvyys, teeman vaihto |
| **Lomake** | Pakolliset kentät, sähköpostin muoto, viestin minimipituus, virheilmoitukset, onnistumisviesti |
| **API** | JSON-pyynnöt, statuskoodit (200 / 400), vastauksen rakenne (`success`, `message`) |
| **UI-automaatio** | Savutestit Robot Frameworkilla (`tests/robot/portfolio.robot`) |
| **API-automaatio** | Postman-kokoelma + Newman (`tests/postman/contact-api.postman_collection.json`) |
| **Saavutettavuus** | WCAG 2.1 AA -tavoite; Lighthouse, Axe, WAVE |
| **Ei-toiminnallinen** | Peruskuormitus JMeterillä (`tests/jmeter/portfolio-load-test.jmx`) |
| **CI** | Lint, typecheck, build, API-savutestit GitHub Actionsissa |
| **Dokumentaatio** | Testitapaukset, virheraportit, testausyhteenveto |

### Testaustasot

1. **Yksikkö / komponentti** — Rajattu; validointilogiikka jaetaan (`src/lib/contactValidation.ts`).
2. **Integraatio** — Lomake ↔ API, CI-putki.
3. **Järjestelmä / E2E** — Koko sivu Robot Frameworkilla ja manuaalisesti.
4. **Hyväksyntä** — Manuaalinen läpikäynti ennen julkaisua / portfolion esittelyä.

---

## 4. Testauksen ulkopuolelle rajatut asiat

Seuraavat eivät kuulu tämän testisyklin laajuuteen:

| Rajaus | Perustelu |
|--------|-----------|
| Täysi kaksikielisyys (FI/EN sisältö) | Kielivalinta on vain UI-paikkamerkki |
| Sähköpostin oikea lähetys (SMTP / palvelu) | API mockaa onnistuneen lähetyksen |
| LinkedIn-upotuksen / kolmannen osapuolen testaus | Vain ulkoisen linkin toimivuus tarkistetaan |
| Tuotantoympäristön infrastruktuurin testaus | Paikallinen / CI-ympäristö riittää portfoliotarkoitukseen |
| Turvallisuusauditointi (penetraatiotestaus) | Ei tämän projektin ensisijainen fokus |
| CV-PDF:n saavutettavuus | PDF on staattinen liite; erillinen arviointi tarvittaessa |
| Stressi- ja pitkäkestoisen kuormituksen testaus | JMeter-suunnitelma on perustason paikkamerkki |

---

## 5. Testausmenetelmät

### 5.1 Manuaalitestaus

**Tarkoitus:** Varmistaa käyttäjäkokemus, visuaalinen laatu ja skenaariot, joita automaatio ei kata.

| Menetelmä | Kuvaus | Artefakti |
|-----------|--------|-----------|
| **Skriptatut testitapaukset** | Ennalta määritellyt vaiheet ja odotetut tulokset | `docs/test-cases.md` |
| **Tutkiva testaus (exploratory)** | Vapaa etsintä reunatapauksille ja käytettävyydelle | Muistiinpanot / virheraportit |
| **Regressiotestaus** | Uudelleentestaus korjausten jälkeen | Päivitetty testausyhteenveto |
| **Responsiivisuus** | Mobiili (375px), tabletti (768px), desktop (1280px) | Manuaalinen tarkistuslista |
| **Näppäimistönavigointi** | Tab-järjestys, fokus, lomakkeen lähetys ilman hiirtä | `tests/accessibility/accessibility-test-plan.md` |

**Prioriteetit:** P1 = kriittinen (etusivu, lomake, API), P2 = tärkeä (CV, teema), P3 = matalampi (kielivalinta).

### 5.2 Automaatiotestaus

**Tarkoitus:** Nopea, toistettava UI-regressio savutestitasolla.

| Kohde | Työkalu | Sijainti |
|-------|---------|----------|
| Etusivu, navigointi, osiot, lomake | Robot Framework + Browser-kirjasto | `tests/robot/` |
| Vakiot selektorit | `data-testid`, roolit, id:t | `src/components/` |

**Suoritus:**
```bash
npm run dev
robot --variable BASE_URL:http://localhost:3000 tests/robot
```

**Kattavuus (10 testitapausta):** etusivu, navigaatio, projektit, QA-osio, lomakkeen validointi ja onnistuminen, CV-linkit, kielivalinta, otsikko.

### 5.3 API-testaus

**Tarkoitus:** Varmistaa `POST /api/contact` -päätepisteen sopimus, validointi ja virhekäsittely riippumatta käyttöliittymästä.

| Skenaario | Odotettu status |
|-----------|-----------------|
| Kelvollinen pyyntö | 200, `success: true` |
| Puuttuva nimi / sähköposti / viesti | 400, `success: false` |
| Virheellinen sähköposti | 400 |
| Liian lyhyt viesti | 400 |

**Työkalut:** Postman (manuaalinen), Newman (CLI / CI)  
**Sijainti:** `tests/postman/contact-api.postman_collection.json`

### 5.4 Saavutettavuustestaus

**Tarkoitus:** Varmistaa, että sivusto on käytettävissä mahdollisimman monelle käyttäjälle; tavoitetaso **WCAG 2.1 AA**.

| Testausalue | Menetelmä |
|-------------|-----------|
| Otsikkorakenne ja maamerkit | Manuaali + Axe / WAVE |
| Lomakkeen labelit ja virheviestit | Manuaali + Axe |
| Värikontrasti | Lighthouse, Axe, WAVE |
| ARIA ja painikkeet | Manuaali + Axe |
| Näppäimistö ja fokus | Manuaalitestaus |

**Dokumentaatio:** `tests/accessibility/` (testisuunnitelma, työkalumuistiinpanot, löydösrekisteri).

### 5.5 Ei-toiminnallinen testaus

**Tarkoitus:** Arvioida sovelluksen vasteaika ja vakaus kevyen kuormituksen alla.

| Skenaario | Käyttäjiä | Kesto | Pyyntö |
|-----------|-----------|-------|--------|
| 1 — Etusivu | 50 | 2 min (ramp-up 30 s) | `GET /` |
| 2 — Yhteydenotto-API | 20 | 2 min (ramp-up 30 s) | `POST /api/contact` |

**Työkalu:** Apache JMeter  
**Suunnitelma:** `tests/jmeter/portfolio-load-test-plan.md`, `portfolio-load-test.jmx`

**Esimerkkihyväksymiskriteerit:** virhemäärä < 1 %; etusivun p95 < 1000 ms; API p95 < 1500 ms (paikallinen baseline).

---

## 6. Käytettävät työkalut

| Työkalu | Käyttötarkoitus tässä projektissa |
|---------|-----------------------------------|
| **Jira / Xray -tyylinen dokumentaatio** | Testisuunnitelma, testitapaukset, virheraportit ja yhteenveto versionhallinnassa (`docs/`) — vastaa Jira+Xray -rakennetta ilman erillistä lisenssiä |
| **Robot Framework** | UI-savutestit ja regressio (`tests/robot/`) |
| **Postman / Newman** | API-testikokoelma ja CI-ajot (`tests/postman/`) |
| **JMeter** | Kuormitus- ja suorituskykytestien paikkamerkki (`tests/jmeter/`) |
| **Lighthouse** | Saavutettavuuspisteet ja auditointi |
| **Axe** | Automaattinen WCAG-pohjainen skannaus (selain / CLI) |
| **WAVE** | Visuaalinen saavutettavuusarviointi selainlaajennuksella |
| **Git / GitHub Actions** | Versiohallinta, CI-putki (lint, build, Newman) |
| **VS Code** | Kehitysympäristö, testidokumentaation ja koodin editointi |
| **Python** | Robot Framework -ympäristö ja mahdolliset tukiskriptit |

### Dokumentaation vastaavuus (Jira/Xray)

| Jira/Xray -käsite | Tämän projektin vastine |
|-------------------|-------------------------|
| Test Plan | `docs/test-plan.md` |
| Test Cases | `docs/test-cases.md` |
| Test Execution | Testausyhteenveto + CI-lokit |
| Defect / Bug | `docs/bug-reports/` |
| Test Summary Report | `docs/test-summary-report.md` |

---

## 7. Testausympäristö

| Ympäristö | URL | Käyttö |
|-----------|-----|--------|
| **Paikallinen kehitys** | `http://localhost:3000` | `npm run dev` — päivittäinen testaus |
| **Paikallinen tuotantorakenne** | `http://localhost:3000` | `npm run build && npm start` — realistisempi suorituskyky |
| **CI (GitHub Actions)** | `http://localhost:3000` | Automaattinen build + Newman API -testit |

### Tekninen ympäristö

| Komponentti | Vaatimus |
|-------------|----------|
| Node.js | ≥ 18.17 |
| Selaimet | Chrome, Firefox, Edge (uusin vakaa) |
| Käyttöjärjestelmä | Windows / WSL / Linux / macOS |
| Python (Robot) | 3.10+ virtuaaliympäristössä |

### Huomioita ympäristöstä

- WSL + Windows-levy (`/mnt/c/`) voi aiheuttaa `npm`-ongelmia; suosi PowerShelliä tai WSL:n kotihakemistoa tarvittaessa.
- Jos portti 3000 on varattu, käytä `3001` ja päivitä `BASE_URL` / Postman-muuttuja.

---

## 8. Testidatan kuvaus

Testidata on kevyttä ja toistettavaa; ei käytetä oikeita henkilötietoja.

### Yhteydenottolomake / API

| Kenttä | Kelvollinen esimerkki | Virheellinen esimerkki |
|--------|----------------------|------------------------|
| **name** | `Test User` | `""` (tyhjä) |
| **email** | `test@example.com` | `not-an-email` |
| **message** | `This is a valid contact message for API testing.` (≥ 10 merkkiä) | `short` tai `""` |

### Muu testidata

| Kohde | Data |
|-------|------|
| CV-lataus | `public/cv.pdf` (paikkamerkki-PDF) |
| LinkedIn | Ulkoinen linkki (ei validoida sisältöä) |
| Teema | Vaalea / tumma — tallennus `localStorage` |
| Kielivalinta | UI-tila EN/FI (ei sisällön käännöstä) |

Testidata on dokumentoitu Postman-kokoelmassa ja Robot Framework -testeissä; sama data käytetään manuaalisissa tapauksissa toistettavuuden varmistamiseksi.

---

## 9. Riskit

| Riski | Vaikutus | Todennäköisyys | Vähennystoimi |
|-------|----------|----------------|---------------|
| API ei lähetä oikeaa sähköpostia | Käyttäjä luulee viestin menneen perille tuotannossa | Keskitaso | Dokumentoi rajoitus; testaa vain API-vastaus |
| UI-automaation epävakaus | Väärät regressiotulokset | Matala | `data-testid`-selektorit; odota elementtejä |
| Node / npm -ympäristöongelmat | Asennus tai build epäonnistuu | Keskitaso | Node 18+; vältä WSL `/mnt/c/` npm-asennuksia |
| Saavutettavuuslöydökset jäävät korjaamatta | Portfolio ei täytä WCAG-tavoitetta | Keskitaso | Erillinen a11y-löydösrekisteri ja uudelleenskannaus |
| JMeter-tulokset paikallisesta dev-tilasta | Epärealistinen suorituskyky | Korkea | Suorita build + start; dokumentoi ympäristö |
| Vanhentunut testidokumentaatio | Portfolion ja testien epäsynkronia | Keskitaso | Päivitä docs/ kun ominaisuudet muuttuvat |
| Kielivalinta ilman käännöstä | Harhaanjohtava käyttäjäkokemus | Matala | Merkitty paikkamerkiksi; ei testata käännöstä |

---

## 10. Hyväksymiskriteerit

### Sisääntulokriteerit (testauksen aloitus)

- Sovellus kääntyy virheittä (`npm run build`).
- Kehityspalvelin tai tuotantorakenne käynnistyy.
- Testitapaukset, automaatiot ja työkalut ovat saatavilla repossa.
- Testausympäristön URL ja selain on määritelty.

### Poistumiskriteerit (testauksen päätös / julkaisukelpoinen)

| Kriteeri | Tavoite |
|----------|---------|
| P1-manuaalitestit | Suoritettu; kaikki läpäisty tai hyväksytty poikkeukset dokumentoitu |
| Robot Framework -savutestit | 10/10 läpäisty |
| Postman / Newman API -testit | Kaikki pyynnöt ja assertiot läpäisty |
| Kriittiset / korkean prioriteetin virheet | Ei avoimia |
| Saavutettavuus | Lighthouse / Axe / WAVE ajettu; löydökset kirjattu |
| CI-putki | Lint, typecheck, build ja Newman vihreänä |
| Testausyhteenvetoraportti | Täytetty (`docs/test-summary-report.md`) |

### Esimerkki julkaisusuositus

- **Go** — Kaikki P1-kriteerit täyttyvät, ei avoimia kriittisiä vikoja.  
- **Go with known issues** — Pieniä tunnettuja puutteita dokumentoitu (esim. kielivalinta).  
- **No-Go** — Lomake, API tai navigaatio ei toimi; CI epäonnistuu toistuvasti.

---

## 11. Raportointi

### Raportit ja artefaktit

| Raportti | Sijainti | Sisältö |
|----------|----------|---------|
| Testisuunnitelma | `docs/test-plan.md` | Tämä dokumentti |
| Testitapaukset | `docs/test-cases.md` | ID, vaiheet, odotetut tulokset |
| Virheraportit | `docs/bug-reports/` | Askeltason toisto, vakavuus, tila |
| Testausyhteenveto | `docs/test-summary-report.md` | Kattavuus, tulokset, suositus |
| UI-automaatio | `tests/robot/results/` | Robot output.xml, log.html |
| API-testit | Newman CLI / CI-lokit | Postman assertiot |
| Saavutettavuus | `tests/accessibility/` | Työkalumuistiinpanot ja löydökset |
| Kuormitus | `tests/jmeter/results/` | JTL, HTML-raportti (paikallinen) |

### Raportointitiheys

- **Jokainen testisykli** (esim. ennen portfolion päivitystä tai hakemusta): täytä testausyhteenveto.
- **CI:** jokainen push/PR — automaattinen API- ja build-raportti.
- **Viat:** kirjaa heti `docs/bug-reports/` tai `accessibility-findings-template.md` (a11y).

### Vakavuusluokat (virheraportit)

| Luokka | Kuvaus |
|--------|--------|
| Critical | Estää ydintoiminnon (esim. lomake ei toimi) |
| High | Merkittävä puute ilman kiertotietä |
| Medium | Ongelma, kiertotie mahdollinen |
| Low | Kosmeettinen / parannusehdotus |

---

## 12. Jatkokehitys

Testaus ja laadunvarmistus laajennetaan portfolion mukana:

| Kohde | Toimenpide |
|-------|------------|
| **Kielivalinta (FI/EN)** | Toteuta i18n; lisää testitapaukset molemmille kielille |
| **Sähköposti-integraatio** | API-testit mock-palvelulle tai sandbox-ympäristölle |
| **CI** | Ota käyttöön lisäjobit (JMeter, Lighthouse) `.github/workflows/qa-tests.yml` -tiedostossa |
| **Saavutettavuus** | Korjaa A11Y-löydökset; nosta Lighthouse-pisteet; uudelleenskannaus |
| **JMeter** | Aja tuotantorakenne vasten; vertaa hyväksymiskriteereihin |
| **Testikattavuus** | Laajenna regressiosarja (navigointi osioittain, tumma teema) |
| **Turvallisuus** | Perus-OWASP-tarkistus (esim. syötteen sanitointi, rate limiting) |
| **Julkaisu** | E2E staging-ympäristössä (Vercel tms.) ennen tuotantoa |

### Ylläpito

- Päivitä testisuunnitelma, kun laajuus tai riskit muuttuvat.
- Synkronoi manuaaliset tapaukset automaation kanssa (sama ID-viittaus, esim. TC-005 ↔ Robot).
- Säilytä portfolio esimerkkinä siitä, miten QA työskentelee oikean tuotteen parissa — dokumentaatio on yhtä tärkeä kuin itse sivusto.

---

_Dokumentti on osa CV-portfolion QA-projektia. Päivitä laatijan nimi, päivämäärä ja tulokset oikeilla arvoilla ennen työnhakua._
