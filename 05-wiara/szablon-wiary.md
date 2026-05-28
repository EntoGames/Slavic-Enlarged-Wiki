# Szablon artykułu — wiara (odłam)

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczym odłamie wiary słowiańskiej. W modzie jest **5 odłamów** religii `wsl_slavic`:
>
> - `wsl_slavic_base` — Wiara Słowiańska (bazowa, niewidoczna w 867)
> - `wsl_slavic_east` — Wschodnia Wiara Słowiańska
> - `wsl_slavic_west` — Zachodnia Wiara Słowiańska
> - `wsl_slavic_south` — Południowa Wiara Słowiańska
> - `wsl_slavic_unified` — Wszechsłowiańska Wiara (zreformowana)
>
> Każdy odłam powinien mieć osobny plik:
> - `wiki/03-wiara/wiara-bazowa.md`
> - `wiki/03-wiara/wiara-wschodnia.md`
> - `wiki/03-wiara/wiara-zachodnia.md`
> - `wiki/03-wiara/wiara-poludniowa.md`
> - `wiki/03-wiara/wiara-wszechslowianska.md`
>
> **Skąd brać dane:**
> 1. **Definicja religii i odłamów** — `SE/common/religion/religion_types/wsl_slavic_faiths.txt` (kolor, ikona, doktryny ogólne, tenety odłamu, miejsca święte, religious_head, holy_order_names, holy_order_maa).
> 2. **Miejsca święte** — `SE/common/religion/holy_site_types/wsl_holy_sites.txt` (hrabstwo, modyfikatory, parameter).
> 3. **Przypisanie startowe (867)** — `SE/common/scripted_effects/wsl_startup_effects.txt` (`wsl_assign_starting_faiths_effect` — który region/pillar dostaje który odłam).
> 4. **Tłumaczenia** — `SE/localization/polish/wsl_faiths_l_polish.yml` (nazwa PL, opis, motto, nazwy tenetów po polsku).
> 5. **Decyzje religijne** — `SE/common/decisions/wsl_religious_decisions.txt` (dla odłamu `unified` — decyzja reformy `wsl_reform_panslavic_faith`).
> 6. **Triggers / mechaniki** — `SE/common/scripted_triggers/wsl_triggers.txt` (np. `wsl_controls_shared_holy_sites_trigger`).
> 7. **Modyfikatory** — `SE/common/modifiers/wsl_modifiers.txt` (np. dynastyczny `wsl_modifier_unifier_of_faiths`).
> 8. **Referencje wiki:**
>    - `SE/Faiths.md` (skondensowana rozpiska wszystkich odłamów)
>    - `wiki/03-wiara/przeglad-wiary.md` (panteon, doktryny wspólne)
>    - `wiki/03-wiara/miejsca-swiete.md` (lista 15 miejsc świętych z bonusami)
>
> **Konwencje:**
> - Nazwy bóstw po polsku (Perun, Weles, Swarożyc, Lada, Marzanna, Morana — nie Perun/Veles itp.).
> - Miejsca święte w formie polskiej (Welbażd, Bârlad, Szerem, Ston, Tolna — z lokalizacji).
> - Tenety opisuj polskimi nazwami z `wsl_faiths_l_polish.yml`, klucz `tenet_*` w nawiasie.
> - Pisz z perspektywy gracza: co ten odłam mi daje, czym różni się od pozostałych, jak gra się postacią tej wiary.
> - Dla odłamu bazowego (`wsl_slavic_base`) zaznacz wyraźnie, że nie pojawia się w 867 — to konstrukt historyczny używany m.in. przy reformie.
> - Dla odłamu `unified` skupiaj się na drodze do reformy (warunki, decyzja, nagrody) — pozostałe są w stanie pre-reform.
> - Skopiuj treść od `# {{Nazwa odłamu}}` w dół do nowego pliku.

---

# {{Nazwa odłamu po polsku}}

