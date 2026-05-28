# Szablon artykułu — postać z bookmarku

> **Instrukcja redakcyjna**
> Ten szablon służy do tworzenia profili siedmiu grywalnych postaci z ekranu startowego „Slavic Struggles" (867 r.). Każdy artykuł powinien znaleźć się w `wiki/07-scenariusze/postacie/<imie>.md` i być podlinkowany z `wiki/07-scenariusze/README.md`.
>
> - Skopiuj treść od linii poniżej (`# Imię — Tytuł i kraj`) do nowego pliku.
> - Uzupełnij każde pole oznaczone `{{...}}`. Pola opcjonalne usuń, jeśli nie mają zastosowania.
> - Zachowaj polską terminologię (Krywicze, Perun, Swarożyc, Walka Słowiańszczyzny).
> - Trzymaj się tonu z reszty wiki: narracja z perspektywy gracza, krótkie zdania, konkrety zamiast lania wody.
> - Dane historyczne (urodzenie, śmierć, dynastia) sprawdź w plikach `SE/history/characters/` lub `SSP/history/characters/` — jeżeli postać nie jest tam zdefiniowana, sięgnij do wanilijnych plików CK3 (`<CK3>/game/history/characters/`).
> - **Cechy wyglądu** wyciągnij z plików gry — patrz instrukcja w sekcji „Wygląd" niżej.

---

# {{Imię}} — {{tytuł i kraj, np. „wódz Polanii"}}

{{Jednoakapitowy lead — kto to jest, dlaczego warto nim grać i co jest największym napięciem dramatycznym jego startu. 2–4 zdania, pisane do gracza.}}

---

## Karta postaci

