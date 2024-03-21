export function add(value, item, cntx) {
  let { quantity, items } = { ...cntx.cart };
  if (items[value] === undefined) {
    items[value] = { quantity: 1, price: item.price, name: item.name };
  } else {
    items[value] = {
      quantity: items[value].quantity + 1,
      price: item.price,
      name: item.name,
    };
  }
  quantity += 1;
  console.log(items);
  return { quantity: quantity, items: items };
}

export function subtract(value, item, cntx) {
  let { quantity, items } = { ...cntx.cart };
  if (items[value].quantity === 1) {
    delete items[value];
  } else {
    items[value] = {
      quantity: items[value].quantity - 1,
      price: item.price,
      name: item.name,
    };
  }

  quantity -= 1;

  return { quantity: quantity, items: items };
}

export function calculate(value) {
    let total=0;
    for(const p of value){
        total+=p[1].quantity * p[1].price
    }
  return total.toFixed(2)
}
