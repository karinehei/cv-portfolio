# Testitapaukset — CV-portfoliosivusto

| Kenttä | Arvo |
|--------|------|
| **Projekti** | CV-portfolio (QA-painotteinen) |
| **Dokumentti** | Manuaaliset testitapaukset |
| **Viite** | `docs/test-plan.md` |
| **Muoto** | Jira / Xray -tyylinen rakenne |
| **Päivitetty** | 2026-06-17 |

## Yhteenveto

| ID | Otsikko | Prioriteetti | Tyyppi | Automaatio |
|----|---------|--------------|--------|------------|
| TC-001 | Etusivu latautuu onnistuneesti | P1 | Toiminnallinen | Kyllä |
| TC-002 | Päänavigaatio toimii | P1 | Toiminnallinen | Kyllä |
| TC-003 | Tietoa minusta -osio näkyy | P2 | Toiminnallinen | Ei |
| TC-004 | Taidot-osio näkyy | P2 | Toiminnallinen | Ei |
| TC-005 | Projektit-osio näkyy | P1 | Toiminnallinen | Kyllä |
| TC-006 | QA-projekti -osio näkyy | P1 | Toiminnallinen | Kyllä |
| TC-007 | CV-lataus ja -linkki näkyvät | P2 | Toiminnallinen | Kyllä |
| TC-008 | Yhteydenottolomake hyväksyy kelvollisen syötteen | P1 | Toiminnallinen | Kyllä |
| TC-009 | Lomake hylkää tyhjät kentät | P1 | Negatiivinen | Kyllä |
| TC-010 | Lomake hylkää virheellisen sähköpostin | P1 | Negatiivinen | Kyllä |
| TC-011 | Lomake hylkää liian lyhyen viestin | P2 | Raja-arvo | Kyllä (API) |
| TC-012 | Kielivalinta näkyy | P3 | Käyttöliittymä | Kyllä |
| TC-013 | Sivusto toimii mobiilinäkymässä | P2 | Responsiivisuus | Osittain (Robot) |
| TC-014 | Näppäimistönavigointi toimii | P2 | Saavutettavuus | Osittain (Robot) |
| TC-015 | Ulkoiset GitHub- ja projektilinkit toimivat | P2 | Toiminnallinen | Ei |

**Automaatioviitteet:** `tests/robot/portfolio.robot`, `tests/postman/contact-api.postman_collection.json`

---

## TC-001 — Etusivu latautuu onnistuneesti

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-001 |
| **Title** | Etusivu latautuu onnistuneesti |
| **Priority** | P1 |
| **Type** | Toiminnallinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot` (Home Page Loads Successfully) |

### Preconditions
- Sovellus on käynnissä (`npm run dev` tai tuotantorakenne).
- Testaus-URL: `http://localhost:3000` (tai vastaava).
- Selain: Chrome, Firefox tai Edge (uusin vakaa versio).

### Test steps
1. Avaa selaimessa osoite `/`.
2. Odota, että sivu latautuu kokonaan.
3. Tarkista sivun otsikko (välilehti).
4. Tarkista hero-osion pääotsikko (`h1`).
5. Varmista, että CTA-painikkeet (esim. QA-portfolio, yhteystiedot) näkyvät.

### Expected result
- Sivu latautuu ilman virheilmoitusta tai tyhjää näkymää.
- Sivun otsikko sisältää tekstin **CV Portfolio**.
- Pääotsikko sisältää tekstin **Quality assurance and test automation**.
- Hero-osion toimintakehotukset ovat näkyvissä ja luettavissa.

---

