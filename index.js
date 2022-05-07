const data = [
  {
    product: 'laptop',
    rate: 50000,
    discountType: 'percentage',
    quantity: 1,
  },
  {
    product: 'mobile',
    rate: 16000,
    discountType: 'flat',
    quantity: 2,
  },
  {
    product: 'keyboard',
    rate: 1000,
    discountType: 'none',
    quantity: 5,
  },
];

const discountTypes = {
  percentage: (product) => product.rate * 0.2,
  flat: (product) => 1000,
  none: (product) => 0,
};

const getDiscount = (product) =>
  discountTypes[product.discountType](product);

const getRate = (product) =>
  product.rate - getDiscount(product);

const getPrice = (product) =>
  getRate(product) * product.quantity;

const getTotal = (lineItems) =>
  lineItems.reduce(
    (running, product) => running + getPrice(product), 0);

const main = (data) =>
  console.log(getTotal(data));

main(data);

