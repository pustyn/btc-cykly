# BTC Cykly — PWA (Progressive Web App)

**Aktuální verze: v1.1.1** • Vydáno: 2026-11-11

Webová verze BTC Cykly aplikace, instalovatelná na **Android, iOS i desktop** přes "Přidat na plochu".

## 📜 Changelog

### v1.1.1 (2026-11-11)
- 🔄 Graf Power Law se udržuje aktuální sám: živá cena jako poslední bod, historie se obnovuje každou hodinu a hromadí se v zařízení
- ℹ️ Pod grafem je vidět, kdy byla data naposledy načtena
- 🔄 Cache verze: btc-cykly-v1.1.1

### v1.1.0 (2026-11-11)
- ✨ **Nové:** Graf Power Law ukazuje skutečnou historii ceny BTC od roku 2010
- ✨ **Nové:** Zvýraznění míst, kde cena klesla pod support, a karta s přehledem těchto období
- 🎨 **UI:** Graf je čitelný i ve světlém tématu, značky halvingů sedí na skutečná data
- 🔧 Méně dotazů na CoinGecko, oprava přenosu nastavení tray po restartu (Windows)
- 🔄 Cache verze: btc-cykly-v1.1.0

### v1.0.1 (2026-05-06)
- ✨ **Nové:** Live BTC cena z CoinGecko API (auto-refresh 5 min)
- ✨ **Nové:** Zobrazení posledního ATH s datem
- ✨ **Nové:** Progress bar vzdálenosti od ATH
- ✨ **Nové:** Push notifikace při překonání ATH (Tauri + PWA)
- 🎨 **UI:** Nová karta "AKTUÁLNÍ CENA / POSLEDNÍ ATH" v záložce CYKLUS
- 📱 **Mobile:** Optimalizace zobrazení na úzkých obrazovkách
- 🔄 Cache verze: btc-cykly-v1.0.1

### v1.0.0 (2026-04-30)
- 🎉 První PWA release
- ✅ Funkčně shodný s Tauri Windows aplikací
- 📊 4letý Bitcoin cyklus (1064 býk + 364 medvěd)
- 📉 Power Law model (kalibrovaný na Bitbo)
- 🔪 Halving countdown
- 🌍 Vizuální časová osa

## 📦 Obsah balíčku

```
BTC_Cykly_PWA/
├── index.html              # Hlavní aplikace
├── manifest.json           # PWA metadata (jméno, ikony, barvy)
├── service-worker.js       # Offline support
├── icons/                  # Ikony 16-512 px
├── CHANGELOG.md            # Podrobný přehled změn
└── README.md               # Tento soubor
```

## 🌐 Kde aplikace běží

- **Živá adresa:** https://pustyn.github.io/btc-cykly/
- **Repozitář:** https://github.com/pustyn/btc-cykly (větev `main`)

Repozitář obsahuje **jen obsah této složky** (`BTC_Cykly_PWA`), ne celý projekt.
Novou verzi nahraješ podle sekce „Aktualizace aplikace" níže. Následující návod
na založení repozitáře je potřeba jen při úplně prvním nasazení (nebo na jiný účet).

## 🚀 Deployment na GitHub Pages — krok za krokem

### 1. Vytvořit GitHub repozitář

1. Přihlaš se na https://github.com a klikni na **+** → **New repository**
2. **Repository name:** `btc-cykly` (nebo cokoli jiného)
3. **Visibility:** Public (musí být public pro free GitHub Pages)
4. **Initialize this repository with:** NIC nezaškrtávej (žádný README, gitignore, license)
5. Klikni **Create repository**

### 2. Nahrát soubory do repozitáře

#### Varianta A — přes web (nejjednodušší)

1. Na stránce nového repozitáře klikni na **uploading an existing file**
2. Přetáhni do okna VŠECHNY soubory ze složky `BTC_Cykly_PWA`:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - Celou složku `icons/`
3. Dolů napiš commit message: `Initial PWA upload`
4. Klikni **Commit changes**

#### Varianta B — přes Git CLI (pokud máš nainstalovaný)

```bash
cd D:\Projekty_Claude\BTC\BTC_Cykly_PWA
git init
git add .
git commit -m "Initial PWA upload"
git branch -M main
git remote add origin https://github.com/TVE_USERNAME/btc-cykly.git
git push -u origin main
```

### 3. Aktivovat GitHub Pages

1. V repozitáři klikni na záložku **Settings**
2. V levém menu **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `main` / `/(root)`
5. Klikni **Save**
6. Počkej ~1 minutu, až GitHub aplikaci vystaví

### 4. Otevřít aplikaci

URL bude: `https://TVE_USERNAME.github.io/btc-cykly/`

GitHub Pages ti tu URL ukáže ve **Settings → Pages** po deployu.

## 📱 Instalace na Android

1. Otevři URL v **Chrome** na Androidu
2. Po pár sekundách Chrome zobrazí pop-up "Přidat na plochu" — klikni **Přidat**
3. Případně: Menu (⋮) → **Přidat na plochu** → **Přidat**
4. Aplikace se objeví jako klasická ikona, bez URL bar, bez prohlížeče

