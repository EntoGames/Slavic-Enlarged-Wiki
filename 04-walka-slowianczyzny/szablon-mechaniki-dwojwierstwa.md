# Szablon artykułu — element systemu dwójwierstwa

> **Instrukcja redakcyjna**
> Szablon do artykułów opisujących pojedynczy element mechaniki dwójwierstwa. Wg architektury wiki są trzy:
>
> 1. Skala wiary prowincji (5 poziomów)
> 2. Przetrwanie tradycji (3 poziomy: żywa / gasnąca / zapomniana)
> 3. Cecha Dwuwiernego
>
> Lokalizacja: `wiki/04-walka-slowianczyzny/dwojwierstwo/<slug-pl>.md` (lub bezpośrednio w katalogu walki).
>
> **Skąd brać dane:**
> 1. **Modyfikatory prowincji** — `SSP/common/modifiers/ssp_modifiers.txt` (5 poziomów skali wiary, 3 tradycji).
> 2. **Cecha Dwuwiernego** — `SSP/common/traits/ssp_traits.txt`.
> 3. **Triggery skali** — `SSP/common/scripted_triggers/ssp_triggers.txt`.
> 4. **Eventy degradacji / odrodzenia** — `SSP/events/ssp_syncretic_events.txt`.
> 5. **Tłumaczenia** — `SSP/localization/polish/`.

---

# {{Nazwa mechaniki}}

{{Lead — co to jest, czego dotyczy (prowincja / postać / region), jaką rolę pełni w większej historii Walki. 2–3 zdania.}}

---

## Karta mechaniki

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Skala wiary prowincji}} |
| **Klucz** | `{{ssp_province_faith_scale}}` |
| **Plik** | `{{SSP/common/modifiers/ssp_modifiers.txt}}` |
| **Zakres** | {{prowincja / postać / region / dynastia}} |
| **Liczba poziomów / stanów** | {{5 / 3 / binarny}} |

---

## Poziomy / stany

### Poziom 1: **{{Głęboko słowiańska}}** (`{{ssp_deep_slavic}}`)
- **Efekty:** {{+30% wzrost rozwoju dla wyznawcy wsl_slavic_*, -50% konwersja wiary, modyfikator opinia chłopów +20}}
- **Wygląd na mapie:** {{ikona/kolor}}
- **Jak osiągnąć:** {{warunki}}

### Poziom 2: **{{Słowiańska}}** (`{{ssp_slavic}}`)
- {{j.w.}}

### Poziom 3: **{{Dwójwierna}}** (`{{ssp_dvoeverie}}`)
- {{j.w.}}

### Poziom 4: **{{Chrześcijańska}}** (`{{ssp_christian}}`)
- {{j.w.}}

### Poziom 5: **{{Głęboko chrześcijańska}}** (`{{ssp_deep_christian}}`)
- {{j.w.}}

---

## Przejścia między stanami

| Z → Do | Co wywołuje | Tempo |
|--------|-------------|-------|
| {{1 → 2}} | {{święta wojna wygrana przez chrześcijanina}} | {{natychmiast}} |
| {{2 → 3}} | {{kontrola chrześcijanina przez 50 lat}} | {{pulse co 5 lat}} |
| {{3 → 4}} | {{decyzja synkretyczna nieaktywowana 100 lat}} | {{...}} |
| {{...}} | {{...}} | {{...}} |

### Eventy degradacji / odrodzenia
- `{{ssp_syncretic.0010}}` — {{degradacja: zapomnienie tradycji}}
- `{{ssp_syncretic.0020}}` — {{odrodzenie: powrót wołchwa}}

---

## Wpływ na inne mechaniki

- **Walka Słowiańszczyzny:** {{jaki katalizator i o ile pcha}}
- **Konwersja wiary:** {{modyfikator szybkości}}
- **Cecha Dwuwiernego:** {{jak ten poziom wpływa na nadawanie cechy}}
- **Holy sites:** {{czy wpływa na bonus miejsca świętego}}

---

## Jak gracz może na to wpływać

### Pchać w stronę pogańską
- {{decyzje: Ochrona Tradycji, Wysłanie Wołchwów, …}}
- {{eventy z opcją pogańską}}

### Pchać w stronę chrześcijańską
- {{decyzje: Chrzest Polityczny, fundacja kościoła, …}}
- {{eventy z opcją chrześcijańską}}

### Utrzymać w Dwójwierstwie
- {{Proklamacja Synkretyzmu, balansowanie eventów}}

---

## Kontekst historyczny

{{2–3 zdania: jak mechanika oddaje realny fenomen dwójwierstwa (Dvoeverie) — synkretyzmu słowiańskiego, gdzie ludzie chodzili do cerkwi i równocześnie świętowali Kupałę, czcili św. Mikołaja jako odbicie Welesa itp.}}

Zobacz: [Dwójwierstwo — kontekst historyczny](../09-historia/dwojwierstwo.md)

---

## Powiązane artykuły

- [System dwójwierstwa — przegląd](dwojwierstwo.md)
- [Walka Słowiańszczyzny](czym-jest-walka.md)
- [Zakończenie: Trwałe Dwójwierstwo](zakonczenia.md)
- Pozostałe elementy mechaniki dwójwierstwa: {{linki}}
- Powiązane decyzje: {{linki}}

---

## Checklista redakcyjna

- [ ] Klucze poziomów i efekty zgadzają się z `ssp_modifiers.txt`
- [ ] Przejścia między poziomami opisane na bazie triggerów i on_action
- [ ] Eventy degradacji / odrodzenia mają poprawne ID
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Podlinkowane z [dwojwierstwo.md](dwojwierstwo.md)
