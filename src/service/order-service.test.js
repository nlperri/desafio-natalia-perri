import { OrderService } from "./order-service";
import { PaymentService } from "./paymentService";

describe("Order Service", () => {
  let orderService;

  beforeEach(() => {
    orderService = new OrderService(new PaymentService());
  });

  it("should convert price value to BRL currency", () => {
    const result = orderService.generateOrder("debito", 10);

    expect(result).toStrictEqual("R$ 10,00");
  });
});
