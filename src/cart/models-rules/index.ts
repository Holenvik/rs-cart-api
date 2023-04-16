import { Cart, CartItem } from '../models';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: Cart): number {
  // return (
  //   cart?.items?.reduce(
  //     (acc: number, { product: { price }, count }: CartItem) => {
  //       return (acc += price * count);
  //     },
  //     0,
  //   ) ?? 0
  // );

  // Don't need right now, because now have issue with price
  return 0;
}
