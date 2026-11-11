# Changelog

Všechny významné změny v projektu BTC Cykly jsou zaznamenány zde.

Formát vychází z [Keep a Changelog](https://keepachangelog.com/cs/1.1.0/),
projekt používá [Semantic Versioning](https://semver.org/lang/cs/).

## [1.1.0] - 2026-11-11

### ✨ Přidáno
- Graf Power Law zobrazuje skutečnou historii ceny BTC od 18. 8. 2010 (týdenní data vestavěná v aplikaci, funguje offline)
- Poslední rok historie se doplňuje denními cenami z CoinGecko (cache 12 hodin)
- Zvýraznění míst, kde cena klesla pod support (červené pruhy a body v grafu)
- Karta „Cena pod supportem" s přehledem období, délkou a hloubkou propadu
- Tooltip grafu ukazuje historickou cenu a její odchylku od fair value

### 🎨 Vylepšeno
- Graf Power Law je čitelný i ve světlém tématu (mřížka, popisky, čára DNES)
- Značky halvingů v grafu odpovídají skutečným datům halvingů

### 🐛 Opraveno
- Windows: nastavení „zavírat do tray" se po restartu aplikace nepřeneslo do backendu
- Tray menu „Aktualizovat" obnoví data bez znovunačtení celé stránky
- Power Law už neposílá vlastní dotaz na cenu, když ji má karta s živou cenou

### 🔧 Technické
- Verze sjednocena na 1.1.0 včetně `package.json`
- Cache verze v service workeru: `btc-cykly-v1.1.0`

## [1.0.1] - 2026-05-06

### ✨ Přidáno
- Live BTC cena z CoinGecko API s automatickým refreshem každých 5 minut
- Zobrazení posledního ATH (cena + datum) v záložce CYKLUS
- Vizuální progress bar vzdálenosti od ATH
- Push notifikace při překonání ATH (Tauri Windows + PWA Android)
- Anti-spam ochrana notifikací (reset při poklesu pod 95% ATH)
- 24-hodinová změna ceny (zelená/červená)
- Vibrace při ATH notifikaci na mobilu

### 🎨 Vylepšeno
- Mobilní layout karty s cenou (vertikální zobrazení na úzkých obrazovkách)
- Cache verze v service workeru: `btc-cykly-v1.0.1`

### 🔧 Technické
- Verze v `tauri.conf.json`, `Cargo.toml`, `manifest.json` sjednocena
- Verze viditelná v footer aplikace + Settings panelu

## [1.0.0] - 2026-04-30

### ✨ Přidáno
- První release: Tauri Windows aplikace + PWA verze
- 4letý Bitcoin cyklus (1064 dní býk + 364 dní medvěd)
- Power Law model (kalibrace na Bitbo live chart)
- Halving countdown
- Vizuální časová osa pro budoucí cykly
- Settings panel (vlastní délky cyklu, fonty, téma)
- Lokální ukládání nastavení (localStorage)
- Offline režim přes service worker (PWA)
- Native Windows notifikace (Tauri)
- System tray ikona (Tauri)
- Autostart Windows (Tauri)

---

## Konvence verzování

Projekt používá [Semantic Versioning](https://semver.org/lang/cs/):

```
MAJOR.MINOR.PATCH
  │     │     │
  │     │     └── opravy bugů, drobné úpravy (1.0.X)
  │     └── nové funkce zpětně kompatibilní (1.X.0)
  └── velké změny, nekompatibility (X.0.0)
```

### Kdy zvedat verzi

- **PATCH (1.0.X)** — oprava bugu, drobná úprava UI, optimalizace
- **MINOR (1.X.0)** — nová funkce (přidaná karta, nový tab, nová API integrace)
- **MAJOR (X.0.0)** — kompletní redesign, breaking change v ukládání nastavení

### Při jakékoli změně se musí aktualizovat

1. `tauri.conf.json` — Tauri verze
2. `Cargo.toml` — Rust package verze
3. `manifest.json` — PWA manifest
4. `service-worker.js` — `CACHE_NAME` (jinak uživatelé nedostanou novou verzi!)
5. `index.html` — `<div class="sg-row">Verze</div>` (Settings panel)
6. `index.html` — footer s `v1.X.X`
7. `make-portable.bat` — README.txt template
8. `README.md` — sekce **Aktuální verze** + **Changelog**
9. `CHANGELOG.md` — nová sekce s detaily
