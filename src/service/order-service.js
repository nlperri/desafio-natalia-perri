export class OrderService {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  generateOrder(paymentType, price) {
    const payment = this.paymentService.calculatePriceByPaymentType(
      paymentType,
      price
    );
    const paymentInReal = payment.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return paymentInReal;
  }
}
