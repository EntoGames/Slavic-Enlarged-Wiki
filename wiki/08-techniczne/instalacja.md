---
subtitle: Jak zainstalować Slavic Enlarged i ustawić kolejność ładowania modów
sections: flat
---

# Instalacja i kolejność ładowania

Slavic Enlarged działa z Crusader Kings III w wersji **1.19** i nowszych. Mod bazowy nie wymaga żadnych DLC — addony mogą wymagać konkretnych rozszerzeń.

---

## Wymagania

### Mod bazowy: Slavic Enlarged

| Wymaganie | Wartość |
|-----------|---------|
| **Wersja CK3** | 1.19.* |
| **DLC** | żadne — mod działa z samą grą bazową |
| **System** | Windows, Linux, macOS |

### Addony (opcjonalne)

| Addon | Wymagane DLC | Co dodaje |
|-------|-------------|-----------|
| **Slavic Struggle of Perun** | Fate of Iberia | Mechanika Walki Słowiańszczyzny — fazy, eventy, decyzje strategiczne |
| **Myths & Legends** | Legends of the Dead | System legend słowiańskich (w fazie koncepcyjnej) |
| **Kingdom mody** | — (wymagają SE + SSP) | Unikalne mechaniki dla poszczególnych królestw słowiańskich |

---

## Instalacja ze Steam Workshop

1. Otwórz stronę moda na [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3740630117)
2. Kliknij **Subskrybuj**
3. Poczekaj na pobranie (Steam pobierze mod automatycznie)
4. Uruchom CK3 → **Mody** → upewnij się, że **Slavic Enlarged** jest zaznaczony
5. Jeśli chcesz addon — subskrybuj go osobno i zaznacz w launcherze

---

## Kolejność ładowania (load order)

Jeśli używasz kilku modów z rodziny Slavic Enlarged, ustaw je w launcherze w tej kolejności:

```
1. Slavic Enlarged              ← BAZA (wymagany zawsze)
2. Slavic Struggle of Perun     ← addon (opcjonalny)
3. Slavic Myths & Legends       ← addon (opcjonalny)
4. Kingdom mod(y)               ← opcjonalne
```

### Dlaczego kolejność ma znaczenie

Addony i kingdom mody używają triggerów i efektów zdefiniowanych w modzie bazowym (np. `se_is_slavic_culture_trigger`). Jeśli addon załaduje się **przed** bazą, gra nie znajdzie tych definicji i zgłosi błędy w logach.

### Jak ustawić kolejność w launcherze CK3

1. Otwórz launcher CK3
2. Przejdź do zakładki **Mody**
3. Zaznacz wszystkie mody, których chcesz użyć
4. Przeciągnij je w odpowiedniej kolejności (baza na górze, addony niżej)
5. Kliknij **Graj**

---

## Czy mogę używać kilku kingdom modów naraz?

**Tak** — kingdom mody są od siebie niezależne. Możesz aktywować dowolną kombinację, pod warunkiem że:

- Masz zainstalowany **Slavic Enlarged** (baza) i **Slavic Struggle of Perun** (addon)
- Kingdom mody nie pokrywają tych samych kultur (każdy kingdom mod obsługuje inne kultury)

Przykładowo, możesz jednocześnie grać z kingdom modami na Polskę, Serbię i Bułgarię bez żadnych konfliktów.

---

## Kompatybilność z innymi modami

Slavic Enlarged jest w 92% addytywny — szczegóły w artykule [Kompatybilność z innymi modami](kompatybilnosc.md).

W skrócie: mod koliduje tylko z modami, które nadpisują jedną z 4 vanilla kultur (chorwacka, serbska, pomorska, karantańska). Wszystkie inne mody działają bez problemu.

---

## Rozwiązywanie problemów

### Gdzie znajdę logi błędów?

```
%USERPROFILE%\Documents\Paradox Interactive\Crusader Kings III\logs\error.log
```

Na Windowsie to zazwyczaj:
```
C:\Users\[TwojaNazwa]\Documents\Paradox Interactive\Crusader Kings III\logs\error.log
```

### Typowe problemy

| Problem | Przyczyna | Rozwiązanie |
|---------|-----------|-------------|
| Mod nie pojawia się w launcherze | Steam nie pobrał plików | Zrestartuj Steam, sprawdź zakładkę „Warsztat" w bibliotece CK3 |
| Błędy w error.log o brakujących triggerach | Zła kolejność ładowania | Ustaw SE jako pierwszy mod (przed addonami) |
| Nowe kultury nie pojawiają się w grze | Mod nieaktywny lub zła wersja CK3 | Sprawdź czy mod jest zaznaczony w launcherze i czy CK3 jest w wersji 1.19+ |
| Konflikty z innym modem | Inny mod nadpisuje te same 4 kultury | Zobacz [Kompatybilność](kompatybilnosc.md) |

### Nadal nie działa?

Zgłoś problem na [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3740630117) lub na [GitHubie](https://github.com/EntoGames/Slavic-Enlarged/issues). Dołącz:
- Wersję CK3 i moda
- Fragment error.log
- Listę aktywnych modów

---

## Powiązane artykuły

- [Kompatybilność z innymi modami](kompatybilnosc.md)
- [Znane problemy](znane-problemy.md)
- [Changelog](changelog.md)
