export class CartService {
  constructor(cartRepository, orderService) {
    this.cartRepository = cartRepository;
    this.orderService = orderService;
  }

  execute(paymentType, entries) {
    if (!entries) {
      throw new Error("Não há itens no carrinho de compra!");
    }

    entries.forEach((item) => {
      const { code, quantity } = this.extractValuesFromEntry(item);

      this.cartRepository.validateCode(code);

      if (!quantity) {
        throw new Error("Quantidade inválida!");
      }

      if (this.cartRepository.isItemExtra(code)) {
        this.cartRepository.isMainOnCart(code);
      }

      this.cartRepository.addToCart({ code, quantity });
    });

    this.total = this.orderService.generateOrder(
      paymentType,
      this.cartRepository.calculateTotal()
    );
    return this.total;
  }

  extractValuesFromEntry(entry) {
    const [code, quantity] = entry.split(",");
    return { code, quantity: Number(quantity) };
  }
}
