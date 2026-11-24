# Dakota's Grocery Planner

A phone-first weekly grocery list builder. No backend, no accounts: everything saves in the browser on whichever device he uses.

## What it does
- **Meal library:** 50 meals, including new ideas built from his taste profile (his proteins, cheese, bold sauces, Tex-Mex, sweet and spicy Asian, garlicky Italian, steakhouse, BBQ, vegetables hidden inside dishes). The rest are his favorites and past HelloFresh hits. Every meal is single-serving, one pan or pot, with no canned food and no scrambled eggs. The picker leads with 3 suggestions picked for him. Every meal has a generated serving photo.
- **Plan tab:** pick meals for each day after the shopping trip. Each fresh-protein meal is set to Cook fresh, Freeze it, or Mid-week run. Days 3 to 6 default to Freeze so the 72 hour rule holds. Auto-fill suggests a week that fits the budget.
- **List tab:** builds the main trip list by store section, merges shared ingredients into whole packages, and runs a separate mid-week protein list. Coffee kit check (heavy cream, cane sugar, Café Bustelo), fruit and salad kit, weekly basics, backup stash, household.
- **Next week:** after logging a main trip, Start next week's menu clears the plan and builds a new menu. Add staples and household supplies as needed.
- **Trip tab:** log what you actually spent, separate main trips from top-ups, see the past 7 days against $75, and get a freeze-tonight checklist.
- Prices marked `~` are estimates. Unmarked prices came from his Kroger receipts (Apr to Aug 2026). Tap any price to correct it and the app remembers.

## Publish on GitHub Pages
1. Upload `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `bowl.jpg` and the `meals/` folder to the repo root.
2. Settings > Pages > Source: Deploy from a branch > `main` / root > Save.
3. Open `https://<your-username>.github.io/dakota-groceries/` on his phone, then Share > Add to Home Screen.

## Editing the data
Meals, items, prices and the coffee kit live at the top of the `<script>` in `index.html` (`ITEMS`, `MEALS`, `KIT`). Source for the numbers: Dakota's Food Profile doc.

## Notes
- Data is per device. Clearing site data erases the plan and history.
- Canned foods are deliberately absent (he avoids them), so there is no chili.
- Add your own meals by copying a line in `MEALS` and listing item ids with the fraction of a package each meal uses. Save its serving photo as `meals/<id>.webp` and include it in the offline asset list in `sw.js`.
