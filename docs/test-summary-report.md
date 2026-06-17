# Testauksen yhteenvetoraportti — CV Portfolio QA Project

| Kenttä | Arvo |
|--------|------|
| **Projekti** | CV-portfolio (QA-painotteinen) |
| **Testisykli** | Sprint 1 / baseline-testaus |
| **Raportin päivämäärä** | _2026-06-17 (esimerkki)_ |
| **Testaaja** | _Nimesi_ |
| **Build / commit** | `v0.1.0` / _abc1234 (esimerkki)_ |
| **Ympäristö** | Paikallinen kehitys — `http://localhost:3000` |
| **Viite** | `docs/test-plan.md`, `docs/test-cases.md` |

> **Huom.** Tämä raportti sisältää **realistisia esimerkkituloksia** QA-portfolion esittelyä varten. Korvaa arvot oikeilla mittauksilla oman testausajosi jälkeen. **CI-automaatio** (Robot, Postman) on ajettavissa toistettavasti; JMeter- ja saavutettavuusluvut vaativat erillisen ajon ennen julkaisua.

**Dokumentaation synkronointi (2026-06-17):** Virheraportit ja saavutettavuuskorjaukset on päivitetty vastaamaan nykyistä koodia. Katso `docs/traceability-matrix.md`.

---

## 1. Yhteenveto

CV-portfoliosivuston ensimmäinen testisykli on suoritettu testisuunnitelman (`docs/test-plan.md`) mukaisesti. Testaus kattaa toiminnallisuuden, API:n, UI-automaation, saavutettavuuden ja kevyen kuormitustestauksen. Kokonaisuutena tuote on **käytettävissä ja esiteltävissä** työnhakutilanteessa, mutta saavutettavuuteen ja mobiilikokemukseen liittyviä parannuksia suositellaan ennen tuotantojulkaisua.

**Julkaisusuositus (esimerkki):** **Go with known issues** — ydinpolku (etusivu, navigaatio, yhteydenotto, API) toimii; avoimet High/Medium-löydökset dokumentoitu ja priorisoitu.

| Mittari | Tulos (esimerkki) |
|---------|-------------------|
| Manuaalitestit | 14 / 15 läpäisty (93,3 %) |
| Robot Framework | 12 / 12 läpäisty (100 %) |
| Postman API | 7 / 7 läpäisty (100 %) |
| Saavutettavuuslöydökset | 5 kpl — korjattu koodissa, uudelleenskannaus suositeltu |
| Kuormitustestaus | Esimerkkitulokset — aja JMeter paikallisesti |

---

## 2. Testauksen tavoite

Varmistaa, että CV-portfoliosivusto:

- toimii luotettavasti keskeisissä käyttäjäpoluissa (selailu, yhteydenotto, CV-lataus);
- validoi yhteydenottolomakkeen oikein käyttöliittymässä ja API:ssa;
- täyttää QA-portfoliona asetetun laatutason (dokumentaatio, automaatio, CI);
- tuottaa mitattavia tuloksia saavutettavuudesta ja suorituskyvystä.

Testaus on suunniteltu osoittamaan ohjelmistotestaajan osaamista kokonaisvaltaisessa laadunvarmistuksessa — ei pelkästään manuaalisena testauksena.

---

## 3. Testauksen kattavuus

### Mukana testauksessa

| Alue | Kuvaus | Artefaktit |
|------|--------|------------|
| Toiminnallisuus | Etusivu, osiot, navigaatio, lomake, CV | `docs/test-cases.md` |
| API | `POST /api/contact` — positiiviset ja negatiiviset tapaukset | `tests/postman/contact-api.postman_collection.json` |
| UI-automaatio | Savutestit Robot Frameworkilla | `tests/robot/portfolio.robot` |
| Saavutettavuus | Lighthouse, Axe, WAVE + manuaali | `tests/accessibility/` |
| Kuormitus | Etusivu + contact API (baseline) | `tests/jmeter/portfolio-load-test.jmx` |
| CI | Lint, build, Newman, Robot | `.github/workflows/qa-tests.yml` |

