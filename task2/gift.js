function Sweets(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Gift(sweets) {
  this.sweets = sweets;
}

Gift.prototype.getWeight = function() {
  let weight = 0;
  this.sweets.forEach(sweets => {
    weight += sweets.weight;
  });
  return weight;
};

Gift.prototype.sort = function() {
  return this.sweets.sort(function(a, b) {
    return a.weight - b.weight;
  });
};

Gift.prototype.searchByName = function(name) {
  return this.sweets.filter(sweet => sweet.name === name);
};

const snikers = new Sweets('snikers', 300);
const twix = new Sweets('twix', 290);
const mars = new Sweets('mars', 310);
const gift = new Gift([snikers, mars, twix]);
console.log(gift);
console.log(gift.sort());
console.log(gift.getWeight());
console.log(gift.searchByName('twix'));
