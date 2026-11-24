# Weekly Kroger Planner

Pick seven single-serving meals from a rotating weekly menu and generate one aisle-by-aisle shopping list. Choose from original ideas, HelloFresh-inspired meals, and freezer and pantry options. The optional starter plan shows a complete week.

- Pick meals from the menu and see them placed by freshness. The last two days have their own freezer and pantry options.
- Combine ingredients into full grocery packages while you pick.
- Add regular staples and household products, edit prices, mark items on hand and check off purchases.
- Track the food and household subtotals against an editable weekly budget. Prices are planning estimates.
- Copy the unchecked list to text. Plans and prices are saved in the current browser. After the site has loaded online and the browser has cached it, it can reopen offline.

## Local preview

Run `python3 -m http.server 8767` from this folder and open [localhost:8767](http://localhost:8767). No build step or account is required for the planner.

## GitHub Pages

Use the repository’s main branch and root directory as the Pages publishing source. Keep `.nojekyll` in the published folder. If changing the app shell, advance the cache version in `sw.js`.
