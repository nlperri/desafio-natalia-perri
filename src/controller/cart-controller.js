export class CartController {
    constructor(cartService){
        this.cartService = cartService
    }

    handle(paymentType, entries){
        const result = this.cartService.execute(paymentType, entries)
        return result
    }
}