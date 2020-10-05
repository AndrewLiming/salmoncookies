var seattleObject = {
    minimumCustomers: 23,
    maximumCustomers: 65,
    averageCookieSale: 6.3,

    customersPerHour: [],
    cookiesSalesPerHour: [],
}
 
function hourSales(minimumCustomers, maximumCustomers) {
     var min = Math.ceil(minimumCustomers);
     var max = Math.floor(maximumCustomers);
     console.log(minimumCustomers, maximumCustomers)
     return Math.floor(Math.random() * (max - min + 1) + min);
    }

function loopCalculator(object) {
        for (var i = 0; i < 14; i++) {
        var randomSale = Math.floor(hourSales(object.minimumCustomers, object.maximumCustomers))
        console.log (randomSale)   
        object.customersPerHour.push(randomSale);
            
            object.cookiesSalesPerHour.push(Math.floor(object.averageCookieSale * randomSale));
            
            console.log('customer per hour ', object.customersPerHour, object.cookiesSalesPerHour);
        }
        return object
    }
loopCalculator(seattleObject);

var tokyoObject = {
    minimumCustomers: 3,
    maximumCustomers: 24,
    averageCookieSale: 1.2,

    customersPerHour: [],
    cookiesSalesPerHour: [],
}
loopCalculator(tokyoObject);

var dubaiObject = {
    minimumCustomers: 11,
    maximumCustomers: 38,
    averageCookieSale: 3.7,

    customersPerHour: [],
    cookiesSalesPerHour: [],
}
loopCalculator(dubaiObject);

var parisObject = {
    minimumCustomers: 20,
    maximumCustomers: 38,
    averageCookieSale: 2.3,

    customersPerHour: [],
    cookiesSalesPerHour: [],
}
loopCalculator(parisObject);

var limaObject = {
    minimumCustomers: 2,
    maximumCustomers: 16,
    averageCookieSale: 4.6,

    customersPerHour: [],
    cookiesSalesPerHour: [],
}
loopCalculator(limaObject);