### Rajattu pois

- Täysi FI/EN-sisällön käännös (kielivalinta on UI-paikkamerkki)
- Oikea sähköpostin lähetys (API mockaa onnistumisen)
- Tuotantoinfrastruktuurin ja turvallisuusauditoinnin testaus

---

## 4. Suoritetut testit

### 4.1 Manuaalitestit

| Kenttä | Arvo |
|--------|------|
| Suunniteltu | 15 testitapausta (TC-001 – TC-015) |
| Suoritettu | 15 |
| Läpäisty | 13 |
| Epäonnistunut | 2 |
| Estynyt | 0 |

**Suoritus:** Kaikki P1-tapaukset ajettu Chrome 131 ja Firefox 133 -selaimilla. Responsiivisuus testattu 375px-näkymässä.

**Epäonnistuneet tapaukset (esimerkki):**
- **TC-015** — Ulkoiset projektilinkit: paikkamerkit, ei vielä linkitetty GitHub-repoon.

**Huom.** TC-013 mobiilivalikko ja TC-014 teema/automaatio osittain katettu Robotilla buildin 2026-06 jälkeen.

### 4.2 Robot Framework UI -testit

| Kenttä | Arvo |
|--------|------|
| Testisarja | `tests/robot/portfolio.robot` |
| Suoritettu | 12 |
| Läpäisty | 12 |
| Epäonnistunut | 0 |
| Kesto (esimerkki) | ~18 s (headless Chromium) |

**Kattavuus:** TC-001, TC-002, TC-005–TC-010, TC-012–TC-014 (osittain). Katso `docs/traceability-matrix.md`.

### 4.3 Postman API -testit

| Kenttä | Arvo |
|--------|------|
| Kokoelma | `tests/postman/contact-api.postman_collection.json` |
| Pyynnöt | 7 |
| Assertiot | 28 |
| Läpäisty | 7 / 7 (100 %) |
| Työkalu | Newman CLI |

**Kattavuus:** kelvollinen pyyntö, puuttuvat kentät, virheellinen sähköposti, liian lyhyt viesti, virheellinen JSON-runko.

### 4.4 JMeter-kuormitustesti

| Kenttä | Arvo |
|--------|------|
| Suunnitelma | `tests/jmeter/portfolio-load-test.jmx` |
| Skenaario 1 | 50 käyttäjää, `GET /`, 2 min, ramp-up 30 s |
| Skenaario 2 | 20 käyttäjää, `POST /api/contact`, 2 min, ramp-up 30 s |
| Ympäristö | `npm run build && npm start` (esimerkki) |

**Tulokset (esimerkki):**

| Skenaario | Keskim. vasteaika | p95 | Virhemäärä | Throughput |
|-----------|-------------------|-----|------------|------------|
| Etusivu `GET /` | 312 ms | **842 ms** | 0,2 % | 48 req/s |
| Contact API `POST` | 89 ms | **412 ms** | 0 % | 22 req/s |

**Hyväksymiskriteerit (esimerkki):**

| Kriteeri | Tavoite | Tulos |
|----------|---------|-------|
| Virhemäärä | < 1 % | ✅ 0,2 % / 0 % |
| Etusivu p95 | < 1000 ms | ✅ 842 ms |
| API p95 | < 1500 ms | ✅ 412 ms |

### 4.5 Lighthouse / Axe / WAVE — saavutettavuustarkistukset

| Työkalu | Tulos (esimerkki) | Raportti |
|---------|-------------------|----------|
| **Lighthouse** | _Aja ennen julkaisua_ | `tests/accessibility/reports/lighthouse-report.json` (placeholder) |
| **Axe DevTools** | _Aja ennen julkaisua_ | `tests/accessibility/reports/axe-report.json` (placeholder) |
| **WAVE** | _Aja ennen julkaisua_ | `tests/accessibility/reports/wave-report.txt` (placeholder) |

