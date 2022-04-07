"use strict";
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var Delivery = /** @class */ (function () {
    function Delivery(date) {
        this.date = date;
    }
    return Delivery;
}());
var HomeDelivdery = /** @class */ (function (_super) {
    __extends(HomeDelivdery, _super);
    function HomeDelivdery(date, address) {
        var _this = _super.call(this, date) || this;
        _this.address = address;
        return _this;
    }
    return HomeDelivdery;
}(Delivery));
var ShopDelivdery = /** @class */ (function (_super) {
    __extends(ShopDelivdery, _super);
    function ShopDelivdery(shopId) {
        var _this = _super.call(this, new Date()) || this;
        _this.shopId = shopId;
        return _this;
    }
    return ShopDelivdery;
}(Delivery));
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Cart.prototype.deleteProduct = function (productId) {
        this.products = this.products.filter(function (p) { return p.id !== productId; });
    };
    Cart.prototype.getSum = function () {
        return this.products
            .map(function (p) { return p.price; })
            .reduce(function (prev, sum) { return sum + prev; });
    };
    Cart.prototype.setDelivery = function (delivery) {
        this.delivery = delivery;
    };
    Cart.prototype.checkOut = function () {
        if (this.products.length === 0) {
            throw new Error("Корзина пустая!");
        }
        if (!this.delivery) {
            throw new Error("Не указан способ доставки!");
        }
        return {
            success: true
        };
    };
    return Cart;
}());
var cart = new Cart();
cart.addProduct(new Product(1, 'Печеньки', 40));
cart.addProduct(new Product(2, 'Торт', 200));
cart.addProduct(new Product(3, 'Шоколад', 100));
cart.deleteProduct(3);
cart.setDelivery(new HomeDelivdery(new Date(), 'Some address'));
console.log(cart.getSum());
console.log(cart.checkOut());