## TC-002 — Päänavigaatio toimii

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-002 |
| **Title** | Päänavigaatio toimii |
| **Priority** | P1 |
| **Type** | Toiminnallinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot` (Main Navigation Links Are Visible) |

### Preconditions
- Etusivu on avattu osoitteessa `/`.
- Navigaatio on näkyvissä (leveä näyttö) tai vieritettävissä (kapea näyttö).

### Test steps
1. Tarkista, että päänavigaatiossa näkyvät linkit: Home, About, Skills, QA Portfolio, Projects, CV, Contact.
2. Napsauta linkkiä **About**.
3. Varmista, että sivu vierittää Tietoa minusta -osioon.
4. Toista vaiheet 2–3 linkeille **Skills**, **QA Portfolio**, **Projects**, **CV** ja **Contact**.
5. Napsauta **Home** ja varmista paluu sivun alkuun.

### Expected result
- Kaikki navigaatiolinkit ovat näkyvissä ja napsautettavissa.
- Jokainen linkki vierittää näkymän oikeaan ankkuriosioon (`#about`, `#skills`, `#qa-testing`, `#projects`, `#cv`, `#contact`, `#home`).
- Osioiden otsikot tulevat näkyviin vierityksen jälkeen.
- Sivu ei kaadu eikä näytä 404-virhettä.

---

## TC-003 — Tietoa minusta -osio näkyy

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-003 |
| **Title** | Tietoa minusta -osio näkyy |
| **Priority** | P2 |
| **Type** | Toiminnallinen |
| **Automation status** | Ei automatisoitu |

### Preconditions
- Etusivu on avattu.

### Test steps
1. Siirry navigaatiosta tai suoraan osoitteeseen `/#about`.
2. Tarkista osion otsikko.
3. Lue osion sisältöteksti.
4. Varmista, että teksti on luettavissa ja osio on visuaalisesti erottuva.

### Expected result
- Otsikko **About me** / **Tietoa minusta** -tyyppinen osio-otsikko näkyy.
- Osio sisältää esittelytekstin QA- ja testauspainotteisesta taustasta.
- Sisältö ei ole leikattu pois tai päällekkäin muiden elementtien kanssa.

---

## TC-004 — Taidot-osio näkyy

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-004 |
| **Title** | Taidot-osio näkyy |
| **Priority** | P2 |
| **Type** | Toiminnallinen |
| **Automation status** | Ei automatisoitu |

### Preconditions
- Etusivu on avattu.

### Test steps
1. Siirry osioon `/#skills`.
2. Tarkista osion otsikko **Skills**.
3. Varmista, että osaamisryhmät näkyvät (esim. Testing, Automation, Tools, CI/CD, Accessibility).
4. Tarkista, että jokaisessa ryhmässä on luettelo taidoista.

### Expected result
- Taidot-osio ja sen otsikko näkyvät oikein.
- Vähintään kolme osaamisryhmää on esillä korttimuodossa.
- Listaukset ovat luettavissa ja sisältö vastaa testaajan / QA-roolin osaamista.

---

## TC-005 — Projektit-osio näkyy

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-005 |
| **Title** | Projektit-osio näkyy |
| **Priority** | P1 |
| **Type** | Toiminnallinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot` (Projects Section Is Visible) |

### Preconditions
- Etusivu on avattu.

### Test steps
1. Siirry osioon `/#projects`.
2. Tarkista osion otsikko **Projects**.
3. Varmista, että vähintään yksi projektikortti näkyy.
4. Tarkista, että korteissa on otsikko, kuvaus ja tunnisteet (tagit).

### Expected result
- Projektit-osio latautuu ja on näkyvissä.
- Vähintään yksi projektikortti (`project-card`) näkyy.
- Esimerkiksi **CV Portfolio — QA automation project** -kortti on listattu.
- Korttien sisältö on luettavaa eikä ulotu näkymän ulkopuolelle.

---

## TC-006 — QA-projekti -osio näkyy

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-006 |
| **Title** | QA-projekti -osio näkyy |
| **Priority** | P1 |
| **Type** | Toiminnallinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot` (QA Testing Project Section Is Visible) |

### Preconditions
- Etusivu on avattu.

### Test steps
1. Siirry osioon `/#qa-testing`.
2. Tarkista osion otsikko **QA portfolio project**.
3. Lue kuvaus siitä, että sivusto on järjestelmä testattavana (SUT).
4. Varmista, että testausartefaktien listaus näkyy (esim. `docs/`, `tests/robot/`, `tests/postman/`).

