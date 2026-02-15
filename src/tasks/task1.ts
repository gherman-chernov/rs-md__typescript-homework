interface Receipt {
  price: number,
  discount: number,
  isInstallment: boolean,
  months: number
}

const MAX_DUE_DATE_MONTHS: number = 24;

export default function totalPrice({price, discount, isInstallment, months}: Receipt) {
  if (discount > 100) {
    throw new Error('Wrong discount')
  }
  if (discount > 0) {
    price *= (100 - discount) / 100
  }
  if (!isInstallment) {
    return price
  }
  if (months < 0 || months > MAX_DUE_DATE_MONTHS) {
    throw new Error('Wrong installment due')
  }

  return price / months;
}