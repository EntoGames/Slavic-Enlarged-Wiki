# Szablon artykułu — faza Walki Słowiańszczyzny

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczej fazie Walki. W modzie jest **5 faz**, każda patronowana przez słowiańskie bóstwo:
>
> 1. Błogosławieństwo Swarożyca (faza startowa 867)
> 2. Burza Peruna
> 3. Harmonia Lady
> 4. Otchłań Welesa
> 5. Zmierzch Marzanny
>
> Każda faza ma osobny plik w `wiki/04-walka-slowianczyzny/fazy/<klucz-pl>.md`.
>
> **Skąd brać dane:**
> 1. **Definicja walki i faz** — `SSP/common/struggle/struggles/ssp_slavic_struggle.txt` (sekcje `phases = { ... }`, `phase_*` z efektami `involved`/`interloper`).
> 2. **Katalizatory przesuwające do/z fazy** — `SSP/common/struggle/catalysts/ssp_catalysts.txt`.
> 3. **Tłumaczenia** — `SSP/localization/polish/ssp_*_l_polish.yml`.
> 4. **Wydarzenia związane z fazą** — `SSP/events/ssp_struggle_events.txt` (eventy ograniczone `current_struggle_phase = phase_*`).
> 5. **Decyzje dostępne tylko w tej fazie** — `SSP/common/decisions/ssp_decisions.txt` (triggery sprawdzające fazę).
>
> **Konwencje:** polskie nazwy bóstw i faz, efekty mechaniczne podane konkretnymi liczbami, opis charakteru fazy literacki ale krótki.

---

# {{Nazwa fazy po polsku}}

**Bóstwo patronujące:** {{Perun — bóg gromu, błyskawic i wojny}}

**Klucz w grze:** `{{phase_burza_peruna}}` (lub odpowiedni)

**Charakter fazy:** {{2–3 zdania literackiej narracji o tym, jak ta faza wygląda „od środka świata" — co się dzieje, czemu jest dramatyczna, jak ludzie ją odczuwają.}}

---

## Efekty na rozgrywkę

### Dla **zaangażowanych** (wyznawcy słowiańskich odłamów)
- {{+15% pościg armii}}
- {{+3 przewaga w bitwach}}
- {{+30% uzupełnianie pospolitego ruszenia (wspólna wiara)}}
- {{-25% koszt zakonów świętych}}
- {{-15 opinia innej wiary}}
- {{-20% wzrost rozwoju}}

### Dla **intruzów** (chrześcijanie w regionie `custom_slavia`)
- {{-30% do podatków}}
- {{Niebezpieczny teren — modyfikator ruchu armii}}
- {{...}}

### Modyfikatory globalne fazy
- {{efekty na cały region `custom_slavia` niezależnie od strony}}

---

## Jak wejść w tę fazę

Katalizatory pchające Walkę w stronę tej fazy (z `ssp_catalysts.txt`):

| Katalizator | Waga | Wyzwala |
|-------------|------|---------|
| {{Zniszczenie świętego gaju przez chrześcijanina}} | {{+X}} | {{event/akcja w grze}} |
| {{Pogańska święta wojna}} | {{+X}} | {{...}} |
| {{...}} | {{...}} | {{...}} |

Zobacz pełną listę: [Katalizatory](../katalizatory.md)

---

## Jak z niej wyjść

Faza może przejść w:
- **{{Błogosławieństwo Swarożyca}}** — gdy {{warunki, np. „poganie zwyciężają i odzyskują 3+ miejsca święte"}}
- **{{Harmonia Lady}}** — gdy {{warunki}}
- **{{Otchłań Welesa}}** — gdy {{warunki}}

{{Jeżeli faza ma „pułapkę" — zaznacz. Niektóre fazy są trudne do opuszczenia (np. Zmierzch Marzanny ma jedno wyjście — endgame).}}

---

## Charakterystyczne wydarzenia

Z `SSP/events/ssp_struggle_events.txt` — eventy ograniczone do tej fazy:

### {{Tytuł wydarzenia 1}} (`{{ssp_struggle.0001}}`)
{{1–2 zdania kontekstu — co się dzieje narracyjnie + jakie ma opcje gracza.}}

- **{{Opcja A}}** — {{efekt mechaniczny + kierunek przesuwania Walki}}
- **{{Opcja B}}** — {{j.w.}}

### {{Tytuł wydarzenia 2}} (`{{ssp_struggle.0002}}`)
{{...}}

Pełne opisy: zobacz [Wydarzenia faz](../../06-wydarzenia/)

---

## Dostępne decyzje

Decyzje z `ssp_decisions.txt` z triggerem `current_struggle_phase = {{phase_*}}`:

- **{{Nazwa decyzji}}** — {{krótki efekt}} → [pełen opis]({{../../05-decyzje/...md}})
- **{{...}}**

---

## Dostępne zakończenia

Z tej fazy można przeprowadzić zakończenia:
- **{{Odrodzenie Słowiańszczyzny}}** — {{wymagania w skrócie}} → [pełen opis]({{../zakonczenia.md}})
- **{{Trwałe Dwójwierstwo}}** — {{wymagania w skrócie}}
- {{lub: „Z tej fazy nie da się przeprowadzić zakończenia — najpierw trzeba przejść do …"}}

---

## Strategia dla gracza

### Jeżeli jesteś **zaangażowanym**
- **W tej fazie warto:** {{co robić — np. wzywać święte wojny, fortyfikować gaje, zbierać sojuszników}}
- **Czego unikać:** {{np. „nie wchodź w długie wojny obronne — kara do rozwoju cię wykrwawi"}}

### Jeżeli jesteś **intruzem**
- {{ jak przetrwać presję, kiedy się wycofać, kiedy zaatakować}}

### Jak wymusić wyjście z fazy (jeśli ci nie odpowiada)
- {{konkretne akcje gracza pchające katalizatory w pożądanym kierunku}}

---

## Kontekst mitologiczny

{{2–3 zdania o tym, kim jest patronujące bóstwo w słowiańskiej mitologii, czemu mod łączy je akurat z tą fazą, jakie ma atrybuty narracyjne.}}

Zobacz: [Bóstwa i mitologia](../../09-historia/bostwa-i-mitologia.md)

---

## Powiązane artykuły

- [Walka Słowiańszczyzny — czym jest](../czym-jest-walka.md)
- [Katalizatory](../katalizatory.md)
- [Zakończenia Walki](../zakonczenia.md)
- Pozostałe fazy: {{linki do 4 pozostałych w tym katalogu}}
- Wydarzenia tej fazy: {{linki}}
- Decyzje dostępne w tej fazie: {{linki}}

---

## Checklista redakcyjna

- [ ] Klucz fazy, efekty involved/interloper i przejścia zgadzają się z `ssp_slavic_struggle.txt`
- [ ] Lista katalizatorów odzwierciedla `ssp_catalysts.txt`
- [ ] Wydarzenia i decyzje rzeczywiście mają trigger na tę fazę
- [ ] Liczby modyfikatorów zgodne z plikiem gry
- [ ] Nazwy bóstw po polsku
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Podlinkowane z [czym-jest-walka.md](../czym-jest-walka.md) i [katalizatory.md](../katalizatory.md)
