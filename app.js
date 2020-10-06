var CookieShop = function (name, minimumCustomers, maximumCustomers, averageCookieSale) {
  this.name = name;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookieSale = averageCookieSale;
  this.customersPerHour = [];
  this.cookiesSalesPerHour = [];
};
var seattleObject = new CookieShop('Seattle', 23, 65, 6.3);
// var seattleObject = {
//   name: 'Seattle',
//   minimumCustomers: 23,
//   maximumCustomers: 65,
//   averageCookieSale: 6.3,

//   customersPerHour: [],
//   cookiesSalesPerHour: [],
// };
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function hourSales(minimumCustomers, maximumCustomers) {
  var min = Math.ceil(minimumCustomers);
  var max = Math.floor(maximumCustomers);
  console.log(minimumCustomers, maximumCustomers);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function loopCalculator(object) {
  for (var i = 0; i < 14; i++) {
    var randomSale = Math.ceil(hourSales(object.minimumCustomers, object.maximumCustomers));
    console.log(randomSale);
    object.customersPerHour.push(randomSale);

    object.cookiesSalesPerHour.push(Math.ceil(object.averageCookieSale * randomSale));

    console.log('customer per hour ', object.customersPerHour, object.cookiesSalesPerHour);
  }
  return object;
}
loopCalculator(seattleObject);

var tokyoObject = new CookieShop('Tokyo', 3, 24, 1.2);
// var tokyoObject = {
//   name: 'Tokyo',
//   minimumCustomers: 3,
//   maximumCustomers: 24,
//   averageCookieSale: 1.2,

//   customersPerHour: [],
//   cookiesSalesPerHour: [],
// };
loopCalculator(tokyoObject);

var dubaiObject = new CookieShop('Dubai', 11, 38, 3.7);
// var dubaiObject = {
//   name: 'Dubai',
//   minimumCustomers: 11,
//   maximumCustomers: 38,
//   averageCookieSale: 3.7,

//   customersPerHour: [],
//   cookiesSalesPerHour: [],
// };
loopCalculator(dubaiObject);

var parisObject = new CookieShop('Paris', 20, 38, 2.3);
// var parisObject = {
//   name: 'Paris',
//   minimumCustomers: 20,
//   maximumCustomers: 38,
//   averageCookieSale: 2.3,

//   customersPerHour: [],
//   cookiesSalesPerHour: [],
// };
loopCalculator(parisObject);

var limaObject = new CookieShop('Lima', 2, 16, 4.6);
// var limaObject = {
//   name: 'Lima',
//   minimumCustomers: 2,
//   maximumCustomers: 16,
//   averageCookieSale: 4.6,

//   customersPerHour: [],
//   cookiesSalesPerHour: [],
// };
loopCalculator(limaObject);

function listRender(object) {
  var header = document.createElement('h2');
  header.textContent = object.name;
  var salesInfo = document.getElementById('salesinfo');
  salesInfo.appendChild(header);
  var list = document.createElement('ul');
  var total = 0;
  for (var i = 0; i < openHours.length; i++) {
    var amount = document.createElement('li');
    amount.textContent = openHours[i] + ' ' + object.cookiesSalesPerHour[i] + ' Cookies';
    total += object.cookiesSalesPerHour[i];
    list.appendChild(amount);
  }
  var cookieTotal = document.createElement('li');
  cookieTotal.textContent = 'total ' + total + ' Cookies';
  list.appendChild(cookieTotal);
  salesInfo.appendChild(list);
}
// listRender(seattleObject);
// listRender(dubaiObject);
// listRender(tokyoObject);
// listRender(limaObject);
// listRender(parisObject);
function tableHeader() {
  var parentElement = document.getElementById('table');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  trElement.appendChild(thElement);
  for (var i = 0; i < openHours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = openHours[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}
tableHeader();

function tableRender(object) {
  var parentelement = document.getElementById('table');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = object.name;
  trElement.appendChild(thElement);
  for (var i = 0; i < openHours.length; i++) {
    var amount = document.createElement('td');
    amount.textContent = object.cookiesSalesPerHour[i];
    trElement.appendChild(amount);
  }
  parentelement.appendChild(trElement);
}
tableRender(seattleObject);
tableRender(dubaiObject);
tableRender(tokyoObject);
tableRender(limaObject);
tableRender(parisObject);
