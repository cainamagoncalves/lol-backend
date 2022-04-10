import { Connection, createConnection } from "typeorm";
// import { TypeormDatabaseConfig } from '../config/typeorm-database-config'

createConnection();

// export class Database {
//   public connection: Connection;

//   constructor() {
//     this.getConnection()
//   }

//   public async getConnection(): Promise<Connection> {

//     if (this.connection?.isConnected) {
//       return this.connection
//     }

//     this.connection = await createConnection()

//     return this.connection
//   }

//   public async closeConnection(): Promise<void> {

//     if (this.connection?.isConnected) {
//       await this.connection.close()
//     }
//   }
// }

