
# Nordic SkyOps – Drönarquiz (GitHub Pages)

Detta är en helt statisk sajt med React (via CDN), Tailwind (via CDN) och PWA (manifest + service worker).

## Publicera på GitHub Pages (enkelt)
1. Skapa en ny publik repository på GitHub, t.ex. `skyops-quiz`.
2. Ladda upp alla filer och mappar i den här zippen till repo:t (index.html, manifest.json, sw.js, icons/, nordic-skyops-logo.png).
3. Gå till **Settings → Pages**. Under **Build and deployment**, välj **Deploy from a branch**.
4. Välj branch **main** och **/(root)**. Spara. Vänta tills GitHub visar en URL (t.ex. https://dittkonto.github.io/skyops-quiz/).
5. Öppna länken i mobilen och välj **Lägg till på hemskärmen** (PWA-installation).

Tips: Om du ändrar repo-namn/URL, ligger allt relativt (start_url = ".") så PWA funkar på GitHub Pages.

## Redigera frågor
- All logik och frågebank ligger i `index.html` (script med type="text/babel").
- Sök efter `const bank = [` för att lägga till/ändra frågor.
