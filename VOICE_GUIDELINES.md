---
project: Slavic Enlarged Wiki
generated: 2026-05-27
sources:
  - wiki/ARCHITECTURE.md
  - wiki/index.md
  - wiki/01-wprowadzenie/o-modach.md
  - wiki/02-kultury/szablon-kultury.md
  - wiki/04-walka-slowianczyzny/czym-jest-walka.md
  - wiki/04-walka-slowianczyzny/fazy/burza-peruna.md
  - wiki/04-walka-slowianczyzny/fazy/szablon-fazy.md
  - wiki/06-wydarzenia/szablon-wydarzenia.md
  - wiki/07-scenariusze/postacie/siemowit.md
  - wiki/03-wiara/przeglad-wiary.md
confidence: high
---

# Wytyczne głosu i stylu — Slavic Enlarged Wiki

> Dokument opisuje, jak pisać spójnie w całej wiki modów **Slavic Enlarged** i **Slavic Enlarged: Slavic Struggle of Perun**. Używaj go przed napisaniem każdego nowego artykułu i przy przeglądaniu redakcyjnym istniejących.

---

## Wizja i cel

Wiki jest **przewodnikiem po świecie słowiańskiego pogaństwa w CK3, pisanym z perspektywy gracza**. Nie jest suchą encyklopedią mechanik ani akademickim opracowaniem historycznym — łączy oba wymiary w służbie jednego pytania: *„co to dla mnie znaczy jako gracz?"*

Czytelnik przychodzi z jednym z trzech powodów:
1. Chce zrozumieć, co mod zmienia i czy warto go zainstalować.
2. Aktywnie gra i szuka danych (efekty, liczby, triggery).
3. Interesuje się historycznym i kulturowym kontekstem tego, co widzi w grze.

Dobry artykuł wiki odpowiada na wszystkie trzy pytania — w tej kolejności.

---

## Tabela tożsamości — Jesteśmy / Nie jesteśmy

| Jesteśmy | Nie jesteśmy |
|----------|--------------|
| **Graczokierunkowi** — piszemy dla osoby przy klawiaturze, nie dla badacza | Neutralną encyklopedią z lotu ptaka |
| **Narracyjni i mechaniczni naraz** — dramat świata + twarde liczby | Wyłącznie suchym listingiem danych |
| **Historycznie zakorzenieni** — cytujemy źródła, wyjaśniamy realia | Fikcją fantasy bez historycznego pokrycia |
| **Precyzyjni** — klucze gry, pliki, modyfikatory podane dokładnie | Przybliżeni lub zgadujący |
| **Polskojęzyczni** — polska forma nazw, polska gramatyka | Angielskim opisem z polskimi wstawkami |
| **Przystępni** — bez żargonu akademickiego | Technicznymi manualami dla modderów |
| **Zwięźli** — lead w 2–4 zdaniach, bez intro „W tym artykule omówimy…" | Rozciągniętymi wstępami i powtórzeniami |

---

## Stałe głosu (Voice Constants)

Następujące cechy są niezmienne we wszystkich typach artykułów:

### 1. Polska forma imion i nazw własnych
Zawsze używaj polskiej formy:
- Kultury: **Krywicze**, **Ślężanie**, **Polanie lechiccy** (nie: Krivichians, Slezians)
- Bóstwa: **Perun, Weles, Swarożyc, Lada, Marzanna** (nie: ang. transkrypcje)
- Fazy: pełna polska nazwa — **Burza Peruna**, **Otchłań Welesa** (nie skróty ani ang. klucze)
- Mody: zawsze **Slavic Enlarged** i **Slavic Enlarged: Slavic Struggle of Perun** (skróty SE/SSP tylko w ścieżkach plików, nie w treści artykułu)

### 2. Perspektywa gracza
Artykuły opisują mechaniki przez pryzmat skutków dla gracza. Zamiast:
> ❌ „Faza Burza Peruna ma modyfikator `struggle_phase_burza_peruna_involved_modifier`."

Piszemy:
> ✅ „W Burzy Peruna twoi pogańscy wasale walczą chętniej (+15% pościg, +3 przewaga), ale wiara spowalnia wzrost domeny (-20% rozwoju)."

### 3. Weryfikowalność danych mechanicznych
Wszystkie liczby (procenty, modyfikatory, triggery, klucze gry) muszą być wzięte bezpośrednio z plików moda. Jeśli danych nie dało się zweryfikować, zaznacz:
```
> *do sprawdzenia w grze*
```

### 4. Historyczna rzetelność ze źródłami
Każde twierdzenie historyczne wymaga wskazania źródła. Format:
```
**Źródła:** Gall Anonim, *Kronika polska* (ok. 1113); Thietmar z Merseburga, *Kronika* (ok. 1018)
```
Dla mniej znanych faktów wystarczy: „według latopisu kijowskiego" lub „dane archeologiczne z X".