### Expected result
- QA-projekti -osio ja otsikko näkyvät.
- Teksti kuvaa sivustoa testattavana tuotteena.
- Vähintään yksi QA-artefaktikortti (`qa-artefact`) on näkyvissä.
- Maininta CI-putkesta (`.github/workflows/qa-tests.yml`) löytyy artefaktien joukosta.

---

## TC-007 — CV-lataus ja -linkki näkyvät

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-007 |
| **Title** | CV-lataus ja -linkki näkyvät |
| **Priority** | P2 |
| **Type** | Toiminnallinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot` (CV Download And Link Are Visible) |

### Preconditions
- Tiedosto `public/cv.pdf` on olemassa repossa.
- Etusivu on avattu.

### Test steps
1. Siirry osioon `/#cv`.
2. Tarkista, että **Download CV (PDF)** -painike/linkki näkyy.
3. Tarkista, että **LinkedIn** -linkki näkyy.
4. Napsauta **Download CV (PDF)** ja tarkista, että PDF avautuu tai latautuu.
5. Tarkista LinkedIn-linkin kohde-URL (hiiren osoitin / elementin tarkastus).

### Expected result
- Molemmat linkit ovat näkyvissä ja erottuvat selkeästi.
- CV-lataus osoittaa tiedostoon `/cv.pdf` ja toimii.
- LinkedIn-linkki osoittaa ulkoiseen LinkedIn-osoitteeseen.
- Linkit ovat napsautettavia ilman JavaScript-virheitä.

---

## TC-008 — Yhteydenottolomake hyväksyy kelvollisen syötteen

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-008 |
| **Title** | Yhteydenottolomake hyväksyy kelvollisen syötteen |
| **Priority** | P1 |
| **Type** | Toiminnallinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot`, `tests/postman/contact-api.postman_collection.json` |

### Preconditions
- Sovellus ja API ovat käynnissä.
- Yhteydenotto-osio on saavutettavissa.

### Test steps
1. Siirry osioon `/#contact`.
2. Täytä kenttä **Name**: `Test User`.
3. Täytä kenttä **Email**: `test@example.com`.
4. Täytä kenttä **Message**: `This is a valid test message for the contact form.`
5. Napsauta **Send message**.
6. Odota API-vastaus.

### Expected result
- Lomake hyväksyy syötteen ilman kenttäkohtaisia virheilmoituksia.
- Näytetään onnistumisviesti: **Contact request received**.
- Lomake tyhjenee lähetyksen jälkeen.
- Verkkopyynnön status on **200** ja vastauksessa `success: true`.

---

## TC-009 — Lomake hylkää tyhjät kentät

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-009 |
| **Title** | Lomake hylkää tyhjät kentät |
| **Priority** | P1 |
| **Type** | Negatiivinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot` |

### Preconditions
- Yhteydenotto-osio on avattu.
- Lomakekentät ovat tyhjiä.

### Test steps
1. Siirry osioon `/#contact`.
2. Varmista, että Name, Email ja Message ovat tyhjiä.
3. Napsauta **Send message** suoraan ilman täyttöä.
4. Tarkista kenttien alle ilmestyvät virheilmoitukset.

### Expected result
- Lomaketta ei lähetetä onnistuneesti.
- Näytetään virheilmoitukset:
  - **Name is required**
  - **Email is required**
  - **Message is required**
- Onnistumisviestiä ei näytetä.
- Virheilmoitukset ovat näkyvissä ja ymmärrettäviä.

---

