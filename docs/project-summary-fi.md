# CV Portfolio QA Automation Project — suomenkielinen yhteenveto

| Kenttä | Arvo |
|--------|------|
| **Projekti** | CV Portfolio QA Automation Project |
| **Kohdeyleisö** | Rekrytoijat, esihenkilöt, työnhakijat Suomessa |
| **Kieli** | Tämä yhteenveto suomeksi; tekninen dokumentaatio englanniksi |

---

## Mikä tämä on?

Henkilökohtainen CV-portfoliosivusto, jota käsitellään **testattavana tuotteena**. Repositorio sisältää sekä Next.js-sovelluksen että täydellisen QA-artefaktisarjan: testisuunnitelman, manuaaliset testitapaukset, virheraportit, UI- ja API-automaation, kuormitussuunnitelman, saavutettavuusdokumentaation ja GitHub Actions -CI-putken.

Projekti on suunnattu **ohjelmistotestaajan / QA-asiantuntijan** työnhakuun.

---

## Mitä projekti osoittaa?

| Osa-alue | Toteutus |
|----------|----------|
| Manuaalinen testaus | 15 testitapausta, testisuunnitelma, virheraportit |
| UI-automaatio | Robot Framework — 16 savutestiä |
| API-testaus | Postman / Newman — 7 pyyntöä |
| Kuormitustestaus | JMeter-suunnitelma |
| Saavutettavuus | Lighthouse, Axe, WAVE -työkulut; WCAG 2.1 AA -tavoite |
| CI/CD | GitHub Actions jokaisella pushilla |
| Lokalisointi | Englanti (oletus) ja suomi — EN/FI-vaihto käyttöliittymässä |

---

## Käyttöliittymän kieli (EN / FI)

Sivuston **käyttöliittymä** on käännetty suomeksi ja englanniksi yksinkertaisella käännössanakirjalla (`src/lib/i18n/`). Oletuskieli on **englanti**. Kielen voi vaihtaa otsikon EN/FI-painikkeilla.

Käännetty sisältö kattaa navigoinnin, kaikki osiot, lomakkeen, validointiviestit ja painikkeet. `html lang` -attribuutti päivittyy valitun kielen mukaan.

**Tekninen dokumentaatio** (`docs/`, `tests/`, `README.md`) pysyy englanniksi, jotta kansainväliset rekrytoijat ja työkaludokumentaatio pysyvät yhdenmukaisina. Suomenkielinen yhteenveto on tässä tiedostossa.

---

## Keskeiset tiedostot

| Tiedosto | Sisältö |
|----------|---------|
| `README.md` | Projektin pääkuvaus (englanti) |
| `docs/test-plan.md` | Testisuunnitelma |
| `docs/test-cases.md` | Manuaaliset testitapaukset |
| `docs/test-summary-report.md` | Testausyhteenveto |
| `docs/project-descriptions.md` | Valmiit kuvaukset CV:hen ja LinkedIniin |
| `docs/traceability-matrix.md` | Vaatimus → testi → automaatio |

---

## Nopea arviointi rekrytoijalle

1. Avaa live-sivu tai `npm run dev` → `http://localhost:3000`
2. Vaihda kieli **FI** ja tarkista suomenkielinen sisältö
3. Lue `docs/test-summary-report.md`
4. Tarkista GitHub Actions — vihreä CI-ajo
5. Selaa `tests/` — automaatio ja QA-työkalut

---

## Yhteystiedot ja seuraavat askeleet

- Korvaa `public/cv.pdf` omalla CV:llä
- Päivitä LinkedIn-URL `CvDownload.tsx` -tiedostossa
- Aja Lighthouse + Axe ja tallenna tulokset ennen lopullista hakua

_Projekti osoittaa käytännön laadunvarmistusosaamista — ei pelkkää frontend-kehitystä._
