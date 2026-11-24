'use strict';

const groups = ['Produce', 'Meat & seafood', 'Frozen', 'Dairy & deli', 'Pantry', 'Household'];
// Quantities used by recipes are in the same units as their package sizes.
const products = {
  apple: ['Honeycrisp apple', 'Produce', 125, 1, 'each'],
  banana: ['Bananas', 'Produce', 63, 1, 'each'],
  onion: ['Yellow onion', 'Produce', 85, 1, 'each'],
  mushroom: ['Sliced baby bella mushrooms', 'Produce', 250, 8, 'oz'],
  beef: ['Kroger 80/20 ground beef', 'Meat & seafood', 700, 16, 'oz'],
  pork: ['Boneless pork loin chop', 'Meat & seafood', 500, 1, 'chop'],
  shrimp: ['Frozen cooked peeled shrimp', 'Frozen', 900, 12, 'oz'],
  beans: ['Frozen cut green beans', 'Frozen', 125, 12, 'oz'],
  edamame: ['Frozen shelled edamame', 'Frozen', 260, 12, 'oz'],
  pizza: ['CPK BBQ chicken personal pizza', 'Frozen', 450, 1, 'pizza'],
  icecream: ['Caramel ice cream', 'Frozen', 450, 1, 'tub'],
  cheese: ['Shredded cheddar or Mexican blend', 'Dairy & deli', 250, 8, 'oz'],
  cream: ['Heavy whipping cream', 'Dairy & deli', 350, 16, 'fl oz'],
  yogurt: ['Chobani Flip yogurt', 'Dairy & deli', 125, 1, 'cup'],
  milk: ['Whole milk', 'Dairy & deli', 325, 1, 'gal'],
  butter: ['Salted butter', 'Dairy & deli', 400, 16, 'oz'],
  rice: ['Jasmine rice', 'Pantry', 350, 16, 'oz'],
  spaghetti: ['Spaghetti', 'Pantry', 150, 16, 'oz'],
  pastaSauce: ['Roasted-garlic pasta sauce', 'Pantry', 250, 24, 'oz'],
  chili: ['Sweet chili sauce', 'Pantry', 225, 10, 'fl oz'],
  tortillas: ['Soft taco flour tortillas', 'Pantry', 200, 10, 'tortillas'],
  bacon: ['Real bacon bits', 'Pantry', 250, 2.5, 'oz'],
  velveeta: ['Velveeta Shells & Cheese cup', 'Pantry', 175, 1, 'cup'],
  ramen: ['Maruchan ramen', 'Pantry', 75, 1, 'packet'],
  potato: ['Idahoan roasted garlic mashed potatoes', 'Pantry', 550, 4, 'cups'],
  coffee: ['Café Bustelo Dulce de Leche coffee', 'Pantry', 1050, 1, 'bag'],
  tp: ['Simple Truth recycled toilet paper', 'Household', 750, 12, 'rolls'],
  dish: ['Dawn Platinum dish soap', 'Household', 350, 13, 'fl oz']
};
const recipes = {
  beefBowl: { name:'Sweet chili beef & green bean bowl', inspired:true, before:2, time:'20 min', uses:{beef:6,onion:.25,beans:4,chili:1,rice:2}, steps:'Start rice. Brown beef with chopped onion to 160°F. Cook green beans as directed, then toss with beef and sweet chili sauce.' },
  ragu: { name:'Beef ragù spaghetti', inspired:true, before:2, time:'20 min', uses:{spaghetti:2,beef:6,onion:.25,mushroom:4,pastaSauce:4,cheese:1}, steps:'Cook spaghetti. Brown beef with onion and mushrooms to 160°F. Add pasta sauce, toss with spaghetti and top with shredded cheese. Inspired by turkey ragù.' },
  chop: { name:'Pork chop with mushroom cream sauce', before:3, time:'25 min', uses:{pork:1,mushroom:4,cream:2,rice:2,beans:4}, steps:'Cook fresh rice and green beans. Sear pork to 145°F and rest three minutes. Sauté mushrooms, add a splash of cream and season.' },
  quesadilla: { name:'Cheesy bacon quesadilla', inspired:true, time:'10 min', uses:{tortillas:2,cheese:2,bacon:1,edamame:4,chili:.5}, steps:'Toast tortillas filled with cheese and bacon bits in a dry skillet. Serve with cooked edamame and sweet chili sauce. Follow package storage directions once bacon is open.' },
  shells: { name:'Smoky Velveeta shells & edamame', time:'10 min', uses:{velveeta:1,edamame:4,bacon:.5}, steps:'Microwave the cup as directed. Stir in cooked edamame and bacon bits.' },
  pizza: { name:'Personal BBQ chicken pizza', reserve:true, time:'Follow box', uses:{pizza:1}, steps:'Keep frozen until dinner. Bake as directed on the box.' },
  shrimpBowl: { name:'Sweet chili shrimp & edamame rice bowl', inspired:true, reserve:true, time:'20 min', uses:{rice:2,shrimp:5,edamame:4,chili:1,beans:4}, steps:'Thaw just one portion of cooked shrimp in the fridge. Make fresh rice and cook the frozen vegetables as directed. Toss with sweet chili sauce and add the shrimp at the end to warm through.' },
  tacos: { name:'Sweet heat beef tacos', inspired:true, before:2, time:'15 min', uses:{beef:5,tortillas:2,onion:.25,cheese:1,chili:1}, steps:'Brown beef and onion to 160°F. Toss with sweet chili sauce and serve on toasted tortillas with cheese. Inspired by Szechuan turkey tacos.' },
  scampi: { name:'Butter shrimp & green bean spaghetti', inspired:true, reserve:true, time:'20 min', uses:{spaghetti:2,shrimp:5,butter:1,beans:4}, steps:'Thaw one shrimp portion in the fridge. Cook pasta and green beans. Toss with melted butter, season to taste and warm the shrimp through at the end. Inspired by garlic butter shrimp scampi.' },
  ramen: { name:'Sweet chili edamame ramen', reserve:true, time:'12 min', uses:{ramen:1,beans:4,edamame:5,chili:1}, steps:'Cook ramen and frozen vegetables as directed. Stir together with sweet chili sauce to taste.' },
  freezerRice: { name:'Sweet chili green bean & edamame rice bowl', reserve:true, time:'20 min', uses:{rice:2,beans:4,edamame:6,chili:1}, steps:'Cook fresh jasmine rice. Cook green beans and a generous portion of shelled edamame as directed. Toss with sweet chili sauce.' }
};
const starterMeals = ['beefBowl','ragu','chop','quesadilla','shells','pizza','shrimpBowl'];
const starterPacks = {apple:1,banana:2,yogurt:2,milk:1,tp:1,dish:1};
const key = 'weekly-kroger-planner-v1';
const $ = id => document.getElementById(id);
const dollars = new Intl.NumberFormat('en-US', {style:'currency',currency:'USD'});
const money = cents => dollars.format(cents / 100);
const weekday = new Intl.DateTimeFormat('en-US',{weekday:'short'});
const monthDay = new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric'});
const toDate = iso => new Date(iso + 'T12:00:00');
const isoDate = date => [date.getFullYear(), date.getMonth()+1, date.getDate()].map(n => String(n).padStart(2,'0')).join('-');
function dateAt(start, offset) {
  const date = toDate(start);
  date.setDate(date.getDate() + offset);
  return date;
}
function nextFriday() {
  const today = new Date();
  today.setDate(today.getDate() + (5 - today.getDay() + 7) % 7);
  return isoDate(today);
}
function initial() {
  return {start:nextFriday(), limit:7500, tax:70, meals:[...starterMeals], packs:{...starterPacks},
    prices:{}, stocked:{}, checked:{}, extras:[]};
}
function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved?.meals?.length === 7 && Array.isArray(saved.extras) && /^\d{4}-\d{2}-\d{2}$/.test(saved.start)) {
      return {...initial(), ...saved};
    }
  } catch { /* A new plan remains usable when storage is blocked. */ }
  return initial();
}
let state = restore();
function save() {
  try {
    localStorage.setItem(key, JSON.stringify(state));
    $('save-status').textContent = 'Your plan and list are saved in this browser.';
  } catch {
    $('save-status').textContent = 'Browser storage is unavailable. Copy your list before closing this page.';
  }
}
function escape(text) {
  return String(text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function lines() {
  const needed = {};
  for (const id of state.meals) {
    for (const [sku, qty] of Object.entries(recipes[id]?.uses ?? {})) {
      needed[sku] = (needed[sku] ?? 0) + qty;
    }
  }
  const rows = Object.entries(products).flatMap(([id,[name,group,price,size,unit]]) => {
    const count = Math.ceil((needed[id] ?? 0)/size)+(state.packs[id] ?? 0);
    const pack = size === 1 && unit === 'each' ? 'each' : size + ' ' + unit;
    return count ? [{id,name,group,count,pack,price:state.prices[id] ?? price,added:!!state.packs[id]}] : [];
  });
  return rows.concat(state.extras.map(row => ({...row,count:1,pack:'custom item',price:state.prices[row.id] ?? row.price,added:true})));
}
function renderDays() {
  $('days').innerHTML = state.meals.map((id, index) => {
    const date = dateAt(state.start,index);
    const meal = recipes[id];
    const options = Object.entries(recipes).map(([value,{name}]) => `<option value="${value}"${value===id?' selected':''}>${escape(name)}</option>`).join('');
    const warning = meal?.before && index >= meal.before
      ? '<p class="warning">Cook this earlier, or freeze the raw portion on shopping day and thaw it in the fridge.</p>' : '';
    return `<div class="day">
      <div class="dateline"><strong>${weekday.format(date)}</strong><small>${monthDay.format(date)}</small>${index>=5?'<span class="reserve">Reserve</span>':''}</div>
      <div><label class="sr" for="meal-${index}">Meal for ${weekday.format(date)} ${monthDay.format(date)}</label>
      <select id="meal-${index}" data-day="${index}"><option value="">Choose a meal</option>${options}</select>
      ${meal ? `<details><summary>${meal.time}${meal.inspired?' · HelloFresh-inspired':''} · How to cook</summary><p>${escape(meal.steps)}</p></details>` : ''}${warning}</div>
    </div>`;
  }).join('');
  const reserves = state.meals.slice(5).filter(id => recipes[id]?.reserve).length;
  const planned = state.meals.filter(id => recipes[id]).length;
  $('coverage').textContent = reserves === 2
    ? `${planned}/7 meals planned · Last two days covered with freezer or pantry meals.`
    : `${planned}/7 meals planned · Pick ${2-reserves} more freezer or pantry ${reserves===1?'meal':'meals'} for the last two days.`;
  $('coverage').classList.toggle('needs',reserves<2);
}
function summary(rows) {
  const due = rows.filter(r=>!state.stocked[r.id]);
  const food = due.filter(r=>r.group!=='Household').reduce((total,r)=>total+r.price*r.count,0);
  const home = due.filter(r=>r.group==='Household').reduce((total,r)=>total+r.price*r.count,0);
  const tax = due.length ? state.tax : 0;
  return {due,food,home,tax,total:food+home+tax};
}
function renderBudget(rows = lines()) {
  const {due,food,home,tax,total} = summary(rows);
  const remaining = state.limit-total;
  $('total').textContent = money(total);
  $('room').textContent = remaining < 0 ? money(-remaining)+' over budget' : money(remaining)+' left';
  $('room').classList.toggle('over',remaining<0);
  $('bar').style.width = Math.min(100,state.limit ? total/state.limit*100 : total ? 100 : 0)+'%';
  $('food-total').textContent = money(food)+' food';
  $('home-total').textContent = money(home)+' household';
  $('tax-total').textContent = money(tax)+' tax buffer';
  const checked = due.filter(r=>state.checked[r.id]).length;
  $('progress').textContent = due.length ? `${checked} of ${due.length} checked` : 'Nothing to buy yet';
  $('copy').disabled = due.length === checked;
}
function renderList(focusId) {
  const rows = lines();
  $('list').innerHTML = groups.map((group,i) => {
    const items = rows.filter(row => row.group === group);
    if (!items.length) return '';
    return `<section class="group" aria-labelledby="group-${i}"><h3 id="group-${i}">${group}</h3>${items.map(row => {
      const {id,name,count,pack,price,added} = row;
      const stocked = !!state.stocked[id];
      const bought = !!state.checked[id];
      const safeName = escape(name);
      return `<div class="row${stocked?' stocked':''}${bought?' bought':''}">
        <label class="item"><input type="checkbox" id="buy-${id}" data-buy="${id}"${bought?' checked':''}${stocked?' disabled':''} aria-label="Check off ${safeName}"><span><strong>${safeName}</strong><small>${count} × ${pack} ${stocked?'· on hand':'· '+money(count*price)}</small></span></label>
        <button class="have" id="have-${id}" data-have="${id}" aria-label="Mark ${safeName} as on hand" aria-pressed="${stocked}" type="button">${stocked?'On hand':'Have it'}</button>
        <label class="sr" for="price-${id}">Price per pack of ${safeName}</label><input id="price-${id}" data-price="${id}" type="number" min="0" max="9999" step=".01" inputmode="decimal" value="${(price/100).toFixed(2)}">
        ${added?`<button type="button" class="delete" data-remove="${id}" aria-label="Remove an extra pack of ${safeName}">Remove added pack</button>`:''}
      </div>`;
    }).join('')}</section>`;
  }).join('') || '<p class="muted list-note">Choose a meal or add an item to build your list.</p>';
  renderBudget(rows);
  if (focusId) $(focusId)?.focus({preventScroll:true});
}
function render() {
  $('start').value = state.start;
  $('limit').value = (state.limit/100).toFixed(2);
  $('tax').value = (state.tax/100).toFixed(2);
  renderDays();
  renderList();
}
function status(message) {
  $('action-status').hidden = false;
  $('action-status').textContent = message;
}
function cents(input) {
  const value = input.valueAsNumber;
  return input.validity.valid && Number.isFinite(value) ? Math.round(value*100) : null;
}
$('staple').innerHTML = Object.entries(products).map(([id,[name]])=>`<option value="${id}">${escape(name)}</option>`).join('');
$('start').addEventListener('change',event=>{
  if (!event.target.value) {event.target.value=state.start;return;}
  state.start=event.target.value;
  renderDays();
  save();
});
for (const name of ['limit','tax']) {
  $(name).addEventListener('change',event=>{
    const value = cents(event.target);
    if (value !== null) state[name] = value;
    event.target.value = (state[name]/100).toFixed(2);
    renderBudget();
    save();
  });
}
$('days').addEventListener('change',event=>{
  const {day} = event.target.dataset;
  if (day === undefined) return;
  state.meals[Number(day)] = event.target.value;
  // Preserve checked items only while the package count stays the same.
  const before = lastCounts;
  const after = new Map(lines().map(row=>[row.id,row.count]));
  for (const id of Object.keys(state.checked)) {
    if (!after.has(id) || before.get(id) !== after.get(id)) delete state.checked[id];
  }
  for (const id of Object.keys(state.stocked)) {
    if (after.get(id) > (before.get(id) ?? 0)) delete state.stocked[id];
  }
  renderDays();
  $('meal-'+day)?.focus({preventScroll:true});
  refreshList();
  save();
});
let lastCounts;
function refreshList(focusId) {
  lastCounts = new Map(lines().map(row=>[row.id,row.count]));
  renderList(focusId);
}
$('list').addEventListener('change',event=>{
  const {price,buy} = event.target.dataset;
  if (buy) state.checked[buy] = event.target.checked;
  if (price) {
    const value = cents(event.target);
    if (value !== null) state.prices[price] = value;
  }
  if (buy || price) {
    refreshList(event.target.id);
    save();
  }
});
$('list').addEventListener('click',event=>{
  const {have,remove} = event.target.dataset;
  if (have) {
    state.stocked[have] = !state.stocked[have];
    delete state.checked[have];
  } else if (remove) {
    if (products[remove]) state.packs[remove] = Math.max(0,(state.packs[remove] ?? 0)-1);
    else state.extras = state.extras.filter(row=>row.id!==remove);
    delete state.checked[remove];
  } else return;
  refreshList(have ? event.target.id : 'staple');
  save();
});
$('staple-form').addEventListener('submit',event=>{
  event.preventDefault();
  const id = $('staple').value;
  state.packs[id] = (state.packs[id] ?? 0)+1;
  delete state.checked[id];
  delete state.stocked[id];
  refreshList();
  save();
  status('Added a pack of '+products[id][0]+'.');
});
$('extra-form').addEventListener('submit',event=>{
  event.preventDefault();
  const name = $('extra-name').value.trim();
  const price = cents($('extra-price'));
  if (!name || price === null) {status('Enter a name and a price.');return;}
  state.extras.push({id:'extra-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8),name,price,group:$('extra-group').value});
  event.target.reset();
  refreshList();
  save();
  status('Added '+name+'.');
});
$('starter').addEventListener('click',()=>{
  if (!window.confirm('Replace this week’s meals and checklist with the starter plan?')) return;
  Object.assign(state,{meals:[...starterMeals],packs:{...starterPacks},stocked:{},checked:{},extras:[]});
  render();
  refreshList();
  save();
});
$('next').addEventListener('click',()=>{
  if (!window.confirm('Start a blank week? This clears meals, extras and checkmarks. Your budget and item prices carry over.')) return;
  Object.assign(state,{start:isoDate(dateAt(state.start,7)),meals:Array(7).fill(''),packs:{},stocked:{},checked:{},extras:[]});
  render();
  refreshList();
  save();
});
$('copy').addEventListener('click',async ()=>{
  const due = summary(lines()).due.filter(row=>!state.checked[row.id]);
  const output = ['Kroger list · '+monthDay.format(dateAt(state.start,0)),...groups.flatMap(group=>{
    const items = due.filter(row=>row.group===group);
    return items.length ? ['',group,...items.map(row=>`☐ ${row.name} · ${row.count} × ${row.pack} · ${money(row.price*row.count)}`)] : [];
  })].join('\n');
  try {
    await navigator.clipboard.writeText(output);
    $('copy').textContent = 'Copied!';
    window.setTimeout(()=>$('copy').textContent='Copy unchecked list',1800);
  } catch {
    window.prompt('Copy your unchecked list:',output);
  }
});
render();
refreshList();
save();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
