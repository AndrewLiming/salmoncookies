var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var citiesArray = [];
var parentelement = document.getElementById('table');

var CookieShop = function (name, minimumCustomers, maximumCustomers, averageCookieSale) {
  this.name = name;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookieSale = averageCookieSale;
  this.customersPerHour = [];
  this.cookiesSalesPerHour = [];

  citiesArray.push(this);
};
var seattleObject = new CookieShop('Seattle', 23, 65, 6.3);

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

loopCalculator(tokyoObject);

var dubaiObject = new CookieShop('Dubai', 11, 38, 3.7);

loopCalculator(dubaiObject);

var parisObject = new CookieShop('Paris', 20, 38, 2.3);
loopCalculator(parisObject);

var limaObject = new CookieShop('Lima', 2, 16, 4.6);
loopCalculator(limaObject);


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

function buildFooter() {
  var footerTotals = document.createElement('fTotals');
  
  var label = document.createElement('th');
  label.textContent = 'Totals';
  footerTotals.appendChild(label);
  
  var hourlyTotal = 0;
  var dailyTotal = 0;
  
  for (var i = 0; i < openHours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < citiesArray.length; j++) {
      hourlyTotal += citiesArray[j].cookiesSalesPerHour[i];
      dailyTotal += citiesArray[j].cookiesSalesPerHour[i];
    }
    var footerSum = document.createElement('th');
    footerSum.textContent = hourlyTotal;
    footerTotals.appendChild(footerSum);
  }
  var grandTotal = document.createElement('th');
  grandTotal.textContent = dailyTotal;
  footerTotals.appendChild(grandTotal);

  parentelement.appendChild(footerTotals);
}

tableRender(seattleObject);
tableRender(dubaiObject);
tableRender(tokyoObject);
tableRender(limaObject);
tableRender(parisObject);
buildFooter();

