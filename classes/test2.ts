class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,) {
    }
}

class Delivery {
    constructor(date: Date) {
    }
}

class HomeDelivery extends Delivery {
    constructor(public date: Date, public address: string) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(date: Date, public id: number) {
        super(date = new Date());
    }
}


class Cart {
    private products: Product[] = []
    private delivery: HomeDelivery | ShopDelivery

    constructor() {

    }

    addProducts(product: Product): void {
        this.products.push(product)
        console.log('add:', this.products)
    }

    removeProduct(id: number): void {
        this.products = this.products.filter((el) => {
            return el.id !== id
        })
        console.log('remove:', this.products)
    }

    setDelivery(delivery: HomeDelivery | ShopDelivery): void {
        this.delivery = delivery
        console.log('delivery', this.delivery)
    }

    countCost(): number {
        return this.products
            .map((el => el.price))
            .reduce((p1, p2) => p1 + p2)
    }

    checkout(): void {
        if (!this.products.length) {
            throw Error('У вас пустая карзина')
        }
        if (!this.delivery) {
            throw Error('Вы не выбрали дату и место доставки')
        }
        console.log('Доставка оформлена')
    }
}

let cart = new Cart()
cart.addProducts({id: 1, name: 'Картошка', price: 123})
cart.addProducts({id: 2, name: 'Картошка', price: 123})
cart.setDelivery({address: 'Moscow', date: new Date()})
console.log(cart.countCost())
cart.checkout()
cart.removeProduct(1)
