# Szablon artykułu — miejsce święte

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczym miejscu świętym. Każde miejsce powinno mieć osobny plik:
>
> - `wiki/05-wiara/miejsca/<klucz-pl>.md` (np. `arkona.md`, `kijow.md`)
>
> **Skąd brać dane:**
> 1. **Definicja holy site** — `SE/common/religion/holy_site_types/se_holy_sites.txt` (county, character_modifier, county_modifier, flag, is_active).
> 2. **Prowincja** — `game/history/provinces/` i `game/common/landed_titles/` (kto kontroluje w 867, tytuł, de jure).
> 3. **Tłumaczenia** — `SE/localization/polish/se_holy_sites_l_polish.yml`.
> 4. **Dane z introspekji** — `src/data/se-mod-data.json` → sekcja `holySites`.
> 5. **Powiązana wiara** — `se_slavic_faiths.txt` (który odłam ma to holy site w swoim zestawie).
>
> **Konwencje:**
> - Nazwa w polskiej formie (Arkona, Kijów, Nowogród — nie Rugen, Kiev, Novgorod).
> - Bonusy podawaj z konkretnymi wartościami liczbowymi z pliku gry.
> - Opis historyczny krótki, ale z klimatem — gracz ma chcieć ten gród zdobyć.

---

# {{Nazwa miejsca świętego}}

{{Jednoakapitowy lead — gdzie leży, do którego odłamu należy, dlaczego jest ważne w modzie i w historii. 2–3 zdania.}}

---

## Karta miejsca świętego

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Arkona}} |
| **Klucz w grze** | `{{se_site_arkona}}` |
| **Prowincja (county)** | `{{c_rugen}}` |
| **Królestwo de jure** | {{k_pomerania}} |
| **Odłam wiary** | {{zachodniosłowiański}} (`{{se_slavic_west}}`) |
| **Plik definicji** | `SE/common/religion/holy_site_types/se_holy_sites.txt` |

---

## Bonusy

### Bonus dla kontrolującego (character_modifier)
- {{+8% pobożności miesięcznie}}
- {{+5% prestiżu miesięcznie}}
- {{...}}

### Bonus dla prowincji (county_modifier) — jeśli zdefiniowany
- {{+X rozwoju / +X podatków / brak}}

---

## Lokalizacja na mapie

### Kontrola w 867
- **Władca:** {{np. „Ranie — wasale królestwa Obodrytów"}}
- **Kultura:** {{Raniowie (`ranians`)}}
- **Wiara startowa:** {{zachodniosłowiańska}}
- **Otoczenie:** {{sąsiednie prowincje, zagrożenia — np. „Duńczycy na północy, Sasi na zachodzie"}}

### Znaczenie strategiczne
{{1–2 zdania — dlaczego kontrola tego miejsca jest ważna w rozgrywce. Np. „Arkona daje najwyższy bonus pobożności ze wszystkich miejsc świętych — kto ją trzyma, prowadzi w wyścigu do reformy."}}

---

## Kontekst historyczny

{{2–4 zdania o historii tego miejsca — archeologiczne odkrycia, źródła pisane, najważniejsze wydarzenia. Np. „Arkona to forteczna świątynia Świętowita na kredowych klifach Rugii. Według Saxa Grammaticusa posąg boga miał cztery twarze i trzymał róg obfitości. Świątynia upadła w 1168 roku, gdy duńska flota Waldemara I podbiła wyspę."}}

**Źródła:** {{Saxo Grammaticus, Helmold z Bozowa, kroniki — wg miejsca}}

---

## Powiązane kultury

Kultury historycznie związane z tym miejscem świętym:

- [{{Raniowie}}]({{../../02-kultury/zachodnioslowianskie/polabianie/raniowie.md}}) — {{krótko, np. „opiekunowie świątyni"}}
- {{...}}

---

## Porady dla gracza

### Jak zdobyć
- {{np. „Jako Pomorzanin — claim fabrication na c_rugen, sojusz z Wikingami"}}
- {{np. „Jako władca wschodu — długa droga, ale kluczowa dla reformy"}}

### Jak utrzymać
- {{np. „Wzmocnij garnizon — Duńczycy atakują co pokolenie"}}
- {{np. „Buduj świątynię (temple holding) dla dodatkowego learning"}}

### Rola w reformie Wszechsłowiańskiej
- {{Czy to jedno z 5 „wspólnych" miejsc świętych wymaganych do reformy?}}
- {{Czy wystarczy mieć je jako jedno z 2 regionalnych?}}

---

## Powiązane artykuły

- Przegląd: [Wszystkie miejsca święte](miejsca-swiete.md)
- Wiara: [{{Wiara zachodniosłowiańska}}]({{wiara-zachodnioslowianska.md}})
- Przegląd wiary: [Wiara słowiańska](przeglad-wiary.md)
- Decyzja reformy: {{link}}
- Inne miejsca tego odłamu: {{linki do sąsiednich holy sites}}

---

## Checklista redakcyjna

- [ ] Klucz, prowincja i bonusy zgadzają się z `se_holy_sites.txt`
- [ ] Przynależność do odłamu zweryfikowana z `se_slavic_faiths.txt`
- [ ] Kontrola w 867 sprawdzona z `history/provinces/`
- [ ] Nazwa w polskiej formie
- [ ] Linki do kultur i wiar działają
- [ ] Podlinkowane z [miejsca-swiete.md](miejsca-swiete.md)