{{Jednoakapitowy lead — kim są wyznawcy, gdzie się ten odłam pojawia w 867, jaki jest jego dramatyczny rys (np. „ostatni bastion przed germanizacją", „pod presją Bizancjum", „endgame reformy"). 2–4 zdania pisane do gracza.}}

> *{{Motto / krótki cytat z opisu wiary z lokalizacji — opcjonalne, ale dodaje kolorytu.}}*

---

## Karta wiary

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Wschodnia Wiara Słowiańska}} |
| **Klucz w grze** | `{{wsl_slavic_east}}` |
| **Religia nadrzędna** | `wsl_slavic` (Wiara Słowiańska) — rodzina `rf_pagan` |
| **Status** | {{niezreformowana / **zreformowana**}} (`{{unreformed_faith_doctrine}}` lub brak) |
| **Kolor na mapie** | {{RGB(0.70, 0.25, 0.20) — krwistoczerwony}} |
| **Ikona** | `{{wsl_slavic_east}}` |
| **Ikona po reformie** | `{{slavic_reformed}}` (jeżeli dotyczy) |
| **Występowanie w 867** | {{✅ tak / ❌ nie — odblokowywany przez …}} |
| **Plik definicji** | `SE/common/religion/religion_types/wsl_slavic_faiths.txt` |

---

## Doktryny szczegółowe (tenety)

Trzy tenety, które wyróżniają ten odłam (oprócz doktryn wspólnych dla całej religii `wsl_slavic`):

1. **{{Tożsamość wspólnoty}}** (`{{tenet_communal_identity}}`)
   {{1 zdanie o efekcie mechanicznym + 1 o tym, co mówi o tej wierze. Np. „+10% atrakcyjność wiary u krewnych — wiara jest spoiwem rodu i ludu, nie indywidualną relacją z bogiem".}}

2. **{{Uroczystości rytualne}}** (`{{tenet_ritual_celebrations}}`)
   {{j.w.}}

3. **{{Świętość natury}}** (`{{tenet_sanctity_of_nature}}`)
   {{j.w.}}

### Czym różni się od sąsiednich odłamów
{{1–2 zdania porównujące tenety z 2–3 najbliższymi odłamami — np. „W odróżnieniu od odłamu zachodniego, który stawia na kult przodków, wschodnia wiara wyróżnia tożsamość wspólnoty — bardziej plemienna, mniej dynastyczna."}}

### Doktryny dziedziczone z religii nadrzędnej
Pełna lista doktryn wspólnych (politeizm, monogamia, kremacja, równość płci kapłańskich, akceptacja czarostwa itd.) → zobacz [Przegląd wiary](przeglad-wiary.md).

---

## Panteon i hierarchia

| Element | Nazwa |
|---------|-------|
| **Najwyższy bóg** | {{Perun}} |
| **Inni czczeni bogowie** | {{Weles, Morana, Swarożyc, Lada, Dadźbog — wg lokalnego akcentu}} |
| **Bóg śmierci** | {{Morana}} |
| **Bóg czarów** | {{Weles}} |
| **Pozaświat (dobry)** | {{Wyraj, Wiecznie Zielone Pola}} |
| **Pozaświat (zły)** | {{Nawia, Mroczna Kraina}} |
| **Kapłan** | {{wołchw}} (l.mn. {{wołchwowie}}) |
| **Głowa religii** | {{brak — `doctrine_no_head` / Naczelny Wołchw po reformie}} |

### Cnoty i grzechy
| Cnoty | Grzechy |
|-------|---------|
| {{just — sprawiedliwy}} | {{arbitrary — samowolny}} |
| {{gregarious — towarzyski}} | {{shy — nieśmiały}} |
| {{honest — uczciwy}} | {{deceitful — kłamliwy}} |

---

## Miejsca święte

Z pliku `SE/common/religion/holy_site_types/wsl_holy_sites.txt`.

| Klucz | Miejsce (PL) | Hrabstwo | Bonus modyfikatora |
|-------|--------------|----------|--------------------|
| `{{wsl_site_kyiv}}` | {{Kijów}} | `{{c_kiev}}` | **{{+8% pobożność, +5% prestiż}}** |
| `{{wsl_site_lviv}}` | {{Lwów}} | `{{c_lviv}}` | {{+5% pobożność}} |
| `{{wsl_site_minsk}}` | {{Mińsk}} | `{{c_minsk}}` | {{+5% pobożność}} |
| `{{wsl_site_novgorod}}` | {{Nowogród}} | `{{c_novgorod}}` | {{+6% pobożność, +3% prestiż}} |
| `{{wsl_site_polotsk}}` | {{Połock}} | `{{c_polotsk}}` | {{+5% pobożność}} |

> Dla odłamu `wsl_slavic_unified` — lista zawiera wszystkie 15 miejsc z trzech regionalnych odłamów.

**Najświętsze miejsce odłamu:** {{Kijów — kontrola daje najsilniejszy modyfikator i jest sercem wschodniego pogaństwa.}}

Zobacz pełną listę: [Miejsca święte](miejsca-swiete.md)

---

## Występowanie w 867 (start)

### Reguła przypisania
Z `wsl_assign_starting_faiths_effect`:

> {{np. „Hrabstwa `religion:slavic_religion` w regionie `world_europe_east`, jeśli ich kultura ma pillar `heritage_east_slavic` (a nie zachodni) — pozostałe wschodnioeuropejskie hrabstwa fallbackiem też trafiają tu."}}

### Kultury wyznające ten odłam w 867
- {{[Krywicze](../02-kultury/wschodnioslowianskie/krywicze.md)}}
- {{[Wiatycze](../02-kultury/wschodnioslowianskie/wiatycze.md)}}
- {{[Polanie kijowscy](../02-kultury/wschodnioslowianskie/polanie-kijowscy.md)}}
- {{… (pełna lista kultur z odpowiednim pillarem)}}

### Główne państwa i postacie startowe
- {{[Dyre — wódz Kijowa](../07-scenariusze/postacie/dyre.md) (bookmark Slavic Struggles 867)}}
- {{… inni wyznawcy z innych bookmarków}}

---

## Zakony święte

| Zakon | Klucz | Charakter | Główne MAA |
|-------|-------|-----------|------------|
| {{Wojownicy Peruna}} | `{{holy_order_warriors_of_perun}}` | {{bojowy, kult Peruna}} | {{horse_archers}} |
| {{Strażnicy Welesa}} | `{{holy_order_guardians_of_veles}}` | {{tajemny, kult Welesa}} | {{horse_archers}} |

Zobacz: [Zakony święte](zakony-swiete.md)

---

## Mechaniki specyficzne

### Wpływ na Walkę Słowiańszczyzny
- **Status w Walce:** {{Zaangażowany}} (wszyscy wyznawcy słowiańskich odłamów są involved)
- **Faza preferowana:** {{Burza Peruna sprzyja wojownikom Peruna; Otchłań Welesa wymusza ukrywanie}}
- **Charakterystyczne katalizatory:** {{np. „zniszczenie świętego gaju ↑ Perun"}}

### Reforma i ścieżki rozwoju
{{Dla odłamów regionalnych: jakie są drogi do unifikacji (`wsl_reform_panslavic_faith`) i co trzeba zdobyć z innych regionów. Dla odłamu `unified`: warunki reformy, nagrody, modyfikator dynastyczny `wsl_modifier_unifier_of_faiths`.}}

### Decyzje dostępne dla wyznawców
- {{lista najważniejszych decyzji religijnych z `wsl_religious_decisions.txt`}}

### Modyfikatory i triggery
- {{np. `wsl_controls_regional_holy_sites_trigger` — wymagany do reformy}}
- {{np. `wsl_pagan_slavs_threshold_trigger` — próg ludności pogańskiej}}

---

## Kontekst historyczny

{{2–4 zdania: jak historycznie wyglądała religijność tej grupy Słowian, główne ośrodki kultowe, źródła pisane (Kronika Nestora, Helmold, Thietmar, traktaty bizantyjskie), kiedy i jak ulegała chrystianizacji. Wyróżnij, gdzie mod świadomie konstruuje to, czego historia nie zostawiła źródłowo.}}

**Źródła:** {{kroniki, prace historyczne — jeśli istotne}}

---

## Porady dla gracza

### Mocne strony tej wiary
- {{np. „Tenet wspólnotowej tożsamości daje silne bonusy do utrzymania domeny — dobre dla początkujących"}}
- {{...}}

### Wyzwania
- {{np. „Otoczenie chrześcijańskimi sąsiadami — ryzyko świętych wojen przeciwko"}}
- {{...}}

### Rekomendowane otwarcia
- **Krótkoterminowo:** {{zabezpieczyć najbliższe miejsce święte}}
- **Średnioterminowo:** {{zbudować tytuł co najmniej księstwa, sojusze małżeńskie z innymi słowiańskimi władcami}}
- **Długoterminowo:** {{Reforma Wszechsłowiańska / Triumf w regionie}}

### Wybór między odłamami przy konwersji
{{Krótka rada: dlaczego ktoś miałby chcieć przekonwertować się na ten odłam zamiast sąsiednich — np. „Wschodni odłam jest najbardziej tolerancyjny; południowy ma najlepsze tenety do obrony przed Bizancjum".}}

---

## Powiązane artykuły

- Przegląd: [Wiara słowiańska — przegląd](przeglad-wiary.md)
- Pozostałe odłamy: {{linki do 4 pozostałych plików w tym katalogu}}
- Reforma wszechsłowiańska: [{{Wiara wszechsłowiańska}}](wiara-wszechslowianska.md)
- Miejsca święte: [Mapa i lista](miejsca-swiete.md)
- Zakony rycerskie: [Wojownicy Peruna i Strażnicy Welesa](zakony-swiete.md)
- Walka Słowiańszczyzny: [Czym jest](../04-walka-slowianczyzny/czym-jest-walka.md) · [Fazy](../04-walka-slowianczyzny/fazy/)
- Kultury wyznające ten odłam: {{linki do README grupy dziedzictwa}}
- Bóstwa i mitologia: [Kontekst historyczny](../09-historia/bostwa-i-mitologia.md)

---

## Checklista redakcyjna

Przed scaleniem artykułu sprawdź:

- [ ] Wszystkie pola `{{...}}` uzupełnione lub usunięte
- [ ] Klucz odłamu, kolor, tenety, miejsca święte i status reformy zgadzają się z `SE/common/religion/religion_types/wsl_slavic_faiths.txt`
- [ ] Miejsca święte i ich modyfikatory zgadzają się z `SE/common/religion/holy_site_types/wsl_holy_sites.txt`
- [ ] Reguła przypisania w 867 zgadza się z `wsl_assign_starting_faiths_effect` (lub odnotowane „nie pojawia się w 867")
- [ ] Tenety i nazwy bóstw w polskiej formie z `SE/localization/polish/wsl_faiths_l_polish.yml`
- [ ] Lista kultur wyznających ten odłam jest spójna z `SE/Cultures.md` i przypisaniem przez pillar
- [ ] Wszystkie linki względne działają (sprawdzone z poziomu `wiki/03-wiara/`)
- [ ] Dodano wpis do `SE/CHANGELOG.md` z datą i opisem („dodano artykuł wiki o wierze: {{Nazwa}}")
- [ ] Artykuł podlinkowany z `wiki/03-wiara/przeglad-wiary.md` i z głównej `wiki/index.md`
