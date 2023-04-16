import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { Order } from '../models';
import { dbOptions } from '@db/config';

const client = new Client(dbOptions);

const status = {
  open: 'OPEN',
  ordered: 'ORDERED',
};

@Injectable()
export class OrderService {
  // private orders: Record<string, Order> = {};

  async findById(orderId: string): Promise<Order> {
    await client.connect();

    try {
      const ddlResult = await client.query(
        `select * from orders where id='${orderId}'`,
      );
      console.log('[orderService: findById] ddlResult: ', ddlResult);
      return ddlResult;
    } catch (error) {
      console.error('[orderService: findById] error: ', error);
    } finally {
      client.end();
    }
  }

  async create(data: any): Promise<Order> {
    await client.connect();

    try {
      const ddlResult = await client.query(`insert into orders 
        (user_id, cart_id, payment, delivery, comments, total, status) 
        values
        (${data.user_id}, ${data.cart_id}, ${data.payment}, ${data.delivery}, ${data.comments}, ${data.total}, ${status.open})`);
      console.log('[orderService: create] ddlResult: ', ddlResult);
      return ddlResult;
    } catch (error) {
      console.error('[orderService: create] error: ', error);
    } finally {
      client.end();
    }
  }

  async update(orderId, data): Promise<Order> {
    await client.connect();

    try {
      const ddlResult = await client.query(`update orders 
        set 
        payment=${data.payment} 
        delivery=${data.delivery} 
        comments=${data.comments} 
        total=${data.total} 
        where id='${orderId}'`);
      console.log('[orderService: update] ddlResult: ', ddlResult);
      return ddlResult;
    } catch (error) {
      console.error('[orderService: update] error: ', error);
    } finally {
      client.end();
    }
  }
}
