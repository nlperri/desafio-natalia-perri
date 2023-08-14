import { CartService } from "./cart-service";
import { OrderService } from "./order-service";
import { CartRepository } from "../repositories/cart-repository";
import { menu } from "../menu";
import { PaymentService } from "./paymentService";

describe("Cart Service", () => {
  let cartService;

  beforeEach(() => {
    cartService = new CartService(
      new CartRepository(menu),
      new OrderService(new PaymentService())
    );
  });

  it("should return total price from cart", () => {
    const result = cartService.execute("debito", ["cafe,1"]);

    expect(result).toBe("R$ 3,00");
  });
  it("should throw an error when cart is empty", () => {
    try {
      cartService.execute("debito", []);
    } catch (error) {
      expect(error.message).toBe("Não há itens no carrinho de compra!");
    }
  });

  it("should throw an error when product quantity is invalid", () => {
    try {
      cartService.execute("debito", ["cafe,0"]);
    } catch (error) {
      expect(error.message).toBe("Quantidade inválida!");
    }
  });

  it("should throw an error when product is not on the menu", () => {
    try {
      cartService.execute("debito", ["invalid product,1"]);
    } catch (error) {
      expect(error.message).toBe("Item inválido!");
    }
  });

  it("should throw an error when extra is ordered without main product", () => {
    try {
      cartService.execute("debito", ["chantily,1"]);
    } catch (error) {
      expect(error.message).toBe(
        "Item extra não pode ser pedido sem o principal"
      );
    }
  });
});
