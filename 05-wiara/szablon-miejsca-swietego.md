# Szablon artykułu — miejsce święte

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczym miejscu świętym. W modzie jest **15 miejsc świętych** Wiary Słowiańskiej (5 wschodnich, 5 zachodnich, 5 południowych). Po reformie wszystkie 15 należy do `wsl_slavic_unified`.
>
> Każde miejsce święte powinno mieć osobny plik:
> - wschodnie → `wiki/03-wiara/miejsca-swiete/wschodnie/<klucz-pl>.md`
> - zachodnie → `wiki/03-wiara/miejsca-swiete/zachodnie/<klucz-pl>.md`
> - południowe → `wiki/03-wiara/miejsca-swiete/poludniowe/<klucz-pl>.md`
>
> **Skąd brać dane:**
> 1. **Definicja miejsca** — `SE/common/religion/holy_site_types/wsl_holy_sites.txt` (klucz, county, parameter, character_modifier, flag).
> 2. **Przypisanie do odłamów** — `SE/common/religion/religion_types/wsl_slavic_faiths.txt` (sekcja `holy_sites = { ... }` w każdym odłamie).
> 3. **Tłumaczenia** — `SE/localization/polish/wsl_faiths_l_polish.yml` (nazwa PL, opis).
> 4. **Trigger kontroli** — `SE/common/scripted_triggers/wsl_triggers.txt` (`wsl_controls_shared_holy_sites_trigger`, `wsl_controls_regional_holy_sites_trigger`).
> 5. **Wanilijne dane hrabstwa** — `<CK3>/game/history/provinces/`, `<CK3>/game/common/landed_titles/` (właściciel startowy, baronie, terrain).
>
> **Konwencje:** polskie nazwy (Welbażd, Bârlad, Szerem, Ston, Tolna, Płock), bonusy podane konkretnie (`+5% pobożność`).

---

# {{Nazwa miejsca}} — {{podtytuł, np. „święte serce wschodniej Słowiańszczyzny"}}

{{Lead — czym to miejsce jest historycznie i mechanicznie, dlaczego gracz powinien o nie walczyć. 2–4 zdania.}}

---

## Karta miejsca

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Kijów}} |
| **Klucz w grze** | `{{wsl_site_kyiv}}` |
| **Hrabstwo** | `{{c_kiev}}` (województwo: {{...}}) |
| **Region geograficzny** | {{środkowy Dniepr, dzisiejsza Ukraina}} |
| **Region Walki Słowiańszczyzny** | {{wschodnia / zachodnia / południowa}} |
| **Należy do odłamów** | {{wsl_slavic_base, wsl_slavic_east, wsl_slavic_unified}} |
| **Bonus modyfikatora** | {{+8% pobożność, +5% prestiż}} |
| **Współrzędne ranga** | {{najświętsze / kluczowe / regionalne}} |
| **Plik definicji** | `SE/common/religion/holy_site_types/wsl_holy_sites.txt` |

---

## Co daje kontrola

Modyfikator `{{wsl_site_kyiv_modifier}}`:
- {{+8% miesięczna pobożność}}
- {{+5% miesięczny prestiż}}
- {{...}}

> Bonus odczuwa **każdy wyznawca odłamu**, który kontroluje to hrabstwo (poprzez własność lub feudalnego wasala).

### Wpływ na inne mechaniki
- **Reforma wszechsłowiańska:** {{wymagane do `wsl_controls_shared_holy_sites_trigger` / `wsl_controls_regional_holy_sites_trigger`}}
- **Walka Słowiańszczyzny:** {{zdobycie/utrata wpływa na katalizator → faza}}

---

## Status w 867

- **Właściciel startowy:** {{nazwa władcy, państwo, wiara}}
- **Wiara hrabstwa:** {{wschodnia/zachodnia/południowa słowiańska / chrześcijaństwo}}
- **Kultura hrabstwa:** {{...}}
- **W zasięgu którego bookmark-character:** {{lista postaci, które mają to miejsce w realnym zasięgu militarno-dyplomatycznym}}

---

## Znaczenie historyczne

{{2–4 zdania: czym to miejsce było w średniowieczu, jakie ośrodki kultu się tam znajdowały, źródła pisane (kroniki) i archeologiczne. Dla miejsc fikcyjnych modu zaznacz: „mod nadaje świętość temu hrabstwu na bazie wzmianek o…".}}

**Źródła:** {{kroniki, archeologia — jeśli istotne}}

---

## Strategia zdobycia

### Dla wyznawcy odłamu
- **Najkrótsza droga:** {{święta wojna, wojna o roszczenie, dziedziczenie}}
- **Sojusznicy:** {{kto pomoże — wspólna wiara, dynastia}}
- **Bariery:** {{kto blokuje — silny chrześcijański sąsiad, dynastyczne ślubowania}}

### Dla intruza (chrześcijanin)
- **Po co odbierać poganinom:** {{osłabienie ich pozycji w Walce, dochody}}
- **Konsekwencje:** {{wzmocnienie katalizatorów Welesa, ryzyko buntu lokalnej ludności}}

---

## Powiązane artykuły

- Odłam (lub odłamy) wiary: {{linki}}
- [Lista wszystkich miejsc świętych](miejsca-swiete.md)
- [Reforma wszechsłowiańska](wiara-wszechslowianska.md)
- [Walka Słowiańszczyzny](../04-walka-slowianczyzny/czym-jest-walka.md)
- Kultura hrabstwa: {{link}}

---

## Checklista redakcyjna

- [ ] Klucz, hrabstwo i modyfikatory zgadzają się z `wsl_holy_sites.txt`
- [ ] Przynależność do odłamów zgodna z `wsl_slavic_faiths.txt` (`holy_sites = { ... }`)
- [ ] Nazwa hrabstwa w polskiej formie (Welbażd nie Velbazhd)
- [ ] Bonusy podane konkretnymi liczbami z pliku gry
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Podlinkowane z [Miejsca święte — przegląd](miejsca-swiete.md) i z artykułu odpowiedniego odłamu wiary
