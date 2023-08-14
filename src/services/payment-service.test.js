import { PaymentService } from "./paymentService";

describe("Payment Service", () => {
  let paymentService;

  beforeEach(() => {
    paymentService = new PaymentService();
  });

  it("should return true if payment type are included on available payments", () => {
    const paymentsTypesToTest = ["dinheiro", "credito", "debito"];
    paymentsTypesToTest.forEach((paymentType) => {
      const result = paymentService.isPaymentTypeValid(paymentType);
      expect(result).toBe(true);
    });
  });

  it("should return false if payment type are not included on available payments", () => {
    const result = paymentService.isPaymentTypeValid("invalid payment type");
    expect(result).toBe(false);
  });

  it("should throw an error when given a invalid payment type", () => {
    try {
      paymentService.calculatePriceByPaymentType("invalid payment type", 0);
    } catch (error) {
      expect(error.message).toBe("Forma de pagamento inválida!");
    }
  });

  it("should decrease 5% when payment type is money", () => {
    const result = paymentService.calculatePriceByPaymentType("dinheiro", 10);
    expect(result).toBe(9.5);
  });

  it("should not adjust payment value when type is debit", () => {
    const result = paymentService.calculatePriceByPaymentType("debito", 10);
    expect(result).toBe(10);
  });

  it("should increase 3% when payment type is credit", () => {
    const result = paymentService.calculatePriceByPaymentType("credito", 10);
    expect(result).toBe(10.3);
  });
});
