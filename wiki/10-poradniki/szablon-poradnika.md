# Szablon artykułu — poradnik (przewodnik gracza)

> **Instrukcja redakcyjna**
> Szablon do tworzenia poradników krok-po-kroku. Poradniki są subiektywne — opisują *jedną* sprawdzoną drogę, nie wszystkie możliwe.
>
> Lokalizacja: `wiki/08-poradniki/<slug-pl>.md`.
>
> **Co odróżnia poradnik od artykułu encyklopedycznego:**
> - Pisany w 2. osobie („zrób X", „wybierz Y")
> - Konkretna sytuacja startowa (data, postać, kultura)
> - Sekwencyjne kroki z punktami decyzyjnymi
> - Liczby i progi z plików moda, ale przepuszczone przez doświadczenie ze rozgrywki
> - Zakłada, że czytelnik zna podstawy CK3 i podstawowe artykuły wiki (Walka, fazy, wiara)
>
> **Skąd brać dane:**
> - Wymagania mechaniczne — z plików moda (decyzje, triggery, eventy)
> - Liczby i progi — z `SE/common/scripted_triggers/`, `SSP/common/scripted_triggers/`
> - Strategie — z rzeczywistej rozgrywki + analizy plików, **nie zmyślaj**
> - Linki do encyklopedycznych artykułów wiki dla pojęć

---

# Jak {{cel poradnika}} — przewodnik krok po kroku

{{Lead — komu poradnik jest dedykowany, jaki jest cel, ile zajmuje (lata gry / liczba pokoleń), trudność (łatwy / średni / trudny / hardcore).}}

---

## Karta poradnika

| Pole | Wartość |
|------|---------|
| **Cel** | {{Reforma Wszechsłowiańska do 950 r.}} |
| **Postać startowa** | {{Świętopełk, książę Moraw (bookmark 867)}} → [profil postaci]({{../07-scenariusze/postacie/swietopelk.md}}) |
| **Bookmark** | {{Slavic Struggles — 867}} |
| **Wymagane DLC** | {{Fate of Iberia}} |
| **Wymagane mody** | {{Slavic Enlarged, Slavic Enlarged: Slavic Struggle of Perun}} |
| **Trudność** | {{średnia}} |
| **Szacowany czas** | {{2–3 pokolenia (~80 lat gry)}} |
| **Główne ryzyko** | {{wojna z Frankami Wschodnimi, ekskomunika Borysa I}} |

---

## Założenia wstępne

- {{Zakładamy grę bez mods bojowych typu Battle Royale}}
- {{Domyślne ustawienia trudności}}
- {{Tej drogi nie da się przejść bez DLC Royal Court? — zaznacz wymagania}}

---

## Etap 1 — {{Stabilizacja (lata 867–880)}}

### Cele etapu
- {{Zabezpieczyć stolicę i 1 miejsce święte}}
- {{Sojusz z 2+ sąsiadami}}

### Krok po kroku
1. **Pierwsze 5 lat —** {{co robić od razu po starcie. Konkretne akcje: hooki dyplomatyczne, śluby, claim presses.}}
2. **Lata 5–10 —** {{...}}
3. **Punkt decyzyjny: {{nazwa}}** — {{jeśli A, idź A, jeśli B, idź B}}

### Kluczowe wybory
- **Event {{xxx}}** → wybierz opcję {{Y}}, bo {{...}}
- **Decyzja {{xxx}}** → podjąć przed {{rokiem}}, inaczej {{konsekwencja}}

### Sygnały, że jesteś na dobrej drodze
- {{Posiadasz X piety w 870 r.}}
- {{Brak aktywnych roszczeń przeciw tobie}}

### Co robić, jeśli idzie źle
- {{plan B — np. „jeśli straciłeś sojusz z Bułgarią, skup się na Połabian"}}

---

## Etap 2 — {{Ekspansja (880–910)}}

{{Powtórz strukturę: cele → kroki → wybory → sygnały → plan B}}

---

## Etap 3 — {{Konsolidacja (910–940)}}

{{j.w.}}

---

## Etap 4 — {{Finał (940–950)}}

### Warunki do wykonania głównej decyzji
- {{Piety ≥ 2000}}
- {{Prestige ≥ 1500}}
- {{Kontrola wymaganych miejsc świętych}}
- {{...}}

### Sekwencja końcowa
1. {{Tydzień przed: zebrać złoto na ewentualne wojny obronne}}
2. {{Wykonać decyzję `{{se_reform_panslavic_faith}}`}}
3. {{Przygotować się na falę roszczeń / krucjat}}

---

## Co po osiągnięciu celu

- {{Co dalej w rozgrywce: utrzymanie tytułu, kolejne wyzwania, „endgame plus"}}
- {{Achievement / cel długoterminowy: np. budowa imperium, drugie pokolenie reformatorów}}

---

## Częste pułapki

| Pułapka | Objaw | Jak uniknąć |
|---------|-------|-------------|
| {{Wczesna ekskomunika}} | {{wasale buntują się masowo}} | {{nie atakuj chrześcijan przed konsolidacją}} |
| {{Faza Welesa za wcześnie}} | {{kara do podatków, ucieczka kapłanów}} | {{aktywnie podejmuj decyzje synkretyczne}} |
| {{...}} | {{...}} | {{...}} |

---

## Skróty i triki

- {{Trik 1 — np. „zaręczyny córki z dwoma kandydatami daje +2 hook ÷ dyplomaty"}}
- {{Trik 2 — np. „w fazie Lady eventy są tańsze, podejmuj decyzje wtedy"}}

---

## Wariant: {{nazwa}}

Jeżeli wolisz {{styl X}}, zamień Etap 2 na:
- {{alternatywne podejście}}

---

## Powiązane artykuły

- Postać startowa: {{link do profilu postaci}}
- Decyzja końcowa: {{link}}
- Walka Słowiańszczyzny: [Czym jest](../04-walka-slowianczyzny/czym-jest-walka.md) · [Fazy](../04-walka-slowianczyzny/fazy/)
- Wiara: {{link do artykułu o wierze}}
- Inne poradniki: {{linki — np. „Jak osiągnąć Trwałe Dwójwierstwo"}}

---

## Checklista redakcyjna

- [ ] Wymagania mechaniczne (piety, prestige, miejsca święte) zgadzają się z plikami moda
- [ ] ID eventów i decyzji są poprawne — sprawdzone w `events/` i `decisions/`
- [ ] Liczby progów (cooldowny, koszty) zgadzają się z plikiem gry
- [ ] Poradnik faktycznie został zagrany do końca przed publikacją (lub jasno oznaczone „teoretyczny")
- [ ] Linki do encyklopedycznych artykułów wiki działają
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Podlinkowane z [wiki/08-poradniki/README.md](README.md) i z profilu postaci