## TC-010 — Lomake hylkää virheellisen sähköpostin

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-010 |
| **Title** | Lomake hylkää virheellisen sähköpostin |
| **Priority** | P1 |
| **Type** | Negatiivinen |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot`, `tests/postman/contact-api.postman_collection.json` |

### Preconditions
- Yhteydenotto-osio on avattu.

### Test steps
1. Täytä **Name**: `Test User`.
2. Täytä **Email**: `not-an-email`.
3. Täytä **Message**: `This message has enough characters.`
4. Napsauta **Send message**.
5. Tarkista sähköpostikentän virheilmoitus.

### Expected result
- Lomaketta ei hyväksytä.
- Sähköpostikentän virheilmoitus: **Invalid email address**.
- API palauttaa status **400** ja `success: false`, jos pyyntö ohitetaan suoraan API-tasolla.
- Muut kentät säilyttävät syötetyn arvon (lomake ei tyhjene).

---

## TC-011 — Lomake hylkää liian lyhyen viestin

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-011 |
| **Title** | Lomake hylkää liian lyhyen viestin |
| **Priority** | P2 |
| **Type** | Raja-arvo |
| **Automation status** | Ei automatisoitu (API: `tests/postman/contact-api.postman_collection.json`) |

### Preconditions
- Yhteydenotto-osio on avattu.
- Viestin minimipituus on 10 merkkiä.

### Test steps
1. Täytä **Name**: `Test User`.
2. Täytä **Email**: `test@example.com`.
3. Täytä **Message**: `short` (alle 10 merkkiä).
4. Napsauta **Send message**.
5. Tarkista viestikentän virheilmoitus.

### Expected result
- Lomaketta ei hyväksytä.
- Virheilmoitus: **Message must be at least 10 characters**.
- Onnistumisviestiä ei näytetä.
- Raja-arvo (9 vs 10 merkkiä) voidaan testata erikseen tutkivassa testauksessa.

---

## TC-012 — Kielivalinta näkyy

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-012 |
| **Title** | Kielivalinta näkyy |
| **Priority** | P3 |
| **Type** | Käyttöliittymä |
| **Automation status** | Automatisoitu — `tests/robot/portfolio.robot` (EN/FI language switcher tests) |

### Preconditions
- Etusivu on avattu.

### Test steps
1. Tarkista yläpalkin EN/FI-kielivalinta (`language-switcher`).
2. Varmista, että **EN** on valittuna oletuksena (`aria-pressed="true"`).
3. Napsauta **FI** ja tarkista suomenkielinen otsikko sekä navigaatio.
4. Lähetä tyhjä yhteydenottolomake ja varmista suomenkieliset virheilmoitukset.
5. Napsauta **EN** ja varmista englanninkielinen sisältö.

### Expected result
- Kielivalinta on näkyvissä ja saavutettava (`aria-pressed`, `html lang`).
- Suomenkielinen UI sisältää käännetyn navigaation, osiot ja lomakeviestit.
- Englannin valinta palauttaa oletussisällön.

---

## TC-013 — Sivusto toimii mobiilinäkymässä

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-013 |
| **Title** | Sivusto toimii mobiilinäkymässä |
| **Priority** | P2 |
| **Type** | Responsiivisuus |
| **Automation status** | Ei automatisoitu |

### Preconditions
- Selaimen kehitystyökalut (DevTools) ovat käytettävissä.
- Testinäkymä: 375 × 667 px (tai vastaava mobiililaite).

### Test steps
1. Avaa etusivu ja aseta näkymän kooksi 375px leveys.
2. Vieritä sivu ylästä alas läpi kaikkien osioiden.
3. Tarkista navigaatio, hero, lomake ja painikkeet.
4. Täytä ja lähetä yhteydenottolomake mobiilinäkymässä kelvollisilla tiedoilla.
5. Tarkista, ettei sivulla ole vaakasuuntaista vierityspalkkia.

### Expected result
- Sisältö skaalautuu mobiilinäkymään ilman päällekkäisyyksiä.
- Kaikki osiot ovat saavutettavissa (navigaatio tai vieritys).
- Lomake on täytettävissä ja lähetettävissä kosketusnäytöllä / emuloidulla näytöllä.
- Kriittistä tekstiä ei leikata pois näkyvistä.

---

## TC-014 — Näppäimistönavigointi toimii

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-014 |
| **Title** | Näppäimistönavigointi toimii |
| **Priority** | P2 |
| **Type** | Saavutettavuus |
| **Automation status** | Osittain — manuaalinen a11y-testaus (`tests/accessibility/`) |

### Preconditions
- Etusivu on avattu.
- Hiirtä ei käytetä tämän testin aikana.

### Test steps
1. Paina **Tab** siirtyäksesi interaktiivisten elementtien läpi.
2. Seuraa fokuksen järjestystä: logo → navigaatio → teema/kieli → sisältö → lomake.
3. Siirry yhteydenottolomakkeeseen ja täytä kentät näppäimistöllä.
4. Lähetä lomake painamalla **Enter** lähetyspainikkeessa (kun fokus on painikkeessa).
5. Tarkista, että fokusindikaattori on näkyvissä jokaisessa kohdassa.

### Expected result
- Kaikki interaktiiviset elementit ovat saavutettavissa Tab-näppäimellä.
- Fokusjärjestys on looginen eikä jää jumiin (ei keyboard trap).
- Fokus on visuaalisesti havaittavissa (`:focus` / `:focus-visible`).
- Lomake on lähetettävissä näppäimistöllä.

---

## TC-015 — Ulkoiset GitHub- ja projektilinkit toimivat

| Kenttä | Arvo |
|--------|------|
| **Test Case ID** | TC-015 |
| **Title** | Ulkoiset GitHub- ja projektilinkit toimivat |
| **Priority** | P2 |
| **Type** | Toiminnallinen |
| **Automation status** | Ei automatisoitu |

### Preconditions
- Portfolioon on konfiguroitu ulkoiset linkit (LinkedIn, mahdolliset GitHub-repo-URL:t projektikorteissa tai README-viittauksissa).
- Verkko-yhteys on käytettävissä.

### Test steps
1. Siirry CV-osioon (`/#cv`).
2. Napsauta **LinkedIn**-linkkiä.
3. Varmista, että linkki avautuu uuteen välilehteen (`target="_blank"`) ja osoite on LinkedIn-domain.
4. Palaa portfoliosivulle.
5. Jos projektikorteissa tai QA-osiossa on konfiguroitu GitHub-linkkejä, napsauta kutakin linkkiä.
6. Varmista, että GitHub-repositorio tai Actions-sivu latautuu oikein.
7. Tarkista, että ulkoisissa linkeissä on `rel="noopener noreferrer"` (turvallisuus).

