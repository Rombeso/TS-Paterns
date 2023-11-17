abstract class DeliveryItem {
    items: DeliveryItem[] = []

    addItem(item: DeliveryItem) {
        this.items.push(item)
    }

    getItemPrices(): number {
        console.log('item:', this.items)
        return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0)
    }

    abstract getPrice(): number
}

class DeliveryShop extends DeliveryItem {
    constructor(private deliveryFee: number) {
        super()
    }

    getPrice(): number {
        return this.getItemPrices() + this.deliveryFee
    }
}

class Package extends DeliveryItem {
    getPrice(): number {
        return this.getItemPrices()
    }
}

class Product1 extends DeliveryItem {
    constructor(private price: number) {
        super();
    }
    getPrice(): number {
        return this.price;
    }
}

const shop = new DeliveryShop(100)
shop.addItem(new Product1(1000))

const pack1 = new Package()
pack1.addItem(new Product1(200))
shop.addItem(pack1)

console.log(shop.getPrice());