**Manuaalinen a11y:** näppäimistönavigointi ja lomake-ARIA parannettu koodissa (BUG-002, BUG-004, BUG-005 Fixed). Suorita Lighthouse + Axe ja kirjaa tulokset ennen lopullista julkaisua.

**Kirjatut löydökset:** 5 kpl (`tests/accessibility/accessibility-findings-template.md`, ristiinviite `docs/bug-reports.md`).

---

## 5. Testitulokset

### Kokonaisyhteenveto

| Testityyppi | Suunniteltu | Ajettu | Läpäisty | Epäonnistunut | Pass % |
|-------------|-------------|--------|----------|---------------|--------|
| Manuaalitestit | 15 | 15 | 14 | 1 | 93,3 % |
| Robot Framework | 12 | 12 | 12 | 0 | 100 % |
| Postman / Newman | 7 | 7 | 7 | 0 | 100 % |
| CI-putki | 1 | 1 | 1 | 0 | 100 % |
| JMeter (skenaariot) | 2 | 2 | 2 | 0 | 100 %** |
| Saavutettavuusskannaus | 3 työkalua | 3 | — | 5 löydöstä | — |

\* Ensimmäinen ajo; uudelleenajo 10/10 ympäristön korjauksen jälkeen.  
\*\* Suorituskykytavoitteiden täyttyminen, ei toiminnallisia testitapauksia.

### P1-tapausten tila (esimerkki)

| ID | Otsikko | Tulos |
|----|---------|-------|
| TC-001 | Etusivu latautuu | ✅ Pass |
| TC-002 | Päänavigaatio | ✅ Pass |
| TC-005 | Projektit-osio | ✅ Pass |
| TC-006 | QA-projekti -osio | ✅ Pass |
| TC-008 | Lomake — kelvollinen syöte | ✅ Pass |
| TC-009 | Lomake — tyhjät kentät | ✅ Pass |
| TC-010 | Lomake — virheellinen sähköposti | ✅ Pass |

---

## 6. Löydetyt virheet

Yhteensä **5 virhettä / havaintoa** kirjattu testisyklin aikana (`docs/bug-reports.md`).

| Bug ID | Otsikko | Vakavuus | Prioriteetti | Tila |
|--------|---------|----------|--------------|------|
| BUG-001 | Lomake hyväksyy virheellisen sähköpostin | High | P1 | Fixed |
| BUG-002 | Mobiilivalikko ilman saavutettavaa nimeä | High | P1 | Fixed |
| BUG-003 | CV-PDF paikkamerkki (sisältö) | Medium | P2 | Deferred |
| BUG-004 | Toissijaisen painikkeen kontrasti | High | P2 | Fixed |
| BUG-005 | Virheilmoitusta ei kuuluteta ruudunlukijalle | Medium | P2 | Fixed |

**Vakavuusjakauma (avoimet):** 0 Critical · 0 High · 1 Medium (Deferred) · 0 Low

---

## 7. Korjatut virheet

| Bug ID | Kuvaus | Korjaus (esimerkki) | Varmennettu |
|--------|--------|---------------------|-------------|
| BUG-001 | Virheellinen sähköposti hyväksyttiin | Jaettu validointi `contactValidation.ts` | TC-010, Postman, Robot ✅ |
| BUG-002 | Mobiilivalikon saavutettavuus | `Header.tsx` ARIA | TC-013 Robot ✅ |
| BUG-004 | Kontrasti `.btn-secondary` | `globals.css` | A11Y-002 ✅ |
| BUG-005 | Ruudunlukijan ilmoitukset | `ContactForm.tsx` aria-live | TC-009 Robot ✅ |

**Korjausten jälkeen uudelleentestaus:**
- Postman-kokoelma 7/7 läpäisty
- Robot 12/12 läpäisty

---

## 8. Avoimet havainnot

Seuraavat asiat jäävät auki tai hyväksytään tunnetuiksi rajoituksiksi:

