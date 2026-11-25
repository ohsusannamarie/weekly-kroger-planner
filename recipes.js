'use strict';

// Cooking quantities are for one portion. The planner estimates whole-package purchases separately.
const recipe = (ingredients, ...steps) => ({ingredients:ingredients.split('|'),steps});
const RECIPES = {
  frenchonion: recipe(
    '1 medium yellow onion, thinly sliced|1 tbsp salted butter|1¼ cups beef broth|½ tsp Worcestershire sauce|1 slice bread|1 oz sliced Swiss cheese',
    'Melt the butter in a small saucepan over medium-low heat. Add the onion and cook 25–30 minutes, stirring occasionally, until deep golden. Add a splash of water if the pan starts to dry out or the onion catches.',
    'Pour in the broth and Worcestershire, scraping up any browned bits. Simmer uncovered for 8–10 minutes. Taste before adding salt.',
    'Toast the bread. Put it on a broiler-safe tray, top with the Swiss and broil for 1–2 minutes, watching closely. Pour the soup into a bowl and float the cheese toast on top.'
  ),
  brocched: recipe(
    '1 cup frozen broccoli florets|⅓ cup shredded sharp cheddar|¼ cup heavy cream|¾ cup chicken broth|¼ cup finely diced yellow onion|1 tbsp salted butter',
    'Melt the butter in a small saucepan over medium heat. Cook the onion for 4–5 minutes, until softened.',
    'Add the broth and broccoli. Bring to a simmer, cover and cook 8–10 minutes, until the broccoli is very tender. Mash about half of it against the side of the pot to thicken the soup.',
    'Stir in the cream and warm gently. Take the pot off the heat and stir in the cheddar by the handful until melted. Taste and season if needed.'
  ),
  tomsoup: recipe(
    '½ cup jarred roasted garlic pasta sauce|½ cup chicken broth|2 tbsp heavy cream|¼ tsp garlic seasoning, or to taste|1 slice bread|1 slice sharp cheddar',
    'Stir the pasta sauce, broth and garlic seasoning together in a small saucepan. Bring to a gentle simmer and cook uncovered for 8–10 minutes. For a smoother texture, blend briefly with an immersion blender if you have one.',
    'Toast the bread, top it with cheddar and broil on a broiler-safe tray for 1–2 minutes, watching closely. A covered skillet on low heat also works for melting the cheese.',
    'Turn the heat under the soup to low and stir in the cream. Warm through without boiling. Taste, then serve with the cheddar toast for dipping.'
  ),
  meatloaf: recipe(
    '6 oz ground beef|2 tbsp finely diced onion|1 tbsp ketchup, divided|½ tsp Worcestershire sauce|1 medium russet potato, peeled and cubed|1 tbsp salted butter|1 tbsp heavy cream',
    'Heat the oven to 400°F. Mix the beef, onion, Worcestershire and half the ketchup gently. Shape into a small loaf about 1 inch thick and spread the rest of the ketchup on top.',
    'Bake on a rimmed tray for 18–25 minutes, until the center reaches 160°F.',
    'Boil the potato cubes in salted water for 12–15 minutes, until fork-tender. Drain and mash with the butter and cream. Let the mini meatloaf rest for a few minutes before serving.'
  ),
  tacos: recipe(
    '5 oz ground beef|1 tbsp taco seasoning|2 small flour tortillas|¼ cup shredded cheese|2 tbsp salsa|2 tbsp diced onion',
    'Brown the beef and onion in a skillet, breaking up the meat, until it reaches 160°F. Drain excess fat if needed.',
    'Stir in the seasoning and 2 tbsp water. Simmer for 1–2 minutes, until the liquid coats the beef.',
    'Warm the tortillas and fill with the beef, cheese and salsa.'
  ),
  swissburg: recipe(
    '5 oz ground beef|1 hamburger bun|½ cup sliced baby bella mushrooms|1 slice Swiss cheese|¼ cup sliced onion',
    'Cook the mushrooms and onion in a lightly oiled skillet over medium-high heat until browned, 6–8 minutes. Transfer to a plate.',
    'Shape the beef into one patty. Season lightly and sear in the same skillet until it reaches 160°F. Add Swiss near the end and cover until melted.',
    'Toast the bun if you like. Add the patty, mushrooms and onions.'
  ),
  chilibeef: recipe(
    '⅓ cup dry rice|5 oz ground beef|1 cup green beans, trimmed and chopped|2 tbsp sweet chili sauce',
    'Start the rice using the cooker’s small-batch directions.',
    'Brown the beef in a skillet, breaking it up, until it reaches 160°F. Spoon off excess fat if needed.',
    'Add the green beans and a splash of water. Cover for 3–5 minutes, until crisp-tender. Uncover, stir in sweet chili sauce and serve over the rice.'
  ),
  shep: recipe(
    '1 medium russet potato, peeled and cubed|5 oz ground beef|½ cup frozen peas and carrots|¼ cup diced onion|¼ cup chicken broth|1 tbsp salted butter|2 tbsp shredded cheese',
    'Boil the potato for 12–15 minutes. Drain and mash with the butter and a splash of cooking water.',
    'Brown the beef and onion in a small skillet until the meat reaches 160°F. Add the vegetables and broth. Simmer until the vegetables are hot and the filling is thick.',
    'Spoon into a small oven-safe dish, add the mash and sprinkle with cheese. Bake at 425°F until the cheese browns and the center reaches 165°F, about 8–12 minutes.'
  ),
  porkchop: recipe(
    '1 boneless pork loin chop|1 medium russet potato, peeled and cubed|1 tbsp salted butter, divided|2 tbsp heavy cream|½ tsp Worcestershire sauce|¼ cup sliced onion',
    'Boil the potato for 12–15 minutes, then drain and mash with half the butter and the cream.',
    'Season the chop lightly and sear in a lightly oiled skillet until it reaches 145°F. Transfer to a plate and rest for 3 minutes.',
    'Cook the onion in the remaining butter until soft. Add Worcestershire and 2 tbsp water, scrape up the browned bits, and spoon over the chop.'
  ),
  sloppy: recipe(
    '5 oz ground pork|1 hamburger bun|2 tbsp BBQ sauce|1 tbsp ketchup|¼ cup diced onion',
    'Toast the bun. In a skillet, brown the pork and onion, breaking up the meat, until it reaches 160°F.',
    'Add BBQ sauce, ketchup and a splash of water. Simmer 2–3 minutes, until thick enough to hold on the bun.',
    'Spoon the filling onto the toasted bun and serve.'
  ),
  bolog: recipe(
    '2 oz dry cavatappi|5 oz ground pork|½ cup roasted garlic pasta sauce|¼ cup diced onion|2 tbsp shredded cheese',
    'Cook the cavatappi according to the package and reserve a spoonful of pasta water.',
    'Brown the ground pork and onion until the pork reaches 160°F. Stir in the sauce and simmer for 3–5 minutes.',
    'Toss with the cavatappi. Loosen with a little pasta water if needed and top with cheese.'
  ),
  quesa: recipe(
    '2 strips thick-cut bacon|2 small flour tortillas|⅓ cup shredded cheese',
    'Cook the bacon in a skillet until crisp. Drain on a plate and crumble. Wipe out most of the bacon fat.',
    'Scatter the cheese and bacon between the tortillas. Toast in the same skillet over medium heat for 2–3 minutes per side.',
    'Once the cheese melts and both sides are golden, cut into wedges.'
  ),
  potsoup: recipe(
    '1 medium russet potato, peeled and diced|2 strips bacon, chopped|¼ cup diced onion|1 cup chicken broth|2 tbsp heavy cream|¼ cup shredded cheese',
    'Crisp the bacon in a small saucepan and set it aside. Leave about 1 tsp bacon fat in the pot and soften the onion in it.',
    'Add the potato and broth. Simmer covered for 12–15 minutes, then mash a few cubes in the pot to thicken the soup.',
    'Stir in the cream on low heat. Turn off the heat, melt in the cheese and top with crisp bacon.'
  ),
  cheesestk: recipe(
    '5 oz chicken breast, thinly sliced|1 hoagie roll|¼ cup shredded cheese|1 tbsp buffalo sauce|¼ cup sliced onion',
    'Soften the onion in a lightly oiled skillet, then add the chicken. Cook, stirring, until the chicken reaches 165°F.',
    'Toss with buffalo sauce. Pile the filling to one side of the skillet, top with cheese and cover briefly until melted.',
    'Toast the split hoagie and slide the chicken and onions inside.'
  ),
  potpie: recipe(
    '5 oz chicken breast, cut into small cubes|1 refrigerated biscuit|½ cup frozen peas and carrots|½ cup chicken broth|¼ cup heavy cream|¼ cup diced onion',
    'Heat the oven to the biscuit package temperature. Soften the onion in a lightly oiled skillet, brown the chicken, and stir in the broth and vegetables.',
    'Simmer until the chicken reaches 165°F, then add cream and reduce briefly. Pour into a small oven-safe dish on a rimmed tray.',
    'Cut the biscuit in two horizontally and arrange the pieces on top. Bake according to the biscuit directions until baked through and the filling reaches 165°F.'
  ),
  lomein: recipe(
    '2 oz dry lo mein noodles|5 oz chicken breast, thinly sliced|1 cup frozen stir-fry vegetables|1 tbsp sweet chili sauce|1 tsp soy sauce',
    'Cook and drain the noodles according to the package.',
    'Stir-fry the chicken in a lightly oiled skillet until it reaches 165°F. Add the frozen vegetables and cook as directed, letting excess moisture evaporate.',
    'Toss the noodles into the skillet with the sweet chili sauce and soy sauce. Stir for a minute, until everything is hot.'
  ),
  taqbowl: recipe(
    '⅓ cup dry rice|5 oz chicken breast, diced|2 tsp taco seasoning|¼ cup shredded cheese|3 tbsp salsa',
    'Start the rice cooker. Toss the diced chicken with taco seasoning.',
    'Cook the chicken in a lightly oiled skillet until it reaches 165°F. Add a splash of water if the seasoning starts to stick.',
    'Spoon the chicken over the rice, then add cheese and salsa.'
  ),
  turkragu: recipe(
    '2 oz dry spaghetti|5 oz ground turkey|½ cup roasted garlic pasta sauce|¼ cup diced onion',
    'Boil the spaghetti according to the package.',
    'Cook onion and turkey in a lightly oiled skillet, breaking the turkey up until it reaches 165°F. Stir in the sauce and simmer 3–5 minutes.',
    'Toss with the drained spaghetti, adding a spoonful of pasta water if the sauce is too thick.'
  ),
  szechtaco: recipe(
    '5 oz ground turkey|2 small flour tortillas|1 tsp soy sauce|1 tbsp sweet chili sauce',
    'Brown the turkey in a lightly oiled skillet, breaking it into crumbles until it reaches 165°F.',
    'Stir in the soy and sweet chili sauces and let them coat the turkey for about a minute.',
    'Warm the tortillas and divide the turkey between them. Add more sweet chili to taste.'
  ),
  scampi: recipe(
    '5 oz frozen raw shrimp, thawed in the fridge, peeled and patted dry|2 oz dry spaghetti|1 tbsp salted butter|¼ tsp garlic seasoning|2 tbsp heavy cream',
    'Cook and drain the spaghetti, saving 2 tbsp pasta water.',
    'Melt the butter in a skillet. Add the shrimp and cook until pearly and opaque throughout, about 1–2 minutes per side depending on size.',
    'Reduce the heat, add garlic seasoning, cream and a splash of pasta water. Toss with the spaghetti and serve as soon as the sauce coats the noodles.'
  ),
  snackplate: recipe(
    '3 oz deli honey ham|1½ oz Colby Jack or Gouda|6–8 crackers|1 small apple',
    'Wash and slice the apple. Cut the cheese into a few bite-sized pieces.',
    'Arrange the ham, cheese, crackers and fruit on one plate and eat chilled.'
  ),
  smashburg: recipe(
    '5 oz ground beef|2 strips bacon|1 hamburger bun|1 slice sharp cheddar|¼ cup thinly sliced onion',
    'Cook the bacon until crisp and set it aside. Leave a little fat in the skillet and cook the onion until soft and browned.',
    'Shape the beef into a loose ball. Set it in the hot skillet and press into one thin patty. Flip once browned and cook to 160°F. Add cheddar to melt.',
    'Toast the bun and fill it with the patty, bacon and onion.'
  ),
  nachos: recipe(
    '5 oz ground beef|2 tsp taco seasoning|2 oz tortilla chips|⅓ cup shredded cheese|2 tbsp salsa|1 tbsp sour cream',
    'Brown the beef in a skillet to 160°F and drain excess fat. Add seasoning and 2 tbsp water and simmer until coated.',
    'Layer chips, beef and cheese in a small oven-safe skillet. Broil briefly, watching closely, until melted. For a stovetop option, cover it on low heat until the cheese melts.',
    'Top with salsa and sour cream and eat while the chips are crisp.'
  ),
  cheeseburgmac: recipe(
    '2 oz dry elbow macaroni|5 oz ground beef|¼ cup shredded cheese|¼ cup whole milk|¼ cup diced onion|2 tsp ketchup',
    'Boil the macaroni according to the package and drain.',
    'In the same pot, brown the beef and onion until the meat reaches 160°F. Drain fat and turn the heat low.',
    'Add the macaroni, milk and ketchup. Stir, then melt in the cheese off the heat. Add a splash of hot water if it needs loosening.'
  ),
  stuffedpep: recipe(
    '5 oz ground beef|4 oz sweet mini peppers, chopped|⅓ cup dry rice|¼ cup shredded cheese|⅓ cup roasted garlic pasta sauce|¼ cup diced onion',
    'Start the rice cooker. Sauté chopped peppers and onion in a lightly oiled skillet until softened.',
    'Add the beef and cook, breaking it up, until it reaches 160°F. Stir in the sauce and simmer for a few minutes.',
    'Fold in the cooked rice and scatter the cheese on top. Cover briefly to melt.'
  ),
  terimeat: recipe(
    '⅓ cup dry rice|5 oz ground beef|1 cup frozen broccoli|2 tbsp teriyaki sauce',
    'Start the rice cooker. Brown the beef in a skillet until it reaches 160°F and drain excess fat.',
    'Add broccoli and a splash of water. Cover and cook as directed on the bag until the broccoli is hot and tender, then uncover to let excess water evaporate.',
    'Stir in the teriyaki sauce and spoon over the fresh rice.'
  ),
  meatsub: recipe(
    '5 oz ground beef|½ cup roasted garlic pasta sauce|1 slice provolone|1 hoagie roll|¼ tsp garlic seasoning',
    'Mix the beef with garlic seasoning and shape into 4 small meatballs. Brown all sides in a lightly oiled skillet.',
    'Pour in the sauce, cover and simmer until the meatballs reach 160°F.',
    'Toast the hoagie. Add the meatballs, sauce and provolone, then broil briefly on a broiler-safe tray until melted.'
  ),
  steakbites: recipe(
    '5 oz thin-sliced beef chuck steak, cut into bite-size pieces|1 medium russet potato, cubed|1 tbsp salted butter|¼ tsp garlic seasoning|1 tsp Worcestershire sauce',
    'Microwave the potato cubes with a splash of water in a loosely covered microwave-safe bowl until nearly tender, 4–6 minutes. Drain well.',
    'Brown the potatoes in a lightly oiled skillet. Transfer them to a plate. Sear the steak pieces in the same hot skillet to 145°F and let them rest 3 minutes.',
    'Melt butter with the garlic seasoning and Worcestershire. Toss with the potatoes and rested steak.'
  ),
  cheesesteak2: recipe(
    '5 oz thin-sliced beef chuck steak|4 oz sweet mini peppers, sliced|¼ cup sliced onion|1 slice provolone|1 hoagie roll',
    'Cook peppers and onion in a lightly oiled skillet until softened. Set aside and turn up the heat.',
    'Sear the steak to 145°F and rest it 3 minutes. Toss with peppers and onion, cover with provolone and warm just until melted.',
    'Pile everything into a toasted hoagie.'
  ),
  mushchop: recipe(
    '1 boneless pork loin chop|½ cup baby bella mushrooms, sliced|¼ cup heavy cream|¼ cup sliced onion|1 tbsp salted butter|¼ cup chicken broth|⅓ cup dry rice',
    'Start the rice cooker. Sear the chop in a lightly oiled skillet to 145°F and let it rest 3 minutes.',
    'In the same skillet, melt the butter and brown the mushrooms and onion. Add broth and scrape up the browned bits.',
    'Stir in cream and simmer gently until it lightly coats a spoon. Serve over the chop and fresh rice.'
  ),
  honeychop: recipe(
    '1 boneless pork loin chop|1 tbsp honey|2 tsp soy sauce|¼ tsp garlic seasoning|⅓ cup dry rice|1 cup frozen broccoli',
    'Start the rice and cook the broccoli according to its package. Mix honey, soy and garlic seasoning.',
    'Sear the chop in a lightly oiled skillet. In the final minute add the honey mixture and turn to coat. Cook to 145°F, then rest 3 minutes.',
    'Serve with fresh rice and broccoli. Spoon any cooked glaze over the chop.'
  ),
  baconmac: recipe(
    '2 strips thick-cut bacon, chopped|2 oz dry elbow macaroni|⅓ cup shredded cheese|¼ cup heavy cream|1 loose cup baby spinach',
    'Cook the macaroni and drain. In the same pot, cook the bacon until crisp. Spoon out most of the fat.',
    'Wilt the spinach in the pot, then stir in cream and macaroni over low heat.',
    'Take off the heat and stir in the cheese. Add a spoonful of hot water if the sauce is too thick.'
  ),
  sausagegn: recipe(
    '5 oz Italian pork sausage, casings removed|4 oz potato gnocchi|4 oz sweet mini peppers, sliced|¼ cup sliced onion|½ cup roasted garlic pasta sauce|1 tbsp grated Parmesan',
    'Brown the sausage in a skillet until it reaches 160°F. Add the peppers and onion and cook until softened.',
    'Add sauce and gnocchi with a splash of water. Cover and simmer until the gnocchi are tender, using the package cook time as a guide.',
    'Uncover to thicken the sauce if needed. Finish with Parmesan.'
  ),
  sausagepot: recipe(
    '4 oz fully cooked smoked sausage, sliced|1 medium russet potato, cubed|¼ cup shredded cheese|¼ cup sliced onion|2 oz sweet mini peppers, sliced|1 tbsp ranch dressing',
    'Microwave the potato cubes with a splash of water in a loosely covered microwave-safe bowl for 4–6 minutes, until nearly tender. Drain.',
    'Brown the sausage in a skillet, add onion and peppers, then crisp the potatoes in the same pan. Follow the sausage package heating directions.',
    'Scatter cheese over the skillet and cover briefly to melt. Finish with ranch.'
  ),
  hamdelts: recipe(
    '3 oz deli honey ham|2 slices bread|1 slice provolone|2 tsp salted butter|1 tsp honey',
    'Layer the ham and provolone on the bread and drizzle with honey. Add a pinch of red pepper flakes if you have some and want heat.',
    'Butter the outside of the sandwich and toast in a skillet over medium-low heat for 2–3 minutes per side.',
    'Cover for the final minute if needed so the cheese melts. Cut in half to serve.'
  ),
  loadedspud: recipe(
    '1 medium russet potato|2 strips thick-cut bacon|¼ cup shredded cheese|1 tbsp sour cream|½ cup frozen broccoli',
    'Scrub and pierce the potato. Microwave 5–8 minutes, turning halfway, until a fork slides in. Let it rest while you cook the toppings.',
    'Cook bacon until crisp and crumble it. Cook the broccoli according to its package, then drain.',
    'Split the potato, add broccoli, bacon and cheese and microwave until the cheese melts. Top with sour cream.'
  ),
  buffquesa: recipe(
    '5 oz chicken breast, cut into small pieces|2 small flour tortillas|⅓ cup shredded cheese|1 tbsp buffalo sauce|1 tbsp ranch dressing',
    'Cook the chicken in a lightly oiled skillet until it reaches 165°F. Toss it with Buffalo sauce and transfer to a plate.',
    'Spread cheese and chicken between the tortillas. Toast in the same skillet for 2–3 minutes per side until golden and melted.',
    'Cut into wedges and serve with ranch.'
  ),
  honeythigh: recipe(
    '5 oz boneless chicken thigh, cut into bite-size pieces|⅓ cup dry rice|1 tbsp honey|2 tsp soy sauce|¼ tsp garlic seasoning|1 cup frozen broccoli',
    'Start fresh rice and cook the broccoli according to the bag. Mix honey, soy sauce and garlic seasoning.',
    'Brown the chicken in a lightly oiled skillet. Add the sauce toward the end and cook until the chicken reaches 165°F.',
    'Serve the glazed chicken and broccoli over rice.'
  ),
  cajunalf: recipe(
    '5 oz chicken breast, thinly sliced|2 oz dry fettuccine|¼ cup heavy cream|2 tbsp grated Parmesan|½ tsp Cajun seasoning|1 loose cup baby spinach',
    'Cook the pasta and reserve 2 tbsp pasta water. Toss the chicken in Cajun seasoning.',
    'Sear the chicken in a lightly oiled skillet until it reaches 165°F. Add the spinach and stir until wilted.',
    'Lower the heat. Add cream and pasta, then stir in Parmesan off the heat. Thin with pasta water if needed.'
  ),
  potpiesoup: recipe(
    '4 oz shredded rotisserie chicken|½ cup frozen peas and carrots|1 small russet potato, diced|1 cup chicken broth|¼ cup heavy cream|¼ cup diced onion',
    'Soften diced onion in a lightly oiled saucepan. Add potato and broth and simmer 10–12 minutes, until the potato is tender.',
    'Add the frozen vegetables and cook according to the package. Add the chicken and heat to 165°F.',
    'Stir in cream on low heat. Mash a few potato pieces in the soup for a thicker finish.'
  ),
  bbqflat: recipe(
    '3 oz shredded rotisserie chicken|2 tbsp BBQ sauce|1 flour tortilla|¼ cup shredded cheese|2 tbsp thinly sliced onion',
    'Heat the oven to 425°F. Set the tortilla on a baking tray and bake 2–3 minutes to start crisping the base.',
    'Toss the chicken with BBQ sauce. Spread it over the tortilla with onion and cheese.',
    'Bake 6–9 minutes, until the edges crisp, the cheese melts and the chicken topping reaches 165°F.'
  ),
  fajita: recipe(
    '5 oz chicken breast, cut into strips|4 oz sweet mini peppers, sliced|¼ cup sliced onion|2 small flour tortillas|2 tbsp shredded cheese|2 tsp taco seasoning|1 tbsp sour cream',
    'Sear the peppers and onion in a lightly oiled skillet, then set aside.',
    'Season the chicken and cook it in the skillet until it reaches 165°F. Return the vegetables and add a splash of water to coat everything.',
    'Serve in warm tortillas with cheese and sour cream.'
  ),
  turkspud: recipe(
    '5 oz ground turkey|1 small sweet potato, peeled and cubed|¼ cup diced onion|2 tsp taco seasoning|¼ cup shredded cheese|1 loose cup baby spinach',
    'Microwave the sweet potato with a splash of water in a loosely covered microwave-safe bowl until almost tender, 4–6 minutes.',
    'Brown onion and turkey in a lightly oiled skillet until the turkey reaches 165°F. Add taco seasoning, the drained sweet potato and spinach.',
    'Cook until the spinach wilts and the potato is tender. Sprinkle with cheese and cover until melted.'
  ),
  turkburg: recipe(
    '5 oz ground turkey|1 hamburger bun|1 slice pepper jack|1 tbsp ranch dressing|¼ cup sliced onion',
    'Shape the turkey into one patty and season lightly. Cook in an oiled skillet until the center reaches 165°F.',
    'Cook the sliced onion alongside the patty if there is room, or in the same skillet afterward. Top the patty with pepper jack and cover briefly to melt.',
    'Toast the bun, spread with ranch and add the burger and onion.'
  ),
  cajunshrimp: recipe(
    '5 oz frozen raw shrimp, thawed in the fridge and peeled|⅓ cup dry rice|½ tsp Cajun seasoning|3 oz sweet mini peppers, chopped|1 tbsp salted butter',
    'Start the rice cooker. Toss patted-dry shrimp with the Cajun seasoning.',
    'Sauté the peppers in butter, then add shrimp and cook until pearly and opaque throughout.',
    'Fold in the fresh rice and toss in the pan for about a minute.'
  ),
  shrimptaco: recipe(
    '5 oz frozen raw shrimp, thawed in the fridge and peeled|2 small flour tortillas|1 cup chopped salad-kit greens|1 tsp Sriracha|1 tbsp sour cream',
    'Mix the greens with enough of the kit dressing to lightly coat them. Stir half the Sriracha into the sour cream.',
    'Cook the shrimp in a lightly oiled skillet until pearly and opaque throughout. Toss with the remaining Sriracha.',
    'Warm the tortillas and fill with greens, shrimp and the Sriracha sour cream.'
  ),
  terisalmon: recipe(
    '1 frozen salmon fillet, thawed in the fridge as directed on its package|⅓ cup dry rice|1 cup frozen broccoli|2 tbsp teriyaki sauce',
    'Start the rice cooker and cook the broccoli according to the package.',
    'Pat the salmon dry. Sear in a lightly oiled skillet, turning once, until it reaches 145°F. Brush with teriyaki near the end of cooking.',
    'Serve the salmon and broccoli over fresh rice.'
  ),
  tilapiataco: recipe(
    '1 tilapia fillet (about 5 oz), thawed in the fridge as directed on its package|2 small flour tortillas|½ tsp Cajun seasoning|1 cup chopped salad-kit greens|1 tbsp sour cream',
    'Pat the fish dry and season with Cajun seasoning. Toss the greens with a little of the kit dressing.',
    'Sear the fish in an oiled skillet until the center reaches 145°F and flakes easily.',
    'Flake the fish into warm tortillas and top with dressed greens and sour cream.'
  ),
  ramenglow: recipe(
    '1 ramen packet|1 egg|3 oz fully cooked smoked sausage, sliced|½ cup frozen stir-fry vegetables|1 tsp soy sauce|½ tsp Sriracha',
    'Bring the package amount of water to a boil. Add the vegetables and sliced sausage and cook as directed. Add the noodles for their package cook time.',
    'Crack in the egg, cover and simmer until both the white and yolk are firm, adding time as needed. Stir in some ramen seasoning to taste.',
    'Finish with soy sauce and Sriracha. Start with a little soy because the ramen seasoning is salty.'
  ),
  pinwheels: recipe(
    '3 oz deli honey ham|2 small flour tortillas|2 tbsp softened cream cheese|1 tsp ranch dressing',
    'Stir ranch into the cream cheese and spread it thinly over both tortillas.',
    'Layer on the ham and roll the tortillas tightly. Slice into bite-size pinwheels and serve chilled.'
  ),
  velvglow: recipe(
    '1 Velveeta Shells & Cheese microwave cup|2 strips thick-cut bacon|½ cup frozen broccoli',
    'Cook the bacon until crisp. Cook broccoli according to the package, drain and chop.',
    'Prepare the Velveeta cup using its microwave directions. Stir in the cheese sauce.',
    'Fold in the broccoli and top with crumbled bacon.'
  ),
  pizzaup: recipe(
    '1 serving frozen pizza (see box)|2 tbsp shredded cheese|2 tbsp thinly sliced onion|1 tbsp ranch dressing',
    'Bake the pizza from frozen according to its package. If the box calls for baking it whole, follow those directions and portion after cooking.',
    'In the last few minutes, scatter onion and extra cheese over your serving and bake until melted and the pizza is cooked through.',
    'Finish with a little ranch for dipping.'
  ),
  spudbowl: recipe(
    '1 Idahoan Roasted Garlic mashed potato cup|4 oz fully cooked smoked sausage, sliced|2 tbsp shredded cheese|½ cup frozen broccoli',
    'Prepare the potato cup and broccoli according to their packages.',
    'Brown the sausage in a small skillet and heat it as directed on the package.',
    'Serve the sausage and broccoli over the hot mash, then add the cheese.'
  ),
};
