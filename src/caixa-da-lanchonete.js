import { menu } from "./menu"
import { CartRepository } from "./repositories/cart-repository";
import { CartService } from "./service/cart-service";
import { CartController } from "./controller/cart-controller";
import { OrderService } from "./service/order-service";
import { PaymentService } from "./service/paymentService";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            const cartController = this.cartController()
            const result = cartController.handle(metodoDePagamento, itens)
            return result
        } catch (error) {
            console.log(error)
            return error.message
        }
    }

    cartController(){
        try {
           const cartRepository = new CartRepository(menu) 
           const paymentService = new PaymentService()
           const orderService = new OrderService(paymentService)
           const cartService = new CartService(cartRepository, orderService)
           const cartController = new CartController(cartService)
           return cartController
        } catch (error) {
            return error.message
        }   
    }

}

export { CaixaDaLanchonete };
