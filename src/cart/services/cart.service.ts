import { Injectable } from '@nestjs/common';

import { Cart } from '../models';
import { createConnectionToDB } from '@db/config';

@Injectable()
export class CartService {
  private dbClient;

  async findByUserId(userId: string): Promise<Cart> {
    try {
      this.dbClient = await createConnectionToDB();
      const cart = await this.dbClient.query(
        `select * from carts where user_id = ${userId}`,
      );

      if (!cart) {
        throw new Error(`Cart not found`);
      }

      const items = await this.dbClient.query(
        `select * from cart_items where cart_id = ${cart.rows[0]?.id}`,
      );

      return { id: cart.rows[0]?.id, items: items.rows };
    } catch (err) {
      console.log('Error on service getCarts: ', err);
      return err;
    }
  }

  async updateByUserId(
    userId: string,
    { productId, count },
  ): Promise<{ count: string }> {
    try {
      this.dbClient = await createConnectionToDB();

      const updatedItem = await this.dbClient.query(
        `update cart_items set count = ${count} where (cart_id IN (SELECT id FROM carts where user_id = ${userId}) AND product_id = ${productId})  returning count`,
      );

      return { count: updatedItem.rows[0].count };
    } catch (err) {
      console.log('Error on service updateCartItem: ', err);
      return err;
    }
  }

  async removeByUserId(userId): Promise<void> {
    try {
      this.dbClient = await createConnectionToDB();
      const cart_item = await this.dbClient.query(
        `delete from cart_items where cart_id IN (SELECT id FROM carts where user_id = ${userId}) returning *`,
      );
      return cart_item.rows[0];
    } catch (err) {
      console.log('Error on service removeCartItem: ', err);
      return err;
    }
  }
}
