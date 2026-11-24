# Weekly Kroger Planner

Plan seven single-serving meals and generate one aisle-by-aisle shopping list. The starter week includes HelloFresh-inspired meals and two end-of-week freezer meals.

- Choose meals and combine ingredients into full grocery packages.
- Add regular staples and household products, edit prices, mark items on hand and check off purchases.
- Track the food and household subtotals against an editable weekly budget. Prices are planning estimates.
- Copy the unchecked list to text. Plans and prices are saved in the current browser. After the site has loaded online and the browser has cached it, it can reopen offline.

## Local preview

Run `python3 -m http.server 8767` from this folder and open [localhost:8767](http://localhost:8767). No build step or account is required for the planner.

## GitHub Pages

Use the repository’s main branch and root directory as the Pages publishing source. Keep `.nojekyll` in the published folder. If changing the app shell, advance the cache version in `sw.js`.
