import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
// import { v4 } from 'uuid';
import { User } from '../models';
import { dbOptions } from '@db/config';

const client = new Client(dbOptions);

@Injectable()
export class UsersService {
  async findOne(userId: string): Promise<User> {
    await client.connect();

    try {
      const ddlResult = await client.query(`select * from users where id='${userId}'`);
      console.log('[userService: findOne] ddlResult: ', ddlResult);
      return ddlResult;
    } catch (error) {
      console.error('[userService: findOne] error: ', error)
    } finally {
      client.end();
    }
  }

  async createOne({ name, email, password }: User): Promise<User> {
    await client.connect();

    try {
      const ddlResult = await client.query(`insert into users
        (name, email, password)
        values
        (${name}, ${email}, ${password})
        `);
      console.log('[userService: createOne] ddlResult: ', ddlResult);
      return ddlResult;
    } catch (error) {
      console.error('[userService: createOne] error: ', error)
    } finally {
      client.end();
    }
  }

}
