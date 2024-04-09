import { DataSource } from "typeorm"
import { CustomBaseEntity } from "./entity/CustomBaseEntity"
import { User } from "./entity/User"
import * as dotenv from 'dotenv'

dotenv.config()


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    // logging: true,
    subscribers: [],
    migrations: [],
    entities: [CustomBaseEntity, User]
})