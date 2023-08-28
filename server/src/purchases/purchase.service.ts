import { Injectable } from "@nestjs/common";
import { Pool } from "pg";
import { CreatePurchaseDto } from "./dto/create-purchase.dto";

@Injectable()
export class PurchaseService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: '030514K',
      port: 5432,
    });
  }

  async add(purchase: CreatePurchaseDto): Promise<void> {
    const query = 'INSERT INTO cats (id, name, count) VALUES ($1, $2, $3)';
    await this.pool.query(query, [purchase.id, purchase.name, purchase.count]);
  }
}