### 5. Spójność strukturalna
Każdy artykuł danego **typu** (kultura, wydarzenie, faza, scenariusz) ma identyczną sekwencję sekcji — zgodnie z szablonem w `wiki/`. Nie skracaj struktury, nie przestawiaj sekcji. Sekcja pusta = `> *dane do uzupełnienia*`.

---

## Ton według kontekstu (Tone Flexes)

Ton zmienia się zależnie od rodzaju artykułu i sekcji.

| Kontekst | Ton | Cechy | Przykład |
|----------|-----|-------|---------|
| Lead artykułu (każdy typ) | Narracyjny, zwięzły | Wciąga, 2–4 zdania, bez liczb | *„Siemowit rządzi niewielkim plemieniem Polan z Gniezna — otoczony pokrewnymi kulturami lechickimi, ma naturalną bazę do jednoczenia."* |
| Opis mechanik i efektów | Techniczny, tabelaryczny | Konkretne liczby, bez ozdobników | `+15% pościg armii`, `-25% koszt zakonów świętych` |
| Charakter fazy / opis wiary | Literacki, dramatyczny | Atmosfera, napięcie | *„Święte gaje płoną, wojownicy chwytają za broń, a kompromis nie wchodzi w grę."* |
| Kontekst historyczny | Akademicki, ostrożny | Tryb przypuszczający, źródła | *„Mod traktuje Siemowita jako historyczną postać startową — główna licentia poetica to przypisanie mu tytułu księcia."* |
| Porady dla gracza | Praktyczny, bezpośredni | Imperatywy, „warto / unikaj" | *„Skup się na jednoczeniu Polan. Unikaj konfliktów z zachodem, dopóki nie zbudujesz bazy siły."* |
| Checklista / instrukcja redakcyjna | Suchy, listy | Tylko fakty, zero narracji | `[ ] Klucze zgadzają się z plikiem gry` |

---

## Terminologia — słownik pojęć wiki

Używaj konsekwentnie tych form. Klucz gry podaj przy pierwszym użyciu w backtick.

| Pojęcie | Poprawna forma PL | Klucz gry | Uwaga |
|---------|------------------|-----------|-------|
| Walka (Struggle) | **Walka Słowiańszczyzny** | region `custom_slavia` | Pełna nazwa przy pierwszym wystąpieniu; potem „Walka" |
| Involved / Interloper | **zaangażowany / intruz** | `involved` / `interloper` | Zawsze tłumaczyć |
| Etos | **Wspólnotowy / Stoicki / Dworski / Wojowniczy / Biurokratyczny** | `ethos_communal` itp. | Polska nazwa + klucz |
| Tradycja | polska nazwa z lokalizacji | `tradition_*` | Z pliku `se_cultures_l_polish.yml` |
| Miejsce święte | **miejsce święte** (małe litery) | `holy_site` | Nie „Miejsce Święte" |
| Wiara wszechsłowiańska | **Wiara Wszechsłowiańska** (wielkie litery jako nazwa własna) | — | |
| Dwójwierstwo | **dwójwierstwo** lub **Dvoeverie** | — | Oba dopuszczalne; w tekstach historycznych preferuj „dwójwierstwo" |
| Wołchw (l.mn.) | **wołchw / wołchwowie** | — | Nie „szaman" |
| Faza startowa | **Błogosławieństwo Swarożyca** | `phase_blgoslawienstwo_swarzyca` | Pełna nazwa |
| Holy Order | **zakon święty** (małe litery) | `holy_order` | |
| Struggle catalyst | **katalizator** | — | Nie „trigger fazy" |
| Wyraj / Nawia | **Wyraj / Nawia** | — | Polska forma zaświatów |

---

## Konwencje formatowania

### Nagłówki
- H1 (`#`) — tylko tytuł artykułu.
- H2 (`##`) — główne sekcje.
- H3 (`###`) — podsekcje.
- **Nigdy H4 ani głębsze** — rozbij na osobny artykuł lub użyj tabeli.

### Listy vs. tabele
- **Tabela**: dane z ≥2 atrybutami (kultura + etos + region).
- **Lista punktowana**: dane jednoatrybutowe lub ciągłe.
- **Lista numerowana**: tylko dla kroków sekwencyjnych (poradnik, checklista).

