---
subtitle: Które mody współgrają ze Slavic Enlarged, a które mogą kolidować
sections: flat
---

# Kompatybilność z innymi modami

Slavic Enlarged jest w **92% addytywny** — dodaje nowe kultury, wiary i miejsca święte z prefiksem `se_`, nie nadpisując istniejących plików gry. Jedynym wyjątkiem są 4 kultury vanilla, które mod koryguje ze względu na balans tradycji.

---

## Co mod nadpisuje

Slavic Enlarged modyfikuje **4 istniejące kultury** w dwóch plikach:

### Kultury południowosłowiańskie

| Kultura | Zmiana | Powód |
|---------|--------|-------|
| **Chorwaci** (croatian) | `tradition_hussar` → `tradition_martial_admiration` | Husaria to tradycja późna (XV–XVII w.), nieadekwatna dla wczesnośredniowiecznych Chorwatów |
| **Serbowie** (serbian) | `tradition_hussar` → `tradition_martial_admiration` | Analogicznie — Serbowie w okresie gry nie posługiwali się husarią |

### Kultury zachodniosłowiańskie

| Kultura | Zmiana | Powód |
|---------|--------|-------|
| **Pomorzanie** (pommeranian) | `tradition_hussar` → `tradition_stand_and_fight` | Pomorzanie jako lud bałtycki — obronny styl walki zamiast kawaleryjskiego |
| **Karantanie** (carantanian) | `ethos_communal` → `ethos_egalitarian` | Knežji Kamen — rytuał intronizacyjny z elekcją kniazia przez chłopów (historyczny egalitaryzm) |

**Wszystkie pozostałe pliki** (kultury, wiary, miejsca święte, decyzje, eventy, on_actions, triggery, efekty) są **w pełni addytywne** — używają prefiksu `se_` i nie kolidują z żadnym innym modem.

---

## Bezpieczne kombinacje

Slavic Enlarged współgra bez problemów z modami, które:

- **Dodają nowe kultury** — np. mody na kultury celtyckie, nordyckie, bliskowschodnie. Nie ma ryzyka konfliktu, bo SE nie modyfikuje żadnych kultur spoza słowiańskich.
- **Dodają nowe religie** — SE dodaje własną religię `se_slavic` z prefiksem, nie modyfikując vanilla wiar.
- **Modyfikują mapę** — mody graficzne, nowe prowincje, terrain. SE operuje na istniejących county (np. `c_kiev`, `c_rugen`), ale nie zmienia samej mapy.
- **Dodają eventy i decyzje** — prefiks `se_` zapobiega kolizjom nazw.
- **Mody na portrety, ubiory, herby** — SE nie modyfikuje żadnych plików graficznych.

---

## Potencjalne konflikty

Konflikt wystąpi **tylko** jeśli inny mod **też nadpisuje** jedną z 4 kultur: `croatian`, `serbian`, `pommeranian` lub `carantanian`.

### Jak sprawdzić

1. Otwórz folder drugiego moda
2. Szukaj plików w `common/culture/cultures/` zawierających definicje `croatian = {`, `serbian = {`, `pommeranian = {` lub `carantanian = {`
3. Jeśli znajdziesz — mody będą ze sobą kolidować w tych kulturach

### Co się stanie przy konflikcie

CK3 ładuje pliki alfabetycznie. Mod, którego plik jest ładowany **później** (dalej w alfabecie), „wygrywa" — jego definicja kultury nadpisuje wcześniejszą. Wynik:
- Gracz nie zobaczy błędu, ale jedna z wersji kultury zostanie po cichu zignorowana
- W error.log mogą pojawić się ostrzeżenia o zduplikowanych definicjach

### Jak rozwiązać

- **Zmień kolejność ładowania** — w Launcherze CK3 przesuń wyżej mod, którego wersję kultury chcesz zachować
- **Zgłoś problem** — napisz na [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3740630117) lub na GitHubie, opiszemy obejście

---

## Kolejność ładowania (load order)

Jeśli używasz kilku modów z rodziny Slavic Enlarged, ładuj je w tej kolejności:

```
1. Slavic Enlarged          ← baza (WYMAGANY)
2. Slavic Struggle of Perun ← addon (wymaga DLC: Fate of Iberia)
3. Myths & Legends          ← addon (wymaga DLC: Legends of the Dead)
4. Kingdom mod(y)           ← opcjonalne (wymagają SE + SSP)
```

Kolejność jest ważna — addony i kingdom mody odwołują się do triggerów i efektów zdefiniowanych w modzie bazowym (`se_*`). Załadowanie addonu **przed** bazą spowoduje błędy.

---

## Zgłaszanie problemów z kompatybilnością

Jeśli zauważysz konflikt z innym modem:

1. **Sprawdź error.log** — plik znajdziesz w:
   ```
   %USERPROFILE%\Documents\Paradox Interactive\Crusader Kings III\logs\error.log
   ```
2. **Zapisz listę aktywnych modów** — nazwa + wersja każdego moda
3. **Zgłoś na Steam Workshop** lub na [GitHubie](https://github.com/EntoGames/Slavic-Enlarged/issues)

W zgłoszeniu podaj:
- Wersję CK3 i Slavic Enlarged
- Listę modów i ich kolejność ładowania
- Fragment error.log z błędami
- Opis problemu (co widzisz w grze)

---

## Powiązane artykuły

- [Instalacja i kolejność ładowania](instalacja.md)
- [Znane problemy](znane-problemy.md)
- [Changelog](changelog.md)
