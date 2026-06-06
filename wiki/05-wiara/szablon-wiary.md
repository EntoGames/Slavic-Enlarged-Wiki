# Szablon artykułu — wiara (odłam)

> **Instrukcja redakcyjna**
> Szablon do tworzenia artykułów o pojedynczym odłamie wiary słowiańskiej. Każdy odłam powinien mieć osobny plik:
>
> - `wiki/05-wiara/<klucz-pl>.md` (np. `wiara-wschodnioslowianska.md`)
>
> **Skąd brać dane:**
> 1. **Definicja wiary** — `SE/common/religion/religion_types/se_slavic_faiths.txt` (tenety, doktryny, ikony, kolory).
> 2. **Miejsca święte** — `SE/common/religion/holy_site_types/se_holy_sites.txt` (powiązanie z prowincjami, bonusy).
> 3. **Tłumaczenia** — `SE/localization/polish/se_faiths_l_polish.yml` (nazwy, opisy, tenety).
> 4. **Dane z introspekji** — `src/data/se-mod-data.json` (wygenerowane automatycznie).
> 5. **Zakony święte** — `SE/common/men_at_arms_types/` i `SE/common/dynasty_legacies/` (jeśli wiara ma unikalne formacje).
>
> **Konwencje:**
> - Nazwy wiar i tenetów po polsku.
> - Doktryny opisuj z perspektywy gracza: co zmienia w rozgrywce, nie tylko definicja.
> - Skopiuj treść od `# {{Nazwa wiary}}` w dół, uzupełnij `{{...}}` i usuń zbędne sekcje.

---

# {{Nazwa wiary po polsku}}

{{Jednoakapitowy lead — czym jest ten odłam, kto go wyznaje, czym różni się od pozostałych, jaki klimat nadaje rozgrywce. 2–4 zdania.}}

---

## Karta wiary

| Pole | Wartość |
|------|---------|
| **Nazwa (PL)** | {{Wiara wschodniosłowiańska}} |
| **Klucz w grze** | `{{se_slavic_east}}` |
| **Religia nadrzędna** | Słowiańska (`slavic_religion`) |
| **Typ** | {{pogańska / zreformowana}} |
| **Kolor na mapie** | {{krwistoczerwony}} (RGB z `color = { ... }`) |
| **Ikona** | `{{icon_se_slavic_east}}` |
| **Plik definicji** | `SE/common/religion/religion_types/se_slavic_faiths.txt` |

---

## Tenety

### {{Tenet 1: Nazwa po polsku}}
- **Klucz:** `{{tenet_communal_identity}}`
- **Efekt mechaniczny:** {{opis bonusów/kar — np. „+15% opinia współwyznawców, -10% koszt konwersji kulturowej"}}
- **Znaczenie narracyjne:** {{1 zdanie — co ten tenet mówi o tym odłamie, np. „Wiara jest spoiwem ludu — nie osobistą decyzją, ale obowiązkiem wobec wspólnoty."}}

### {{Tenet 2: Nazwa po polsku}}
- **Klucz:** `{{tenet_ancestor_worship}}`
- **Efekt mechaniczny:** {{...}}
- **Znaczenie narracyjne:** {{...}}

### {{Tenet 3: Nazwa po polsku}}
- **Klucz:** `{{tenet_xxx}}`
- **Efekt mechaniczny:** {{...}}
- **Znaczenie narracyjne:** {{...}}

---

## Doktryny

### Doktryny wspólne z innymi odłamami
{{Lista doktryn dziedziczonych z religii nadrzędnej — np. politeizm, kremacja, monogamia. Krótko, bo szczegóły są w `przeglad-wiary.md`.}}

### Doktryny unikalne (jeśli są)
- {{np. „Płeć kapłaństwa: obie" / „Zakaz poligamii"}}

---

## Miejsca święte

| # | Miejsce | Prowincja | Bonus | Znaczenie |
|---|---------|-----------|-------|-----------|
| 1 | **{{Kijów}}** | `{{c_kiev}}` | {{+8% pobożności, +5% prestiżu}} | {{krótki opis — dlaczego to miejsce jest święte}} |
| 2 | **{{Lwów}}** | `{{c_lviv}}` | {{+5% pobożności}} | {{...}} |
| 3 | **{{...}}** | `{{...}}` | {{...}} | {{...}} |
| 4 | **{{...}}** | `{{...}}` | {{...}} | {{...}} |
| 5 | **{{...}}** | `{{...}}` | {{...}} | {{...}} |

---

## Wyznawcy

### Kultury startowe (867)
{{Lista kultur przypisanych do tego odłamu w 867 r., z linkami do artykułów wiki.}}

- [{{Krywicze}}]({{../02-kultury/wschodnioslowianskie/krywicze.md}})
- [{{Polanie kijowscy}}]({{../02-kultury/wschodnioslowianskie/polanie-kijowscy.md}})
- {{...}}

### Zasięg geograficzny
{{1–2 zdania — jaki region mapy CK3 pokrywa ten odłam, z jakimi religiami sąsiaduje (prawosławie, katolicyzm, tengryzm).}}

---

## Zakony święte

| Zakon | Klucz | Typ | Opis |
|-------|-------|-----|------|
| {{Wojownicy Peruna}} | `{{se_warriors_of_perun}}` | {{zakon rycerski}} | {{krótki opis — kto może dołączyć, bonusy}} |
| {{Strażnicy Welesa}} | `{{se_guardians_of_veles}}` | {{zakon kapłański}} | {{...}} |

---

## Kontekst historyczny

{{2–4 zdania: czym ten odłam odpowiada historycznie — np. „Kult wschodniosłowiański to przede wszystkim tradycja Rusi Kijowskiej, znana z latopisów Nestora. Perun stał na wzgórzu kijowskim, Weles pod nim — ich odwieczny konflikt symbolizował porządek kosmosu."}}

**Źródła:** {{Powieść Doroczna, Adam z Bremy, Helmold z Bozowa — odpowiednio do regionu}}

---

## Porady dla gracza

### Mocne strony
- {{np. „Duży zasięg geograficzny — łatwo znaleźć współwyznawców do sojuszy"}}
- {{...}}

### Wyzwania
- {{np. „Miejsca święte rozrzucone po wielu królestwach — trudno kontrolować wszystkie"}}
- {{...}}

### Kiedy wybrać ten odłam
- {{np. „Najlepszy start dla ambitnej unifikacji Rusi"}}

### Ścieżka do reformy
- {{Ile miejsc świętych potrzeba, jakie decyzje otworzyć, relacja z Wiarą Wszechsłowiańską}}

---

## Powiązane artykuły

- Przegląd wiary: [Wiara słowiańska w Slavic Enlarged](przeglad-wiary.md)
- Miejsca święte: [Wszystkie miejsca święte](miejsca-swiete.md)
- Zakony: [Zakony święte](zakony-swiete.md)
- Inne odłamy: {{linki do pozostałych 2–3 odłamów}}
- Decyzja reformy: {{link do artykułu o decyzji}}
- Kultury tego odłamu: {{linki do grup dziedzictwa}}

---

## Checklista redakcyjna

- [ ] Klucz wiary, tenety i doktryny zgadzają się z `se_slavic_faiths.txt`
- [ ] Miejsca święte zgadzają się z `se_holy_sites.txt`
- [ ] Nazwy tenetów i doktryn w polskiej formie z lokalizacji
- [ ] Lista kultur wyznających tę wiarę jest kompletna
- [ ] Linki względne do artykułów kultur i miejsc świętych działają
- [ ] Podlinkowane z [przeglad-wiary.md](przeglad-wiary.md) i z [README.md](README.md)
