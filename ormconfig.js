module.exports = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  entities: [
    "./src/**/entities/*.ts"
  ],
  cli: {
    "migrationsDir": "./src/database/migrations"
  }
}