## 🍎 Instalace na iOS (Safari)

1. Otevři URL v **Safari** na iPhone/iPad
2. Klikni **Sdílet** (čtverec se šipkou)
3. **Přidat na plochu** (Add to Home Screen)
4. Klikni **Přidat**

> ⚠️ iOS má omezenější PWA podporu než Android — některé funkce (notifikace) nemusí fungovat.

## 🖥️ Instalace na desktopu (Chrome / Edge)

1. Otevři URL v Chrome nebo Edge
2. V adresním řádku vpravo zobrazí ikonu **install** (⊕ nebo monitor s šipkou)
3. Klikni a potvrď **Install**
4. Aplikace se otevře jako samostatné okno bez prohlížeče

## 🔧 Aktualizace aplikace

Když upravíš kód:

1. Změň verzi cache v `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'btc-cykly-v1.1.1';  // zvedni číslo
   ```
2. Zvedni číslo verze i na ostatních místech (seznam je v `CLAUDE.md` v kořeni projektu, sekce 4.3) a doplň `CHANGELOG.md`
3. Nahraj obsah této složky do repozitáře `pustyn/btc-cykly`:
   - **přes web:** na GitHubu **Add file → Upload files**, přetáhni změněné soubory a potvrď, nebo
   - **přes Git:** naklonuj repozitář do dočasné složky, zkopíruj do něj obsah `BTC_Cykly_PWA`, pak `git add -A`, `git commit` a `git push origin main`
4. GitHub Pages se obnoví asi do minuty; uživatelé dostanou novou verzi při dalším otevření aplikace

> Při lokálním testu se po úpravě může dál zobrazovat stará verze – service worker ji
> drží v cache. Pomůže změna `CACHE_NAME`, nebo v DevTools → **Application** →
> **Service Workers** → **Unregister** a **Clear storage**.

### Obnova historie ceny v grafu Power Law

Graf kreslí skutečnou cenu BTC z dat vestavěných v `index.html` a novější dny si
doplňuje sám (CoinGecko, v nouzi blockchain.info). Běžně se o to není potřeba starat.
Při vydávání nové verze je ale dobré vestavěná data obnovit, aby graf byl úplný
i offline a při první instalaci. V kořeni projektu spusť:

```bash
python tools/gen_btc_hist.py
```

Skript stáhne denní ceny z blockchain.info a přepíše data v PWA i ve Windows verzi.
Pak vydej novou verzi podle kroků výše.

## 🔍 Test offline režimu

1. Otevři aplikaci v Chrome
2. Vypni Wi-Fi/data
3. Reload stránky → měla by stále fungovat (kromě live BTC ceny z API); graf Power Law ukáže historii z vestavěných dat

## 🐛 Troubleshooting

### Service worker se neregistruje
- **Důvod:** GitHub Pages musí běžet přes **HTTPS** (běží defaultně)
- Pokud testuješ lokálně, použij `python -m http.server 8000` a otevři `http://localhost:8000` (localhost je výjimka pro HTTPS požadavek)

### Manifest nefunguje
- Zkontroluj DevTools → **Application** → **Manifest** v Chrome
- Tam uvidíš případné chyby

### Ikony se nezobrazují
- Cesty v `manifest.json` jsou **relativní** (`icons/icon-192.png`)
- Pokud máš repozitář v podsložce, GitHub Pages může vyžadovat absolutní cestu — uprav podle potřeby

## 💡 Tipy

- **Vlastní doména:** V Settings → Pages → Custom domain můžeš nastavit vlastní URL
- **HTTPS:** GitHub Pages má HTTPS defaultně, není potřeba nic nastavovat
- **Analytika:** Můžeš přidat Google Analytics nebo Plausible pro tracking
- **Aktualizace:** Push do main = automatický redeploy během minuty

## 📊 Co aplikace umí

- 📈 4letý Bitcoin cyklus (1064 dní býk + 364 dní medvěd)
- 📉 Power Law model (kalibrován na Bitbo live chart) se skutečnou historií ceny BTC od roku 2010
- 🔻 Přehled období, kdy cena klesla pod support (dno koridoru)
- 💹 Živá cena BTC z CoinGecko (obnova každých 5 minut), poslední ATH a vzdálenost od něj
- 🔔 Notifikace při překonání ATH a při změně fáze cyklu
- 🎨 Tři témata (tmavé, světlé, OLED) a tři velikosti písma
- 🔪 Halving countdown
- 🌍 Vizuální časová osa pro budoucí cykly
- 💾 Lokální ukládání nastavení (localStorage)
- 📴 Offline režim přes service worker

## 🎯 Aktuální verze

**v1.1.1** — Graf Power Law se skutečnou historií ceny, který se sám udržuje aktuální

> Detailní changelog viz nahoře v sekci 📜 Changelog.

---

Made with ❤️ a Bitcoin maximalismem 🟠