| ID | Havainto | Vaikutus | Suositus |
|----|----------|----------|----------|
| BUG-003 | CV-PDF paikkamerkki | Hakija ei saa oikeaa CV:tä | Korvaa `public/cv.pdf` |
| — | Kielivalinta ilman käännöstä | Matala | Dokumentoitu rajoitus |
| — | Sähköposti ei lähde oikeasti | Matala (dev) | Tuotannossa integroi palvelu |
| — | A11y-skannaukset | Keskitaso | Aja Lighthouse + Axe; kirjaa tulokset |

**Tunnettu rajoitus:** Projektikorttien GitHub-linkit ovat paikkamerkkejä (TC-015 osittain estynyt).

---

## 9. Riskit

| Riski | Todennäköisyys | Vaikutus | Toimenpide |
|-------|----------------|----------|------------|
| Saavutettavuuslöydökset jäävät korjaamatta | Matala | Keskitaso | Aja Lighthouse + Axe ennen julkaisua |
| WSL / npm-ympäristöongelmat | Keskitaso | Keskitaso | Dokumentoi asennusohje; käytä Node 18+ |
| Dev vs prod suorituskyky | Korkea | Matala | JMeter ajettu build+start-tilassa |
| Automaation väärä BASE_URL | Matala | Matala | Parametroi `BASE_URL` CI:ssä ja README:ssä |

---

## 10. Johtopäätökset

1. **Toiminnallinen laatu** on hyvä ydinpoluissa: etusivu, navigaatio, lomake ja API toimivat suunnitellusti.
2. **API-automaatio** on vakaa (100 % läpäisy) ja integroitu CI-putkeen.
3. **UI-automaatio** kattaa 12 savutestausta; traceability: `docs/traceability-matrix.md`.
4. **Saavutettavuudessa** koodikorjaukset tehty; skannaukset dokumentoitava ennen julkaisua.
5. **Kuormitustestaus** täyttää baseline-tavoitteet paikallisessa ympäristössä.

**Lopullinen arvio (esimerkki):** Portfolio on **valmis esiteltäväksi QA-projektina** työhaussa. Tuotantojulkaisua varten suositellaan avoimien saavutettavuus- ja CV-linkkihavaintojen korjausta.

**Suositus:** **Go with known issues** — jatka julkaisua dokumentoiduin rajoituksin tai korjaa BUG-003 ja BUG-004 ennen julkista URL-osoitetta.

---

## 11. Jatkokehitysehdotukset

| Prioriteetti | Toimenpide |
|--------------|------------|
| P1 | Korvaa CV-PDF ja sulje BUG-003 |
| P1 | Aja Lighthouse + Axe; päivitä `tests/accessibility/reports/` |
| P2 | Laajenna CI-putkea (JMeter, Lighthouse) erillisinä jobeina | `.github/workflows/qa-tests.yml` |
| P2 | Täydennä regressiotestit tummalle teemalle |
| P2 | Toteuta i18n (FI/EN) ja lisää testitapaukset |
| P3 | Lisää GitHub-linkit projektikorteille (TC-015) |
| P3 | Aja JMeter tuotantoympäristöä vasten julkaisun jälkeen |
| P3 | Integroi sähköpostipalvelu ja laajenna API-testit |

---

## Liitteet

| Liite | Sijainti |
|-------|----------|
| Testisuunnitelma | `docs/test-plan.md` |
| Testitapaukset | `docs/test-cases.md` |
| Virheraportit | `docs/bug-reports.md` |
| Robot-tulokset | `tests/robot/results/` |
| Postman-kokoelma | `tests/postman/contact-api.postman_collection.json` |
| JMeter-suunnitelma | `tests/jmeter/portfolio-load-test-plan.md` |
| Saavutettavuus | `tests/accessibility/` |
| Traceability matrix | `docs/traceability-matrix.md` |

---

**Raportin laatija:** _Nimesi_  
**Hyväksyjä (esimerkki):** _Projektin omistaja / itsenäinen QA-arvio_  
**Seuraava testisykli:** _Ennen tuotantojulkaisua tai CV-sisällön päivitystä_

_Esimerkkiraportti — päivitä luvut ja tilat oman testausajon tuloksilla._
