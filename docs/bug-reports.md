# Virheraportit — CV-portfoliosivusto

| Kenttä | Arvo |
|--------|------|
| **Projekti** | CV-portfolio (QA-painotteinen) |
| **Dokumentti** | Esimerkkivirheraportit (Jira-tyyli) |
| **Laatija** | _Nimesi_ |
| **Päivitetty** | 2026-06-17 |

Alla olevat viisi raporttia ovat **esimerkkejä** ohjelmistotestaajan virheidenkirjaamisesta. Ne on kirjoitettu portfolion QA-projektin kontekstiin ja linkitetty testitapauksiin (`docs/test-cases.md`). Raportit 001–002 ja 004–005 kuvaavat **ennen/jälkeen**-tarinaa: havainto kirjattiin, korjattiin koodissa ja varmennettiin uudelleentestauksella. BUG-003 on avoin **sisältötehtävä** (korvaa paikkamerkki-CV).

## Yhteenveto

| Bug ID | Otsikko | Vakavuus | Prioriteetti | Tila |
|--------|---------|----------|--------------|------|
| BUG-001 | Yhteydenottolomake hyväksyy virheellisen sähköpostimuodon | High | P1 | Fixed |
| BUG-002 | Mobiilivalikkopainikkeella ei ole saavutettavaa nimeä | High | P1 | Fixed |
| BUG-003 | CV-latauslinkki avaa virheellisen URL-osoitteen | Medium | P2 | Deferred |
| BUG-004 | Toissijaisen painikkeen värikontrasti on riittämätön | High | P2 | Fixed |
| BUG-005 | Lomakkeen virheilmoitusta ei kuuluteta ruudunlukijalle | Medium | P2 | Fixed |

---

## BUG-001 — Yhteydenottolomake hyväksyy virheellisen sähköpostimuodon

| Kenttä | Arvo |
|--------|------|
| **Bug ID** | BUG-001 |
| **Title** | Yhteydenottolomake hyväksyy virheellisen sähköpostimuodon |
| **Severity** | High |
| **Priority** | P1 |
| **Environment** | Paikallinen kehitys — `http://localhost:3000` / Chrome 131 / Windows 11 |
| **Status** | Fixed |

### Preconditions
- Sovellus käynnissä (`npm run dev`).
- Käyttäjä on yhteydenotto-osiossa (`/#contact`).
- Build-versio ennen validointikorjausta (esimerkki varhaisesta testisyklistä).

### Steps to reproduce
1. Avaa sivu `/#contact`.
2. Täytä kenttä **Name**: `Test User`.
3. Täytä kenttä **Email**: `test@` (puutteellinen osoite, ei kelvollinen muoto).
4. Täytä kenttä **Message**: `This is a valid test message.`
5. Napsauta **Send message**.

### Actual result
Lomake lähetetään onnistuneesti. Käyttäjä näkee onnistumisviestin, vaikka sähköpostiosoite on virheellinen. API hyväksyy pyynnön ilman validointivirhettä.

### Expected result
Lomake estää lähetyksen. Sähköpostikentän alle näytetään virheilmoitus **Invalid email address**. API palauttaa status **400** ja `success: false`.

### Suggested fix
- Lisää jaetut validointisäännöt `src/lib/contactValidation.ts` -tiedostoon.
- Käytä samaa logiikkaa sekä `ContactForm.tsx` (asiakaspuoli) että `POST /api/contact` (palvelinpuoli).
- Päivitä Postman-testit ja Robot Framework -tapaus TC-010.

### Liittyvät artefaktit
- Testitapaus: **TC-010**
- Automaatio: `tests/postman/contact-api.postman_collection.json`, `tests/robot/portfolio.robot`
- Korjattu: validointi otettu käyttöön jaettuun kirjastoon

---

## BUG-002 — Mobiilivalikkopainikkeella ei ole saavutettavaa nimeä

| Kenttä | Arvo |
|--------|------|
| **Bug ID** | BUG-002 |
| **Title** | Mobiilivalikkopainikkeella ei ole saavutettavaa nimeä |
| **Severity** | High |
| **Priority** | P1 |
| **Environment** | Paikallinen kehitys — `http://localhost:3000` / Firefox 133 / Android-emulointi 375×667 |
| **Status** | Fixed |

### Preconditions
- Hamburger-valikko on toteutettu kapealle näytölle (< 900px).
- Ruudunlukija (NVDA / VoiceOver) on käytössä tai elementti tarkastetaan DevTools Accessibility -puussa.

### Steps to reproduce
1. Avaa portfoliosivu ja aseta näkymän leveydeksi 375px.
2. Etsi mobiilivalikon avauspainike (hamburger-kuvake).
3. Tarkastele painikkeen saavutettavaa nimeä (Accessibility tree / ruudunlukija).
4. Aktivoi painike näppäimistöllä (Tab + Enter).

### Actual result
Painike ilmoitetaan ruudunlukijalle vain nimellä **button** ilman kuvaavaa tekstiä. Käyttäjä ei tiedä, avaako painike päävalikon vai jonkin muun toiminnon. `aria-expanded` -tilaa ei päivitetä.

### Expected result
Painikkeella on selkeä saavutettava nimi, esim. `aria-label="Avaa päävalikko"`. Avatun/suljetun tilan yhteydessä `aria-expanded` on `true` / `false`. Ruudunlukija ilmoittaa painikkeen tarkoituksen ymmärrettävästi.

### Korjaus ja varmennus
- `Header.tsx`: `aria-label`, `aria-expanded`, `aria-controls="main-navigation-menu"`.
- Robot-testi TC-013. A11Y-001 Fixed.