### Cytaty i bloki specjalne
- Cytaty z lokalizacji gry: `> *kursywa w bloku cytatu*`
- Ostrzeżenia redakcyjne w szablonach: `> **Instrukcja redakcyjna** …`
- Klucze, pliki, ID: `` `backtick` `` inline lub blok ` ``` `

### Linki
- Zawsze linki **względne**.
- Format: `[Nazwa artykułu](../../ścieżka/do/pliku.md)`.
- Przy pierwszym wystąpieniu terminu w artykule — zawsze linkuj.

### Tryb „do sprawdzenia"
Gdy danych nie można zweryfikować bez uruchomienia gry:
```
> *do sprawdzenia w grze*
```
Nigdy nie podawaj przybliżonych liczb bez tego oznaczenia.

---

## Matryca tonu dla każdego rodzaju artykułu

| Typ artykułu | Lead | Mechaniki | Historia | Porady |
|--------------|------|-----------|----------|--------|
| **Kultura** | Narracyjny, geograficzny | Tabelaryczny | Kronikarski | Strategiczny |
| **Wiara / odłam** | Teologiczny, atmosferyczny | Doktryny w liście | Religioznawczy | Opcjonalne |
| **Faza Walki** | Dramatyczny, literacki | Precyzyjny (tabelki) | Mitologiczny | Taktyczny |
| **Zakończenie Walki** | Epicki, finalny | Warunki w liście | Brak | Strategiczny |
| **Wydarzenie (event)** | Narracyjny, in medias res | Opcje z efektami | Etnograficzny | Sytuacyjny |
| **Decyzja** | „Co zyskujesz", decyzyjny | Wymagania + efekty | Rzadko | Zawsze |
| **Scenariusz (postać)** | Biograficzny, dramatyczny | Karta postaci | Półlegendarny | Wielowariantowy |
| **Poradnik** | Problemowy, „jak to osiągnąć" | Kroki sekwencyjne | Minimum | Dominujący |
| **Historyczny** | Akademicki, źródłowy | Brak | Dominujący | Brak |
| **Techniczny** | Informacyjny, suchy | Dominujący | Brak | Brak |

---

## Antypatenty — czego unikać

| ❌ Unikaj | ✅ Zamiast tego |
|-----------|----------------|
| „W tym artykule omówimy…" | Zacznij od lead narracyjny |
| Anglicyzmy tam, gdzie mamy polskie formy | Krywicze, nie „Krivichians" |
| Klucze gry bez kontekstu | Klucz w backtick + polskie wyjaśnienie |
| Liczby bez weryfikacji | Zaznacz `> *do sprawdzenia w grze*` |
| Akapit historyczny bez źródła | Podaj choćby ogólne źródło |
| Pomijanie sekcji w szablonie | Wstaw `> *dane do uzupełnienia*` |
| Mieszanie form zwracania się (ty/Pan/gracz) | „gracz" lub bezosobowo w encyklopedycznych; „ty" w poradnikowych |
| Skróty SE/SSP w tekście artykułu | Pełne nazwy modów |
| Nagłówki H4 i głębsze | Tabela lub osobny artykuł |
| Linki bezwzględne | Zawsze linki względne |

---

## Otwarte pytania do decyzji

### Priorytet wysoki

**1. Język wiki — tylko PL czy też EN?**
- Znaleziono: CLAUDE.md zaznacza „język plików moda (lokalizacja): do ustalenia". Wiki jest całkowicie po polsku.
- Rekomendacja agenta: potwierdzić, że wiki pozostaje wyłącznie PL; angielska wersja to osobny projekt (jeśli w ogóle).
- Potrzeba: decyzja właściciela projektu.

**2. Slim vs. full szablon dla artykułów o kulturach**
- Znaleziono: szablon jest bardzo szczegółowy (DNA, etniczność, plik genów), ale żaden artykuł o konkretnej kulturze nie jest jeszcze ukończony.
- Rekomendacja agenta: zacząć od „slim version" (lead + karta + prowincje + porady) i rozbudowywać iteracyjnie. Pełny szablon stosować tylko dla 7 grywalnych postaci z bookmarku.
- Potrzeba: decyzja o priorytecie treści.

### Priorytet niski

**3. Forma zwracania się do czytelnika w sekcjach poradnikowych**
- Znaleziono: artykuły encyklopedyczne używają form bezosobowych; poradnik Siemowita przełącza się na „ty".
- Rekomendacja agenta: ujednolicić — „ty" w sekcjach poradnikowych (`Porady dla gracza`, `Sugerowane strategie`); bezosobowo w encyklopedycznych.
- Potrzeba: przyjęcie zasady, aktualizacja szablonów.

**4. Stopka wersji CK3 przy danych mechanicznych**
- Znaleziono: artykuł o Siemowicie zaznacza „atrybuty mogą się różnić między wersjami gry".
- Rekomendacja agenta: dodać do artykułów z liczbami mechanicznymi stopkę z wersją CK3 weryfikacji.
- Potrzeba: decyzja o formacie i obowiązkowości.

---

## Checklista redakcyjna (per artykuł)

- [ ] Lead: 2–4 zdania, bez liczb, bez „W tym artykule…"
- [ ] Wszystkie nazwy własne w polskiej formie
- [ ] Klucze gry w backtick, zweryfikowane z plikami moda
- [ ] Liczby niezweryfikowane oznaczone `> *do sprawdzenia w grze*`
- [ ] Sekcja historyczna ma choćby jedno źródło
- [ ] Struktura zgodna z szablonem dla danego typu artykułu
- [ ] Sekcja „Powiązane artykuły" wypełniona
- [ ] Wpis w `SE/CHANGELOG.md` z datą i opisem zmiany
- [ ] Linki względne działają z poziomu docelowego katalogu
- [ ] Plik w odpowiednim podkatalogu wiki (zgodnie z `wiki/ARCHITECTURE.md`)
