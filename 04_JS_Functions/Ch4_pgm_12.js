var sale1;
var sale2;
var sale3;
var sale4;
var sale;
var calculateAndDisplaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 12 };

calculateAndDisplaySale = function (saleObj) {
    saleObj.tax = saleObj.price * saleObj.taxRate / 100;
    saleObj.total = saleObj.price + saleObj.tax;

    console.log("price = $" + saleObj.price);
    console.log("tax @ " + saleObj.taxRate + "% = $" + saleObj.tax);
    console.log("total cost = $" + saleObj.total);
    console.log("------------------------------");
};

calculateAndDisplaySale(sale1);
calculateAndDisplaySale(sale2);
calculateAndDisplaySale(sale3);
calculateAndDisplaySale(sale4);