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

class Product {
    constructor(
        public id: number, 
        public title: string, 
        public price: number
    ) { }
}

class Delivery {
    constructor(
        public date: Date
    ) { }
}

class HomeDelivdery extends Delivery {
    constructor(
        date: Date,
        public address: string
    ) {
        super(date);
    }
}

class ShopDelivdery extends Delivery {
    constructor(
        public shopId: number
    ) {
        super(new Date());
    }
}

type DeliveryOptions = HomeDelivdery | ShopDelivdery;

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public deleteProduct(productId: number): void {
        this.products = this.products.filter((p: Product) => p.id !== productId);
    }

    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((prev: number, sum: number) => sum + prev);
    }

    public setDelivery(delivery: DeliveryOptions) {
        this.delivery = delivery;
    }

    public checkOut() {
        if(this.products.length === 0) {
            throw new Error("Корзина пустая!");
        }
        if(!this.delivery) {
            throw new Error("Не указан способ доставки!");
        }
        return {
            success: true
        }
    }
}

const cart = new Cart();

cart.addProduct(new Product(1, 'Печеньки', 40));
cart.addProduct(new Product(2, 'Торт', 200));
cart.addProduct(new Product(3, 'Шоколад', 100));
cart.deleteProduct(3);
cart.setDelivery(new HomeDelivdery(new Date(), 'Some address'));
console.log(cart.getSum());
console.log(cart.checkOut());