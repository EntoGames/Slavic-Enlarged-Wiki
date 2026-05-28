# Szablon artykułu — zakończenie Walki Słowiańszczyzny

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczym zakończeniu Walki. W modzie są **3 zakończenia**:
>
> 1. Odrodzenie Słowiańszczyzny (pogaństwo triumfuje)
> 2. Triumf Chrześcijaństwa (nowa wiara wygrywa)
> 3. Trwałe Dwójwierstwo (synkretyzm)
>
> Każde zakończenie powinno mieć osobny plik w `wiki/04-walka-slowianczyzny/zakonczenia/<klucz-pl>.md` (struktura do założenia) lub jako sekcja w `zakonczenia.md`.
>
> **Skąd brać dane:**
> 1. **Definicja zakończeń** — `SSP/common/struggle/struggles/ssp_slavic_struggle.txt` (sekcja `ending_decisions = { ... }`).
> 2. **Decyzje zakończenia** — `SSP/common/decisions/ssp_decisions.txt` (decyzje z `is_shown_in_encyclopedia = no` i `decision_to_end_struggle`).
> 3. **Modyfikatory permanentne** — `SSP/common/modifiers/ssp_modifiers.txt` (modyfikatory regionalne nadawane po zakończeniu).
> 4. **Triggery wymagań** — `SSP/common/scripted_triggers/ssp_triggers.txt`.
> 5. **Tłumaczenia** — `SSP/localization/polish/`.

---

# {{Nazwa zakończenia}}

{{Lead — co oznacza to zakończenie dla świata, dla ludzi, dla mapy. 2–4 zdania pisane jako epickie zwieńczenie historii.}}

> *{{Cytat narracyjny z lokalizacji decyzji — opcjonalne, np. „I tak skończyła się Walka — nie ogniem ani mieczem, lecz długim wieczorem przy ogniu, w którym chrześcijański krzyż wisiał obok wiązanki ziół Marzanny."}}*

---

## Karta zakończenia

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Trwałe Dwójwierstwo}} |
| **Klucz decyzji** | `{{ssp_end_struggle_dvoeverie}}` |
| **Z jakich faz dostępne** | {{Harmonia Lady, opcjonalnie Otchłań Welesa}} |
| **Kto może wykonać** | {{władca o tytule co najmniej księstwa w regionie Walki, wyznawca słowiański LUB chrześcijanin z cechą Dwuwierny}} |
| **Plik definicji** | `SSP/common/decisions/ssp_decisions.txt` |

---

## Wymagania

### Twarde (gating)
- {{Faza Walki: `{{phase_harmonia_lady}}`}}
- {{Tytuł co najmniej księstwa w regionie `custom_slavia`}}
- {{Piety ≥ X}} lub {{Prestige ≥ Y}}
- {{Kontrola/wpływy: np. „kontroluje przynajmniej 1 miejsce święte każdego z trzech regionów"}}
- {{Próg ludności: np. `wsl_pagan_slavs_threshold_trigger` ≥ 30%}}

### Miękkie (rekomendowane do sukcesu)
- {{Sojusze dynastyczne z drugą stroną}}
- {{Cecha Dwuwierny u głównej linii dynastycznej}}
- {{...}}

---

## Efekty po wykonaniu

### Na całą Walkę
- Walka kończy się ostatecznie — {{flagi `struggle_ended` itp.}}
- Modyfikator regionalny `{{ssp_modifier_dvoeverie_settled}}`: {{+5 kontrola, +0.2 rozwój, -50% konflikty religijne}}

### Na wykonującego
- {{nagrody: +1000 prestiż, +500 pobożność, cecha „Twórca Dwóch Wiar", modyfikator dynastyczny}}

### Na mapę i wiary
- {{co dzieje się z poszczególnymi odłamami: czy przetrwają? czy łączą się? jakie nowe wiary powstają?}}
- {{co dzieje się z miejscami świętymi: tracą bonus, zmieniają właściciela, stają się shared}}
- {{co z chrześcijaństwem w regionie: trwała tolerancja, dalsza ekspansja, ograniczenie}}

### Na mechanikę dwójwierstwa
- {{czy `tradycja żywa/gasnąca/zapomniana` zatrzymuje się w obecnym stanie?}}
- {{czy cecha Dwuwierny zaczyna być dziedziczna?}}

---

## Co utrudnia osiągnięcie

- **Konkurencyjne katalizatory:** {{co aktywnie pcha Walkę w inne zakończenie}}
- **Wrogowie zewnętrzni:** {{Bizancjum/HRE wymuszą Triumf Chrześcijaństwa, jeśli zdobędą miejsca święte}}
- **Wewnętrzni fanatycy:** {{wasale z cechą Gorliwy mogą blokować decyzję eventami}}

---

## Strategia osiągnięcia

### Krok po kroku
1. {{Faza 1 — np. wyjść z `phase_burza_peruna` przez konsekwentne wybory pokojowe}}
2. {{Faza 2 — zdobyć Harmonię Lady na ≥ 20 lat dla zebrania piety/prestige}}
3. {{Faza 3 — sojusz małżeński z chrześcijańskim sąsiadem, kilka edyktów synkretycznych}}
4. {{Faza 4 — kontrola wymaganych miejsc świętych}}
5. {{Faza 5 — wykonanie decyzji}}

### Pułapki
- {{np. „nie konwertuj wszystkich wasali na słowiańską — zachowaj mieszankę"}}
- {{...}}

---

## Kontrast z pozostałymi zakończeniami

| Wymiar | {{To zakończenie}} | {{Zakończenie 2}} | {{Zakończenie 3}} |
|--------|--------------------|--------------------|--------------------|
| Wiara dominująca | {{mieszana}} | {{słowiańska}} | {{chrześcijańska}} |
| Modyfikator regionu | {{stabilność}} | {{rozwój}} | {{podatki}} |
| Trudność | {{wysoka}} | {{średnia}} | {{niska}} |
| Trwałość | {{trwałe}} | {{narażone na krucjaty}} | {{narażone na bunty}} |

---

## Kontekst historyczny

{{2–3 zdania: jaki realny proces historyczny inspirował to zakończenie. Np. dla Dwójwierstwa: średniowieczne ruskie ludowe trwanie kultu Welesa pod św. Mikołajem; dla Odrodzenia: alternatywna historia po Arkonie; dla Triumfu: rzeczywistość historyczna.}}

---

## Powiązane artykuły

- [Walka Słowiańszczyzny — czym jest](czym-jest-walka.md)
- Fazy z których to osiągniesz: {{linki}}
- Decyzje wspierające: {{linki do `wiki/05-decyzje/`}}
- [System dwójwierstwa](dwojwierstwo.md) (jeśli zakończenie wykorzystuje tę mechanikę)
- Pozostałe zakończenia: {{linki}}
- Poradnik: {{link do `wiki/08-poradniki/` jeśli istnieje}}

---

## Checklista redakcyjna

- [ ] Klucz decyzji, wymagania i efekty zgadzają się z `ssp_decisions.txt`
- [ ] Modyfikatory regionalne zgadzają się z `ssp_modifiers.txt`
- [ ] Triggery dostępności fazy / piety / prestige zweryfikowane w pliku
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Podlinkowane z [zakonczenia.md](zakonczenia.md) i z [czym-jest-walka.md](czym-jest-walka.md)