### Expected result
- LinkedIn-linkki toimii ja avautuu oikeaan kohteeseen.
- Konfiguroidut GitHub-/projektilinkit avautuvat ilman 404-virhettä.
- Ulkoiset linkit avautuvat uuteen välilehteen tarvittaessa.
- Linkkien käyttäytyminen on ennustettavaa ja turvallista (`noopener noreferrer`).

> **Huom.** Projektikorttien GitHub-URL:t ovat oletuksena paikkamerkkejä — päivitä linkit omaan repoosi ennen testin suorittamista, tai kirjaa tunnettu rajoitus testausyhteenvetoon.

---

## Jäljitettävyys

| Manuaalinen tapaus | Automaatio |
|--------------------|------------|
| TC-001 | Robot: Home Page Loads Successfully |
| TC-002 | Robot: Main Navigation Links Are Visible |
| TC-005 | Robot: Projects Section Is Visible |
| TC-006 | Robot: QA Testing Project Section Is Visible |
| TC-007 | Robot: CV Download And Link Are Visible |
| TC-008 | Robot + Postman: valid contact |
| TC-009 | Robot: empty validation |
| TC-010 | Robot + Postman: invalid email |
| TC-011 | Postman: message too short |
| TC-012 | Robot: Language switcher (EN/FI) |

---

_Päivitä testitapaukset, kun uusia ominaisuuksia lisätään (esim. täysi suomennos, GitHub-linkit projekteihin)._
