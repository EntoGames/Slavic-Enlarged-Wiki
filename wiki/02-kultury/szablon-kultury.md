# Szablon artykułu — kultura

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczej kulturze z modu Slavic Enlarged. Każda kultura powinna mieć osobny plik w odpowiednim podkatalogu grupy dziedzictwa:
>
> - wschodniosłowiańskie → `wiki/02-kultury/wschodnioslowianskie/<klucz-pl>.md`
> - lechickie → `wiki/02-kultury/zachodnioslowianskie/lechici/<klucz-pl>.md`
> - połabskie → `wiki/02-kultury/zachodnioslowianskie/polabianie/<klucz-pl>.md`
> - inni zachodni → `wiki/02-kultury/zachodnioslowianskie/inni/<klucz-pl>.md`
> - południowosłowiańskie → `wiki/02-kultury/poludniowoslowianskie/<klucz-pl>.md`
>
> **Skąd brać dane:**
> 1. **Definicja kultury** — `SE/common/culture/cultures/se_*.txt` (pole `ethos`, `heritage`, `language`, `traditions`, `martial_custom`, `head_determination`, `ethnicities`, `*_gfx`, `color`).
> 2. **Tłumaczenia** — `SE/localization/polish/se_cultures_l_polish.yml` (nazwa PL, opis, tradycje).
> 3. **Lista imion** — `SE/common/culture/name_lists/` (męskie/żeńskie, dziedzictwo).
> 4. **Prowincje startowe** — `SE/history/provinces/se_<kultura>.txt` (lista hrabstw przypisanych w 867).
> 5. **Przypisanie wiary** — `SE/common/scripted_effects/se_startup_effects.txt` (mapowanie kultura → wiara w 867).
> 6. **Referencje wiki:**
>    - `SE/Cultures.md` (skondensowane tabele wszystkich kultur)
>    - `wiki/02-kultury/przeglad-kultur.md` (sąsiedztwo grup)
>    - `wiki/ARCHITECTURE.md` § Kultury (konwencje nazewnicze)
>
> **Konwencje:**
> - Nazwy w polskiej formie (Krywicze, nie Krivichians).
> - Etos zapisuj słownie po polsku (Wspólnotowy, Stoicki, Dworski, Wojowniczy, Biurokratyczny).
> - Tradycje — polskie nazwy z lokalizacji (np. „Strażnicy miast", „Święte gaje").
> - Pisz z perspektywy gracza: po co mi ta kultura, co mi daje, czym się różni od sąsiadów.
> - Skopiuj treść od `# {{Nazwa kultury}}` w dół do nowego pliku, uzupełnij `{{...}}` i usuń niepotrzebne pola.

---

# {{Nazwa kultury w liczbie mnogiej}}

{{Jednoakapitowy lead — kim byli, gdzie żyli, czym się wyróżniają w modzie i dlaczego warto nimi grać (lub czemu są ciekawi jako sąsiad). 2–4 zdania.}}

---

