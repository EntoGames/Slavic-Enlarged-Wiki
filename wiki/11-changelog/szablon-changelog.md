# Szablon — changelog moda

> **Instrukcja redakcyjna**
> Szablon do prowadzenia changelogu poszczególnych modów. Każdy mod ma jeden plik changelog:
>
> - SE: `wiki/11-changelog/slavic-enlarged.md`
> - SSP: `wiki/11-changelog/slavic-struggle-of-perun.md` (frontmatter `mod: ssp`)
> - SML: `wiki/11-changelog/myths-and-legends.md` (frontmatter `mod: sml`)
> - Kingdom mods: `wiki/11-changelog/kingdoms/<slug>.md` (frontmatter `mod: kingdom-mods`)
>
> **Konwencje:**
> - Wpisy od najnowszego do najstarszego
> - Wersja w formacie `1.x.y` (schemat z CLAUDE.md głównego repo)
> - Data w formacie `RRRR-MM-DD`
> - Kategorie zmian: Dodane, Zmienione, Naprawione, Usunięte
> - Każdy wpis to jedno zdanie zaczynające się od czasownika (np. „Dodano", „Naprawiono", „Usunięto")
> - Ważne: nie kopiuj commitów git — changelog jest dla graczy, nie deweloperów
>
> **Frontmatter:** Changelogi modów prywatnych **muszą** mieć `mod:` w frontmatter, żeby system filtrowania wiki je ukrył. Brak `mod:` = domyślnie publiczny.

---

# Changelog — {{Nazwa moda}}

{{Jedna linia opisu: typ moda, wymagania.}}

---

## {{1.x.y}} — {{RRRR-MM-DD}}

### Dodane
- {{Opis nowej funkcji z perspektywy gracza — np. „Dodano 3 nowe eventy tradycji ludowych dla kultur lechickich"}}
- {{...}}

### Zmienione
- {{Opis zmiany — np. „Zmniejszono koszt decyzji Reformy Wszechsłowiańskiej z 3000 na 2000 piety"}}
- {{...}}

### Naprawione
- {{Opis naprawionego buga — np. „Naprawiono błąd, przez który Raniowie nie otrzymywali wiary zachodniosłowiańskiej w 867"}}
- {{...}}

### Usunięte
- {{Opis usuniętej funkcji — np. „Usunięto tymczasowy event testowy se_debug.0001"}}
- {{...}}

---

## {{1.x.y-1}} — {{RRRR-MM-DD}}

{{Powtórz strukturę: Dodane / Zmienione / Naprawione / Usunięte. Pomiń puste kategorie.}}

---

## Checklista redakcyjna

- [ ] Wpisy opisują zmiany z perspektywy gracza, nie dewelopera
- [ ] Wersja zgadza się z `descriptor.mod` moda
- [ ] Data to data publikacji na Steam/GitHub, nie data commita
- [ ] Puste kategorie (np. „Usunięte" gdy nic nie usunięto) są pominięte
- [ ] Jeśli mod prywatny — frontmatter `mod:` jest ustawiony
