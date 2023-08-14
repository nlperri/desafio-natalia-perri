export class CartRepository {
  items = [];

  constructor(menu) {
    this.menu = menu;
  }

  getItemFromMenu(code) {
    const currentItem = this.menu.find((item) => item.code === code);

    if (!currentItem) {
      throw new Error("Item inválido!");
    }

    return currentItem;
  }

  validateCode(code) {
    return this.getItemFromMenu(code);
  }

  addToCart({ code, quantity }) {
    this.items.push({ code, quantity });
  }

  isItemExtra(code) {
    const currentItem = this.getItemFromMenu(code);

    return !currentItem.isMain;
  }

  isMainOnCart(code) {
    const extra = this.menu.find((extra) => extra.code === code);
    const main = this.getItemFromMenu(extra.mainItemCode);
    if (!this.items.find((item) => item.code === main.code)) {
      throw new Error("Item extra não pode ser pedido sem o principal");
    }
  }

  calculateProductPriceByQuantity(code, quantity) {
    const currentItem = this.getItemFromMenu(code);
    const price = currentItem.value * quantity;

    return price;
  }

  calculateTotal() {
    if (!this.items.length) {
      throw new Error("Não há itens no carrinho de compra!");
    }
    const total = this.items.reduce((acc, cur) => {
      const itemOnMenu = this.getItemFromMenu(cur.code);
      const priceInNumber = Number(
        itemOnMenu.value.replace("R$", "").replace(",", ".")
      );
      return priceInNumber * cur.quantity + acc;
    }, 0);
    return total;
  }
}