## Karta kultury

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Krywicze}} |
| **Klucz w grze** | `{{krivichians}}` |
| **Grupa dziedzictwa** | {{wschodnio- / zachodnio- / południowosłowiańska}} (`{{heritage_east_slavic}}`) |
| **Etos** | {{Wspólnotowy}} (`{{ethos_communal}}`) |
| **Język** | {{wschodniosłowiański}} (`{{language_east_slavic}}`) |
| **Lista imion** | `{{name_list_se_slavic}}` |
| **Tradycje startowe** | {{Strażnicy miast, Rolnicy}} |
| **Zasada sukcesji wojennej** | {{tylko mężczyźni / oboje płci}} (`{{martial_custom_male_only}}`) |
| **Determinacja głowy kultury** | {{domena / sukcesja / wybór}} (`{{head_determination_domain}}`) |
| **Kolor na mapie** | {{#73 8C 59}} (RGB z `color = { ... }`) |
| **Status w modzie** | {{nowa / nadpisana wanilijna}} |
| **Plik definicji** | `SE/common/culture/cultures/{{se_slavic_new.txt}}` |

---

## Etos i tradycje

### Etos: {{Wspólnotowy}}
{{1–2 zdania o tym, co etos znaczy dla rozgrywki: efekty mechaniczne (np. „bonus do rozwoju z niskiej kontroli, kara do gain'u prestiżu z wojny") i co mówi o tej kulturze („priorytet wspólnoty nad ambicją indywidualną").}}

### Tradycje
- **{{Strażnicy miast}}** (`{{tradition_city_keepers}}`) — {{krótki opis efektu i dlaczego pasuje historycznie}}
- **{{Rolnicy}}** (`{{tradition_agrarian}}`) — {{j.w.}}

### Sąsiadujące etosy w grupie
{{1–2 zdania o tym, jak ta kultura różni się od pokrewnych w swojej grupie dziedzictwa — np. „Wśród wschodnich Słowian Krywicze są jednymi z trzech kultur z etosem wspólnotowym, podczas gdy Ulicze i Drewlanie są stoiccy."}}

---

## Region i prowincje startowe

### Region historyczny
{{1–2 zdania: dorzecze, główne miasto, ukształtowanie terenu, sąsiedzi etniczni.}}

### Prowincje przypisane w 867
Z pliku `SE/history/provinces/se_{{klucz}}.txt`:

- **{{Smoleńsk}}** — {{ew. komentarz: stolica, miejsce święte, kluczowe hrabstwo}}
- **{{Połock}}** — {{...}}
- **{{...}}** — {{...}}

### Sąsiedztwo kulturowe
- **Na północ:** {{kultura — relacja, wspólne dziedzictwo czy obce}}
- **Na wschód:** {{...}}
- **Na południe:** {{...}}
- **Na zachód:** {{...}}

---

## Wiara

- **Wiara startowa (867):** [{{Rodnowierstwo Wschodnie}}]({{../03-wiara/...md}}) — przypisana automatycznie wg pillara kultury (`se_assign_starting_faiths_effect`)
- **Najbliższe miejsca święte:** {{lista 1–3 z linkami}}
- **Naturalne przejścia wiary:** {{np. „bliskie geograficznie prawosławiu bizantyjskiemu" / „pod presją katolicyzmu z zachodu"}}

---

## Imiona

- **Lista:** `{{name_list_se_slavic}}` ({{740 imion słowiańskich}}) — wspólna dla większości kultur SE
- **Charakterystyczne imiona męskie:** {{np. Wsiewołod, Igor, Wszesław}}
- **Charakterystyczne imiona żeńskie:** {{np. Olga, Rogneda, Predsława}}
- **Imiona dynastyczne / historyczne:** {{warianty pojawiające się w bookmarkach}}

---

## Tożsamość wizualna

| Element | Wartość | Komentarz |
|---------|---------|-----------|
| **CoA (herby)** | {{east_slavic_group_coa_gfx, western_coa_gfx}} | {{styl: motywy roślinne, prostota}} |
| **Architektura** | {{east_slavic_building_gfx, western_building_gfx}} | {{drewno, cerkiewne kopuły, palisady}} |
| **Stroje** | {{east_slavic_clothing_gfx, northern_clothing_gfx}} | {{lniane szaty, futra, charakterystyczne nakrycia głowy}} |
| **Jednostki** | {{eastern_unit_gfx}} | {{drużynnicy, łucznicy konni}} |
| **Ramka herbu** | `{{house_frame_05}}` | — |

### Etniczność (rozkład wyglądu)
Z bloku `ethnicities = { ... }`:

| Typ | Waga | Opis |
|-----|------|------|
| `{{slavic_northern_blond}}` | {{60}} | {{blondyni, jasna karnacja}} |
| `{{slavic_northern_brown_hair}}` | {{25}} | {{ciemny blond, brąz}} |
| `{{slavic_northern_dark_hair}}` | {{10}} | {{czarne włosy}} |
| `{{slavic_northern_ginger}}` | {{5}} | {{rudzi}} |

---

## Kontekst historyczny

{{2–4 zdania: kim byli historycznie, źródła pisane (latopisy, kroniki), losy plemienia — kiedy zniknęli z map, w jakie późniejsze państwo weszli, ślady w nazewnictwie i archeologii.}}

**Źródła:** {{Powieść Doroczna, Kronika Thietmara, prace archeologiczne — jeśli istotne}}

---

## Porady dla gracza

### Mocne strony
- {{np. „Centralne położenie na szlakach handlowych — wysoki potencjał rozwoju"}}
- {{...}}

### Wyzwania
- {{np. „Otwarte granice od wschodu — narażenie na Pieczyngów/Chazarów"}}
- {{...}}

### Naturalne cele ekspansji
- {{kulturowo pokrewne sąsiedztwo, gdzie konkwista będzie tania i akceptowalna}}

### Sojusznicy i wrogowie z definicji
- **Sojusznicy:** {{kultury z tego samego dziedzictwa, wspólna wiara}}
- **Wrogowie:** {{intruzi w Walce Słowiańszczyzny, wrogie etosy}}

### Wpływ na Walkę Słowiańszczyzny
- **Region Walki:** {{czy hrabstwa tej kultury są w `custom_slavia`}}
- **Charakterystyczne katalizatory:** {{które łatwo wyzwolić grając tą kulturą}}

---

## Powiązane artykuły

- Grupa dziedzictwa: [{{Kultury wschodniosłowiańskie}}]({{../wschodnioslowianskie/README.md}})
- Wiara: [{{Rodnowierstwo Wschodnie}}]({{../../03-wiara/...md}})
- Walka Słowiańszczyzny: [Czym jest](../../04-walka-slowianczyzny/czym-jest-walka.md) · [Fazy](../../04-walka-slowianczyzny/fazy/)
- Pokrewne kultury: {{linki do 2–4 najbliższych kuzynów w grupie}}
- Postacie startowe z tej kultury (jeśli są): {{linki do `wiki/07-scenariusze/postacie/...`}}
- Miejsca święte na ziemiach tej kultury: {{linki}}

---

## Checklista redakcyjna

Przed scaleniem artykułu sprawdź:

- [ ] Wszystkie pola `{{...}}` uzupełnione lub usunięte
- [ ] Klucz kultury, etos, heritage i tradycje zgadzają się z `SE/common/culture/cultures/se_*.txt`
- [ ] Tradycje opisane polskimi nazwami z `SE/localization/polish/se_cultures_l_polish.yml`
- [ ] Lista prowincji startowych zgadza się z `SE/history/provinces/se_<klucz>.txt`
- [ ] Wiara startowa zgadza się z mapowaniem w `se_assign_starting_faiths_effect`
- [ ] Linki względne działają (sprawdzone z poziomu docelowego katalogu)
- [ ] Nazwy własne w polskiej formie (Krywicze, Ślężanie, Połoczanie — nie Krivichians/Slezanie/Polochans)
- [ ] Dodano wpis do `SE/CHANGELOG.md` z datą i opisem („dodano artykuł wiki o kulturze: {{Nazwa}}")
- [ ] Artykuł podlinkowany z README grupy dziedzictwa i z `wiki/02-kultury/przeglad-kultur.md`
