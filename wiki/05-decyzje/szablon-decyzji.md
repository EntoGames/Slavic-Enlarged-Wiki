# Szablon artykułu — decyzja

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczej decyzji. W modach znajdują się decyzje religijne (SE) i strategiczne / synkretyczne / zakończenia (SSP).
>
> Lokalizacja artykułów: `wiki/05-decyzje/<klucz-pl>.md`.
>
> **Skąd brać dane:**
> 1. **Definicja decyzji** — `SE/common/decisions/se_religious_decisions.txt` (decyzje religijne SE) lub `SSP/common/decisions/sessp_decisions.txt` (decyzje SSP).
> 2. **Triggery** — sekcje `is_shown`, `is_valid`, `is_valid_showing_failures_only` (kto widzi/może wykonać).
> 3. **Efekty** — sekcja `effect = { ... }`.
> 4. **Koszt** — sekcja `cost = { ... }` (gold, prestige, piety).
> 5. **Tłumaczenia** — `SE/localization/polish/` lub `SSP/localization/polish/`.
> 6. **Modyfikatory nadawane** — `SE/common/modifiers/` lub `SSP/common/modifiers/`.
> 7. **Powiązane scripted_effects** — `SE/common/scripted_effects/se_*.txt`, `SSP/common/scripted_effects/`.
>
> **Konwencje:** nazwa decyzji po polsku, koszty/efekty podane konkretnie, opis „kiedy warto" pisany do gracza.

---

# {{Nazwa decyzji po polsku}}

{{Lead — co ta decyzja robi i w jakiej sytuacji ma sens. 2–3 zdania.}}

> *{{Cytat z opisu decyzji z lokalizacji — opcjonalne.}}*

---

## Karta decyzji

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Reforma Wszechsłowiańska}} |
| **Klucz** | `{{se_reform_panslavic_faith}}` |
| **Mod źródłowy** | {{SE / SSP}} |
| **Plik** | `{{SE/common/decisions/se_religious_decisions.txt}}` |
| **Kategoria** | {{religijna / strategiczna / synkretyczna / zakończenie Walki}} |
| **Ważna decyzja** | {{tak / nie}} (`major = yes`) |
| **Cooldown** | {{X lat / brak / raz na życie}} |
| **Widoczna w encyklopedii** | {{tak / nie}} |

---

## Wymagania

### Kto może podjąć (`is_shown` + `is_valid`)
- {{Wyznawca jednej z 3 regionalnych wiar słowiańskich}}
- {{Tytuł co najmniej królestwa (`highest_held_title_tier >= tier_kingdom`)}}
- {{Piety ≥ 2000}}
- {{Prestige ≥ 1500}}
- {{Kontrola miejsc świętych: `se_controls_shared_holy_sites_trigger`, `se_controls_regional_holy_sites_trigger`}}
- {{Próg pogańskich Słowian w regionie: `se_pagan_slavs_threshold_trigger`}}
- {{...}}

### Co blokuje (`is_valid_showing_failures_only`)
- {{Brak wymaganego tytułu}}
- {{Niewystarczająca pobożność}}
- {{...}}

### Koszt
- **Złoto:** {{X}}
- **Prestige:** {{Y}}
- **Piety:** {{Z}}
- **Inne:** {{np. utrata cechy, zerwanie sojuszy}}

---

## Efekty

### Natychmiastowe
- {{Zmiana wiary postaci na `se_slavic_unified`}}
- {{Zmiana wiary stolicy + nieformalna konwersja domeny}}
- {{Nadanie modyfikatora dynastycznego `se_modifier_unifier_of_faiths`}}
- {{+X piety, +Y prestige (ponad koszt)}}

### Długoterminowe / efekty pasywne
- {{Stała zmiana w mechanice — np. wszystkie hrabstwa z wiarą `se_slavic_*` zaczynają konwertować się ku `unified`}}
- {{Modyfikator regionalny: `{{sessp_modifier_xxx}}`}}
- {{Wpływ na Walkę: katalizator `{{nazwa}}` → przesunięcie ku fazie / zakończeniu}}

### Eventy łańcuchowe (jeśli są)
- {{Po N dniach od decyzji uruchamia się event `se_event.0001`}}
- {{...}}

---

## Kiedy warto podjąć tę decyzję

### Optymalny moment
- {{np. „gdy kontrolujesz 12+ z 15 miejsc świętych i jesteś w fazie Błogosławieństwa Swarożyca"}}

### Sygnały, że warto czekać
- {{np. „jeden z sąsiadów też dąży do reformy — wyścig"}}
- {{...}}

### Sygnały, że nie warto wcale
- {{np. „jesteś już w fazie Otchłani Welesa — reforma będzie wymagać odzyskania miejsc"}}

---

## Konsekwencje strategiczne

### Sojusznicy i wrogowie
- **Reagują pozytywnie:** {{wyznawcy słowiańscy w innych regionach}}
- **Reagują negatywnie:** {{chrześcijańscy sąsiedzi — możliwe Wielkie Święte Wojny}}

### Wpływ na Walkę Słowiańszczyzny
- **Katalizator:** {{+X w stronę Burzy Peruna / Odrodzenia}}
- **Faza po:** {{najczęściej kończy się …}}

### Wpływ na dynastię
- {{cechy dziedziczne, modyfikatory dynastyczne, prestige}}

---

## Alternatywy

Jeżeli ta decyzja nie pasuje do twojego stylu gry, rozważ:
- **{{Inna decyzja A}}** — {{krótko, czym się różni}}
- **{{Inna decyzja B}}** — {{j.w.}}

---

## Kontekst historyczny / projektowy

{{1–3 zdania: czy decyzja ma realne odniesienie historyczne (np. „nawiązuje do XII-wiecznej próby zjednoczenia kultu na Rugii"), czy jest czysto „what if" mechaniką stworzoną przez mod.}}

---

## Powiązane artykuły

- Wiara, której dotyczy: {{link}}
- Faza Walki, w której się aktywuje: {{link}}
- Powiązane decyzje: {{linki}}
- Wydarzenia łańcuchowe: {{linki}}
- Poradnik: {{link do `wiki/08-poradniki/` jeśli istnieje przewodnik krok po kroku}}

---

## Checklista redakcyjna

- [ ] Klucz, wymagania, koszt i efekty zgadzają się z plikiem `.txt` w odpowiednim modzie
- [ ] Modyfikatory nadawane przez decyzję są opisane z konkretnymi wartościami
- [ ] Triggery zweryfikowane w `SE/common/scripted_triggers/` lub `SSP/common/scripted_triggers/`
- [ ] Nazwa decyzji w polskiej formie z lokalizacji
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Podlinkowane z [wiki/05-decyzje/README.md](README.md)
