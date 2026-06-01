# Szablon artykułu — wydarzenie (event)

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczym wydarzeniu. Wydarzenia w modach dzielą się na trzy główne grupy:
>
> - **Wydarzenia faz Walki** — `SSP/events/sessp_struggle_events.txt`
> - **Wydarzenia synkretyczne** — `SSP/events/sessp_syncretic_events.txt`
> - **Wydarzenia tradycji ludowych** — `SSP/events/sessp_tradition_events.txt`
> - **Wydarzenia główne SE** — `SE/events/se_main_events.txt`
>
> Lokalizacja artykułu: `wiki/06-wydarzenia/<kategoria>/<klucz-pl>.md` (struktura katalogów: `fazy/`, `synkretyczne/`, `tradycje/`).
>
> **Skąd brać dane:**
> 1. **Definicja wydarzenia** — odpowiedni plik w `events/` (id, type, title, desc, theme, trigger, weight_multiplier, immediate, options).
> 2. **Triggery wywołania** — sekcja `trigger = { ... }` oraz `on_action` w `SE/common/on_action/` / `SSP/common/on_action/`.
> 3. **Opcje gracza** — sekcje `option = { ... }` z ich efektami i AI chance.
> 4. **Tłumaczenia** — `SE/localization/polish/` lub `SSP/localization/polish/`.
> 5. **Powiązane scripted_effects** — wywoływane przez `effect = { ... }`.
>
> **Konwencje:** tytuł wydarzenia po polsku, każda opcja opisana mechanicznie + narracyjnie, opisz ai_chance, jeśli AI rzadko wybiera daną opcję.

---

# {{Tytuł wydarzenia po polsku}}

{{Lead — co się dzieje w wydarzeniu, w jakim kontekście pojawia się graczowi. 2–3 zdania.}}

> *{{Krótki cytat z opisu eventu w lokalizacji — dla klimatu.}}*

---

## Karta wydarzenia

| Pole | Wartość |
|------|---------|
| **Tytuł (PL)** | {{Obrońcy Świętego Gaju}} |
| **ID** | `{{sessp_struggle.0010}}` |
| **Mod źródłowy** | {{SE / SSP}} |
| **Plik** | `{{SSP/events/sessp_struggle_events.txt}}` |
| **Typ** | {{character_event / letter_event / court_event / activity_event}} |
| **Theme** | `{{theme_faith}}` |
| **Tło** | {{`background_temple`, `background_throne_room`, …}} |
| **Kategoria** | {{Wydarzenie fazy Walki / Wydarzenie synkretyczne / Tradycja ludowa}} |

---

## Wywołanie wydarzenia

### Trigger
- **On_action:** {{`yearly_global_pulse`, `quarterly_playable_pulse`, …}}
- **Faza Walki:** {{phase_burza_peruna}} (jeśli dotyczy)
- **Warunki postaci:** {{wyznawca słowiańskiej wiary, tytuł co najmniej hrabiego, w regionie `custom_slavia`}}
- **Warunki sytuacyjne:** {{np. „w domenie jest miejsce święte zagrożone wojną"}}
- **Cooldown:** {{X lat, raz na życie, raz na bookmark}}

### Waga (`weight_multiplier`)
- {{Bazowa waga + modyfikatory zwiększające/zmniejszające szansę}}

---

## Tekst wydarzenia (skrót)

{{1 akapit — żywy skrót narracji, jak gracz to widzi. Nie kopiuj całego tekstu, daj poczuć klimat.}}

---

## Opcje gracza

### Opcja A: „{{Zbierz wojowników, brońmy gaju!}}"
**Efekty mechaniczne:**
- {{+50 prestige}}
- {{+10 stress}}
- {{Wojownicy Peruna dostają -25% kosztu rekrutacji na 5 lat (modyfikator `{{se_event_modifier_perun_call}}`)}}
- {{Walka: katalizator → +X w stronę Burzy Peruna}}

**AI chance:** {{50% bazowo, +30% dla cech `brave`, `wrathful`; -50% dla `craven`}}

**Kiedy wybrać:** {{1 zdanie — np. „gdy masz silną armię i akceptujesz ryzyko wojny religijnej"}}

---

### Opcja B: „{{Nie możemy ryzykować otwartej wojny}}"
**Efekty mechaniczne:**
- {{-30 piety}}
- {{-20 opinia wszystkich wasali tej samej wiary}}
- {{Walka: katalizator → +X w stronę Harmonii Lady}}

**AI chance:** {{50% bazowo, +40% dla `cynical`, `craven`}}

**Kiedy wybrać:** {{j.w.}}

---

### Opcja C: „{{...}}" (jeśli istnieje)
{{j.w.}}

---

## Wydarzenia łańcuchowe

Jeżeli to wydarzenie startuje łańcuch — wymień kolejne:

- `{{sessp_struggle.0011}}` — następstwo opcji A
- `{{sessp_struggle.0012}}` — następstwo opcji B
- {{...}}

```
{{ten event}}
  ├─ Opcja A → {{event_0011}} → {{...}}
  └─ Opcja B → {{event_0012}} → {{...}}
```

---

## Wpływ na Walkę Słowiańszczyzny

- **W jakich fazach pojawia się:** {{phase_*}}
- **Które opcje pchają katalizatory:** {{tabela opcja → kierunek katalizatora}}
- **Czy może zakończyć Walkę:** {{tak / nie}}

---

## Kontekst kulturowy / historyczny

{{2–3 zdania: czy event nawiązuje do konkretnego obrzędu/wydarzenia (np. „Kupała", „Dziady", „Most Między Wiarami" jako synkretyzm), źródła etnograficzne, znaczenie kulturowe.}}

---

## Strategia dla gracza

- **Najlepsza opcja dla pogańskiego startu:** {{...}}
- **Najlepsza opcja dla strategii Dwójwierstwa:** {{...}}
- **Czego unikać:** {{np. „nie wybieraj C jeśli stoisz przed święto-wojną — kara do morale armii"}}

---

## Powiązane artykuły

- Faza Walki, w której się pojawia: {{link}}
- Powiązane decyzje: {{linki}}
- Inne eventy z tego łańcucha: {{linki}}
- Wiara, której dotyczy: {{link}}
- Tradycja ludowa (jeśli synkretyczne): {{link do `wiki/09-historia/`}}

---

## Checklista redakcyjna

- [ ] ID, trigger, opcje i efekty zgadzają się z plikiem `events/`
- [ ] AI chance odzwierciedla rzeczywiste `ai_chance = { ... }` w pliku
- [ ] Wszystkie opcje opisane (nie pomijaj niepopularnych)
- [ ] Modyfikatory nadawane przez event istnieją w `common/modifiers/`
- [ ] Tytuł i opcje w polskiej formie z lokalizacji
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Podlinkowane z [wiki/06-wydarzenia/README.md](README.md) i z artykułu odpowiedniej fazy