### Liittyvät artefaktit
- **A11Y-001** · **TC-013**, **TC-014** · `tests/robot/portfolio.robot`

---

## BUG-003 — CV-latauslinkki avaa virheellisen URL-osoitteen

| Kenttä | Arvo |
|--------|------|
| **Bug ID** | BUG-003 |
| **Title** | CV-latauslinkki avaa virheellisen URL-osoitteen |
| **Severity** | Medium |
| **Priority** | P2 |
| **Environment** | Paikallinen kehitys — `http://localhost:3000` / Edge 131 / Windows 11 |
| **Status** | Deferred |

### Preconditions
- `public/cv.pdf` on paikkamerkkitiedosto; hakijan oma CV korvataan ennen julkaisua.

### Steps to reproduce
1. Siirry osioon `/#cv`.
2. Napsauta painiketta **Download CV (PDF)**.
3. Tarkista ladattu tiedosto ja sisältö.

### Actual result
Tekninen polku `/cv.pdf` toimii (HTTP 200), mutta tiedosto on **paikkamerkki**, ei hakijan lopullinen CV.

### Expected result
Linkki palauttaa hakijan oikean, ajantasaisen CV-PDF:n.

### Toimenpide
- Korvaa `public/cv.pdf` omalla CV:llä ennen työnhakua.
- Päivitä LinkedIn-URL `CvDownload.tsx` -tiedostossa.

### Liittyvät artefaktit
- Testitapaus: **TC-007**, **TC-015**
- Komponentti: `src/components/sections/CvDownload.tsx`

---

## BUG-004 — Toissijaisen painikkeen värikontrasti on riittämätön

| Kenttä | Arvo |
|--------|------|
| **Bug ID** | BUG-004 |
| **Title** | Toissijaisen painikkeen värikontrasti on riittämätön |
| **Severity** | High |
| **Priority** | P2 |
| **Environment** | Paikallinen kehitys — `http://localhost:3000` / Chrome 131 / Lighthouse + WAVE |
| **Status** | Fixed |

### Preconditions
- Teema: vaalea ja tumma tila.
- Saavutettavuustyökalut asennettu (Lighthouse, WAVE tai Axe).

### Steps to reproduce
1. Avaa etusivu.
2. Etsi toissijainen painike (luokka `.btn-secondary`).
3. Suorita kontrastitarkistus molemmissa teemoissa.

### Actual result (ennen korjausta)
Kontrastisuhde alitti WCAG 2.1 AA -vaatimuksen 4.5:1 normaalille tekstille.

### Expected result
Kontrastisuhde vähintään **4.5:1** kaikissa teemoissa.

### Korjaus ja varmennus
- Päivitetty `src/app/globals.css`: vahvemmat reunat, tummempi teksti, `--color-border-strong`.
- A11Y-002 merkitty Fixed. Uudelleenskannaus suositeltu ennen julkaisua.

### Liittyvät artefaktit
- Saavutettavuuslöydös: **A11Y-002**
- Testitapaus: **TC-014**

---

## BUG-005 — Lomakkeen virheilmoitusta ei kuuluteta ruudunlukijalle

| Kenttä | Arvo |
|--------|------|
| **Bug ID** | BUG-005 |
| **Title** | Lomakkeen virheilmoitusta ei kuuluteta ruudunlukijalle |
| **Severity** | Medium |
| **Priority** | P2 |
| **Environment** | Paikallinen kehitys — `http://localhost:3000` / Chrome 131 + NVDA / Windows 11 |
| **Status** | Fixed |

### Preconditions
- Ruudunlukija (NVDA tai VoiceOver) on käytössä.
- Yhteydenotto-osio on avattu.

### Steps to reproduce
1. Siirry osoitteeseen `/#contact`.
2. Jätä kaikki lomakekentät tyhjiksi.
3. Napsauta **Send message**.
4. Kuuntele ruudunlukijan ilmoituksia ja tarkista ARIA-attribuutit.

### Actual result (ennen korjausta)
Virheet näkyivät visuaalisesti, mutta ruudunlukija ei ilmoittanut niistä luotettavasti lähetyksen jälkeen.

### Expected result
Virheet kuulutetaan (`aria-live`, `role="alert"`), kentät merkitään `aria-invalid`, fokus siirtyy ensimmäiseen virheelliseen kenttään.

### Korjaus ja varmennus
- `ContactForm.tsx`: `aria-live="polite"` -alue, `role="alert"`, `aria-describedby`, fokus ensimmäiseen virheeseen.
- Robot-testit TC-009 läpäisty. Manuaalinen ruudunlukijatesti suositeltu ennen julkaisua.

### Liittyvät artefaktit
- Testitapaus: **TC-009**, **TC-014**
- Komponentti: `src/components/ContactForm.tsx`
- Saavutettavuus: A11Y-005 Fixed

---

## Raportointikäytäntö

| Kenttä | Ohje |
|--------|------|
| **Severity** | Vaikutus käyttäjään ja järjestelmään (Critical → Low) |
| **Priority** | Korjausjärjestys tiimin näkökulmasta (P1 → P3) |
| **Status** | Open → In Progress → Fixed / Won't Fix / Deferred |
| **Todisteet** | Liitä aina kuvakaappaus, video tai loki mahdollisuuksien mukaan |

Uudet virheet: kopioi pohja yllä olevasta rakenteesta tai käytä yksittäisiä tiedostoja kansiossa `docs/bug-reports/` tarvittaessa.

---

_Esimerkkiraportit on tarkoitettu osoittamaan virheidenkirjaamisen laatua ohjelmistotestaajan työnhakutilanteessa. Päivitä tilat ja ympäristöt oikeilla arvoilla oman testauksesi mukaan._