| Pole | Wartość |
|------|---------|
| **Imię w grze** | {{`character:12345` lub forma wyświetlana}} |
| **Tytuł** | {{np. Wódz / Książę / Wielki Żupan / Car}} |
| **Państwo** | {{nazwa państwa startowego}} |
| **Stolica** | {{prowincja stołeczna}} |
| **Kultura** | [{{Kultura}}]({{ścieżka do artykułu o kulturze}}) |
| **Grupa dziedzictwa** | {{wschodnio- / zachodnio- / południowosłowiańska}} |
| **Wiara** | [{{Wiara}}]({{ścieżka do artykułu o wierze}}) |
| **Dynastia** | {{nazwa dynastii / „brak — założyciel"}} |
| **Wiek w 867** | {{lata}} ({{ur. RRRR}}) |
| **Data zgonu (historyczna)** | {{RRRR lub „nieznana"}} |
| **Bookmark** | Slavic Struggles (867) |

---

## Statystyki i cechy

- **Atrybuty:** Dyplomacja {{X}} · Wojskowość {{X}} · Intryga {{X}} · Gospodarka {{X}} · Nauka {{X}} · Władza {{X}}
- **Edukacja:** {{np. „Mistrz wojny (4)"}}
- **Cechy osobowości:** {{np. dzielny, ambitny, gniewny}}
- **Cechy specjalne:** {{np. Dwuwierny, Strażnik Tradycji, dziedziczne}}
- **Stres i zdrowie:** {{istotne informacje, jeśli postać startuje z ranami, chorobą, niskim zdrowiem}}

> *Liczby z gry mogą się drobnie różnić między wersjami moda — w razie wątpliwości sprawdź wartości w bookmarku.*

---

## Wygląd

### Skąd brać dane

Cech wyglądu nie da się wymyślić — trzeba je wyciągnąć z plików gry. Kolejność szukania:

1. **Plik postaci w modzie** — `SE/history/characters/*.txt` lub `SSP/history/characters/*.txt`.
2. **Plik postaci w wanilii** — `<CK3>/game/history/characters/<grupa>.txt` (np. `polish.txt`, `west_slavic.txt`, `bulgarian.txt`, `serbian.txt`).
3. **Definicje genów** — `<CK3>/game/common/genes/` (mapowanie wartości DNA na widoczne cechy, np. `00_genes_hair.txt`, `00_genes_skin.txt`, `00_genes_face.txt`).
4. **Portrety modyfikacji** — `SE/gfx/` lub `<CK3>/game/gfx/portraits/` (jeśli postać ma nadpisaną fryzurę/strój przez mod).

W pliku postaci szukaj:

```
character_id = {
    name = "..."
    dna = "{{długi_ciąg_znaków}}"      # zakodowane DNA — losuje wszystkie geny
    # LUB jawne geny:
    genes = {
        hair_color = { 100 100 150 200 }
        skin_color = { ... }
        eye_color = { ... }
        face_shape = { ... }
        # ...
    }
    sexuality = ...
    trait = scarred                       # widoczne na portrecie
    trait = one_eyed
}
```

Jeżeli postać ma tylko `dna = "..."`, to wartości genów są ukryte w stringu — wtedy uruchom grę, wejdź w bookmark, otwórz portret postaci i odczytaj wizualnie (kolor włosów, oczu, karnacja, broda, fryzura, wzrost, budowa, blizny, akcesoria).

### Pola do uzupełnienia

| Cecha | Wartość |
|-------|---------|
| **Płeć** | {{mężczyzna / kobieta}} |
| **Wiek wizualny** | {{młodzieniec / dorosły / starzec}} |
| **Karnacja** | {{bardzo jasna / jasna / ogorzała / śniada}} |
| **Kolor włosów** | {{np. „ciemny blond, lekko siwiejący na skroniach"}} |
| **Fryzura** | {{np. „długie włosy splecione w warkocz", „krótkie, wzorem druzhinnym"}} |
| **Zarost** | {{np. „gęsta broda, podgolone wąsy" / „wygolony"}} |
| **Kolor oczu** | {{np. „szare", „piwne", „niebieskie"}} |
| **Kształt twarzy** | {{np. „kwadratowa, mocna szczęka", „pociągła"}} |
| **Budowa ciała** | {{szczupła / atletyczna / krępa / korpulentna}} |
| **Wzrost** | {{niski / średni / wysoki}} |
| **Widoczne cechy / blizny** | {{np. „blizna na policzku po bitwie", „ślepy na jedno oko", „brak"}} |
| **Strój i akcesoria** | {{np. „bogato zdobiony kaftan, naszyjnik z bursztynu, czapka z futra"}} |
| **Tatuaże / malowidła** | {{jeśli widoczne na portrecie}} |
| **Symbole władzy** | {{np. „złoty diadem", „buława", „korona książęca"}} |

### Plik źródłowy i DNA

- **Plik:** `{{ścieżka/do/pliku.txt}}` (np. `SE/history/characters/se_lechitic.txt` lub wanilijny `polish.txt`)
- **ID w grze:** `{{character_id}}`
- **DNA:** `{{pełny ciąg DNA lub "brak — geny jawne / dziedziczone"}}`

### Notatka stylistyczna

Opis wyglądu w artykule powinien być **krótki akapit (2–3 zdania)** napisany żywym językiem, a tabela powyżej traktowana jako materiał źródłowy. Przykład dobrego opisu:

> *Mściwoj wygląda dokładnie tak, jak powinien wyglądać wódz pogran­icznego ludu — krępy, brodaty, z siwiejącymi skroniami i blizną na czole, którą zostawił mu jakiś saski miecz. Nosi prosty wełniany kaftan spinany srebrną zapinką, a jego oczy mają kolor zimnego Bałtyku.*

---

## Państwo na starcie

### Posiadłości i wasale
- **Bezpośrednia domena:** {{liczba i lista hrabstw / księstw}}
- **Wasale:** {{najważniejsi wasale, ich kultura/wiara, lojalność}}
- **Suzeren:** {{jeśli postać jest wasalem — czyim, co to oznacza}}

### Geografia
- **Region:** {{np. „Wielkopolska — równiny, lasy, kilka rzek granicznych"}}
- **Rozwój prowincji:** {{średnia / wysoka / niska względem sąsiadów}}
- **Strategiczne atuty:** {{rzeki, góry, dostęp do morza, szlaki handlowe}}
- **Słabe punkty:** {{otwarte granice, wrogie sąsiedztwo, brak naturalnych granic}}

### Miejsca święte w zasięgu
- {{np. **Płock** (Lechici, ~3 prowincje na wschód) — w trakcie ekspansji do zdobycia}}
- {{lista pozostałych istotnych miejsc świętych Słowiańszczyzny w pobliżu}}

---

## Sąsiedztwo — sojusznicy i przeciwnicy

### Naturalni sojusznicy
- {{kto, dlaczego — wspólna kultura, wiara, dynastia, wspólny wróg}}

### Główne zagrożenia
- {{kto, dlaczego — przewaga militarna, ekspansja, fanatyzm religijny}}

### Neutralni / sytuacyjni
- {{państwa, których postawa zależy od wyborów gracza}}

---

## Wyzwania na start

1. **{{Wyzwanie #1}}** — {{opis i co można z tym zrobić}}
2. **{{Wyzwanie #2}}** — {{opis}}
3. **{{Wyzwanie #3}}** — {{opis}}

---

## Cele długoterminowe

- **Krótkoterminowo (pierwsze pokolenie):** {{zjednoczenie plemion, zdobycie 1–2 miejsc świętych, sojusze małżeńskie}}
- **Średnioterminowo:** {{utworzenie księstwa/królestwa, reforma wiary, zwrot w fazie Walki}}
- **Endgame:** {{Reforma Wszechsłowiańska / Odrodzenie Słowiańszczyzny / Trwałe Dwójwierstwo / Imperium}}

---

## Sugerowane strategie

### Ścieżka A — {{nazwa, np. „Zjednoczyciel"}}
{{2–4 zdania opisujące podejście, kluczowe decyzje, ryzyka}}

### Ścieżka B — {{nazwa, np. „Reformator wiary"}}
{{j.w.}}

### Ścieżka C — {{nazwa, np. „Wojny obronne"}}
{{j.w. — opcjonalna trzecia ścieżka, jeśli postać ma wyraźnie różne podejścia}}

---

## Wpływ na Walkę Słowiańszczyzny

- **Faza startowa:** {{najczęściej Błogosławieństwo Swarożyca}}
- **Status w Walce:** {{Zaangażowany / Intruz}}
- **Naturalne katalizatory dla tej postaci:** {{które katalizatory są najłatwiej osiągalne — np. zdobycie Płocka pcha ku Swarożycowi}}
- **Ryzyka:** {{co może popchnąć Walkę w niekorzystną stronę — np. utrata Arkony pcha ku Welesowi}}

Zobacz: [Walka Słowiańszczyzny — czym jest](../04-walka-slowianczyzny/czym-jest-walka.md)

---

## Kontekst historyczny

{{2–4 zdania: kim była ta postać w rzeczywistości, co o niej wiemy ze źródeł, jak potoczyły się losy jego rodu/państwa. Wyróżnij, gdzie mod świadomie odchodzi od historii dla rozgrywki.}}

**Źródła:** {{kroniki, prace historyczne, jeśli są używane jako podstawa}}

---

## Powiązane artykuły

- Kultura: [{{Kultura}}]({{ścieżka}})
- Wiara: [{{Wiara}}]({{ścieżka}})
- Region: [{{grupa kultur}}]({{ścieżka}})
- Walka Słowiańszczyzny: [Fazy](../04-walka-slowianczyzny/fazy/) · [Katalizatory](../04-walka-slowianczyzny/katalizatory.md)
- Miejsca święte w zasięgu: {{linki}}
- Poradniki: {{np. „Gra Siemowitem — narodziny Polski"}}

---

## Checklista redakcyjna

Przed scaleniem artykułu sprawdź:

- [ ] Wszystkie pola `{{...}}` uzupełnione lub usunięte
- [ ] Wszystkie linki działają (sprawdzone względem rzeczywistej struktury katalogów)
- [ ] Statystyki zgodne z aktualnym stanem moda (`SE/history/characters/` i `SSP/history/characters/`)
- [ ] Sekcja „Wygląd" uzupełniona na podstawie plików gry (lub portretu w bookmarku); podano plik źródłowy i DNA
- [ ] Nazwy własne w polskiej formie (Krywicze, Perun, Płock — nie Krivichians/Perun/Plock)
- [ ] Dodano wpis do `SE/CHANGELOG.md` z datą i opisem („dodano profil postaci: {{Imię}}")
- [ ] Artykuł podlinkowany w `wiki/07-scenariusze/README.md` zamiast (lub obok) krótkiego opisu
