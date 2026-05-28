# Szablon artykułu — informacja techniczna

> **Instrukcja redakcyjna**
> Szablon do artykułów technicznych: kompatybilność, znane problemy, zmiany w plikach gry. Te artykuły są **zwięzłe i operacyjne** — gracz przychodzi tu z problemem i ma szybko znaleźć odpowiedź.
>
> Lokalizacja: `wiki/10-techniczne/<slug-pl>.md`.
>
> **Typy artykułów technicznych:**
> - Kompatybilność z innymi modami (lista, znane konflikty)
> - Znane problemy (bugi, obejścia)
> - Changelog (lista wersji)
> - Wymagania techniczne (DLC, wersja gry, OS)
> - Instrukcje instalacji / debugowania
>
> **Skąd brać dane:**
> 1. **Changelogi** — `SE/CHANGELOG.md`, `SSP/CHANGELOG.md`
> 2. **TODO** — `SE/TODO_FROM_SSP.md`
> 3. **Pliki techniczne** — `SE/common/on_action/`, `SE/common/scripted_effects/`
> 4. **Notatki deweloperskie** — `SSP/CLAUDE/`, `notes/`
> 5. **Logi błędów z gry** — `<Documents>/Paradox Interactive/Crusader Kings III/logs/error.log`
>
> **Konwencje:** tytuł jako jasne pytanie / problem („Jak…", „Konflikt z…", „Bug: …"), kod w blokach z ` ``` `, podawaj konkretne wersje moda/gry.

---

# {{Tytuł — sformułowany jako problem lub pytanie}}

{{Lead — 1 zdanie: o co chodzi i komu artykuł pomoże.}}

---

## Karta artykułu

| Pole | Wartość |
|------|---------|
| **Typ** | {{Kompatybilność / Bug / Wymaganie / Instrukcja}} |
| **Wersja moda, której dotyczy** | {{SE 0.X, SSP 0.Y}} |
| **Wersja CK3** | {{1.16.X}} |
| **Wymagane DLC** | {{Fate of Iberia}} |
| **Status** | {{aktualne / nieaktualne — obejście dodane w wersji X}} |
| **Ostatnia weryfikacja** | {{RRRR-MM-DD}} |

---

## Opis problemu / tematu

{{1–2 akapity: co dokładnie się dzieje, jak rozpoznać problem, jakie ma objawy. Dla artykułu o kompatybilności — z czym mod współpracuje, z czym nie.}}

### Objawy (jeśli to bug)
- {{co widzi gracz}}
- {{co pojawia się w `error.log` (cytat fragmentu)}}
- {{kiedy się to dzieje — start, w trakcie, po konkretnej decyzji}}

```
{{przykład wpisu z error.log lub kodu pliku}}
```

---

## Przyczyna

{{Krótko, technicznie: co w pliku gry / interakcji z innym modem powoduje problem. Wymień pliki/scripted_effecty.}}

- **Plik źródłowy:** `{{ścieżka}}`
- **Konflikt z:** {{nazwa moda lub element wanilii}}

---

## Rozwiązanie / obejście

### Dla gracza
1. {{Krok 1}}
2. {{Krok 2}}
3. {{...}}

### Dla deweloperów moda
{{Jeśli to nadaje się do naprawy w samym modzie — opis fix-a, link do commitu / PR.}}

```
{{przykładowy patch lub konfiguracja}}
```

---

## Status naprawy

- [ ] Zgłoszone deweloperowi (data, link)
- [ ] Naprawione w wersji {{X}}
- [ ] Wymaga współpracy z innym modem
- [ ] Niemożliwe do naprawy bez zmian w wanilii

---

## Powiązane artykuły

- {{Powiązane bugi / problemy}}
- {{Powiązane elementy moda dotknięte tym samym problemem}}
- {{Changelog gdzie naprawiono}}

---

## Checklista redakcyjna

- [ ] Wersje moda i gry podane konkretnie
- [ ] Cytaty z `error.log` lub plików rzeczywiste (nie zmyślone)
- [ ] Obejście przetestowane przed publikacją
- [ ] Dodano wpis do `SE/CHANGELOG.md`
- [ ] Po naprawie problemu — zaktualizować status w tym artykule (nie usuwać go — historia bugu też ma wartość)
