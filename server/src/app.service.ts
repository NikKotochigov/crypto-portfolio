// import { Injectable } from '@nestjs/common';
// import { Pool } from 'pg';

// @Injectable()
// export class TestService {
//   private pool: Pool;

//   constructor() {
//     this.pool = new Pool({
//       user: 'postgres',
//       host: 'localhost',
//       database: 'postgres',
//       password: '030514Kolia',
//       port: 5432,
//     });
//   }

//   async add(name: string, count: number): Promise<void> {
//     const query = 'INSERT INTO cats (name, count) VALUES ($1, $2)';
//     await this.pool.query(query, [name, count]);
//   }
// }
