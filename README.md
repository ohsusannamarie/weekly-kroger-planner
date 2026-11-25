# Dakota’s Grocery Planner

Pick single-serving meals, see how to cook them, and build a Kroger list that fits a weekly food and household budget.

**[Open the live planner](https://ohsusannamarie.github.io/weekly-kroger-planner/)**

## Menu and recipes

- Tap a meal card to open its serving photo, measured ingredients, and step-by-step directions. The library has **53 recipes**, including French onion soup with Swiss toast, broccoli cheddar soup, and creamy roasted garlic tomato soup with cheddar toast. The serving photos are generated.
- Use **Add to week** on the card or inside the recipe. Open recipes again from the Plan tab when it’s time to cook.
- Set **Max per serving ($)** to filter the current Menu view by estimated serving cost. It works with the food categories and weekly picks. **Clear price** brings back the full set for that view.
- **All meals** shows the full library. **This week’s picks** shows the current suggestions, marked with a star. **Add weekly picks** adds up to six eligible suggestions and opens that view. **Pick for me** uses the weekly suggestions to build a plan.
- Mark meals you love or hide ones you want to skip. Restore hidden meals from the **Hidden** filter.

## Plan, shop, and track spending

- **Plan** lets you schedule meals around shopping day and select Cook fresh, Freeze it, or Mid-week run for fresh proteins. Choose two freezer or pantry meals for the end of the week. Follow the safe cooking temperatures linked in recipes. [FoodSafety.gov temperature chart](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures)
- **List** combines shared ingredients into whole grocery packages, shows food and household totals, and makes a separate list for a midweek trip if needed. Add coffee supplies, regular groceries, and household items as needed. Tap a price to update it.
- **Trip** records what you spent, separates main trips and top-ups, and shows the past seven days against the weekly budget. It also shows which portions to freeze. Start a new menu when you’re ready for the next week.

Per-serving prices use the planner’s estimated share of each package. The checkout estimate uses whole packages, extras, and applicable household tax. Recipe measurements are for cooking one serving.

## Run or publish

This is a static site. Run `python3 -m http.server 8767` in the repository and open [localhost:8767](http://localhost:8767). For GitHub Pages, publish from the root of the `main` branch.

Data stays in the browser on the current device. The app can reopen offline after its first online load finishes caching the site and photos. Clearing browser site data removes the saved plan and history.

## Edit the menu

- `index.html` contains the meal catalog, shopping quantities, prices, and planner logic. `recipes.js` contains the cooking amounts and directions, keyed by meal ID.
- Give each new meal the same ID in the catalog, `recipes.js`, and `meals/<id>.webp`. Add its photo to the offline asset list in `sw.js`. If the recipe file URL changes, update the matching entry in `sw.js` and advance the cache version.
