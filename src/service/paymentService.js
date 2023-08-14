export class PaymentService {
    paymentType
    price

    
    isPaymentTypeValid(paymentType){
        const paymentTypes = ["dinheiro", "credito", "debito"]

        return paymentTypes.includes(paymentType)
    }

    calculatePriceByPaymentType(paymentType, price){
        if(!this.isPaymentTypeValid(paymentType)) {
            throw new Error("Forma de pagamento inválida!")
        }

        const paymentAdjustment = {
            dinheiro: - 0.05,
            credito: 0.03,
            debito: 0
        }

        const adjustedPrice = price * (1 + paymentAdjustment[paymentType])
        return Number(adjustedPrice.toFixed(2))
    }
}