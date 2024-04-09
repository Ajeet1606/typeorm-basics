import { DataSource } from "typeorm"
import { CustomBaseEntity } from "./entity/CustomBaseEntity"
import { User } from "./entity/user"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Ajeet@123",
    database: "mydb",
    synchronize: true,
    // logging: true,
    subscribers: [],
    migrations: [],
    entities: [CustomBaseEntity, User]
})